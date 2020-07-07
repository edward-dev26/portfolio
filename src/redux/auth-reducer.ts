import {appActions} from "./app-reducer";
import {FormAction, stopSubmit} from "redux-form";
import {LoginFormData, PhotosType} from "../types/types";
import {CommonThunkType, InferActionsTypes} from "./store";
import {profileApi} from "../api/profile-api";
import {authApi} from "../api/auth-api";
import {securityApi} from "../api/security-api";
import {ResultCodesEnum, ResultCodesForCaptchaEnum} from "../api/api";

let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    photos: {} as PhotosType,
    captchaURL: null as string | null
};

const authReducer = (state = initialState, action: AuthActionsTypes): InitialStateType => {
    switch (action.type) {
        case "PORTFOLIO/AUTH/SET_PROFILE_DATA":
            return {
                ...state,
                login: action.login,
                photos: {...action.photos}
            };
        case "PORTFOLIO/AUTH/SET_CAPTCHA_URL":
        case "PORTFOLIO/AUTH/SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

//actions

export const authActions = {
    setUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'PORTFOLIO/AUTH/SET_USER_DATA',
        payload: {userId, login, email, isAuth}
    } as const),
    setProfileData: (photos: PhotosType, login: string | null) => ({
        type: 'PORTFOLIO/AUTH/SET_PROFILE_DATA',
        photos,
        login
    } as const),
    setCaptchaUrl: (captchaURL: string | null) => ({
        type: 'PORTFOLIO/AUTH/SET_CAPTCHA_URL',
        payload: {captchaURL}
    } as const),
};

// thunks

export const getOwnerProfileData = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileApi.getUserProfile(userId);

    dispatch(authActions.setProfileData(data.photos, data.fullName));
};


export const auth = (): ThunkType => async (dispatch) => {
    let data = await authApi.authMe();

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = data.data;

        dispatch(getOwnerProfileData(id));
        dispatch(authActions.setUserData(id, login, email, true));
    }
};

export const login = (formData: LoginFormData): ThunkType => async (dispatch) => {
    dispatch(appActions.toggleIsFetching(true));
    let data = await authApi.login(formData.email, formData.password, formData.rememberMe, formData.captcha);

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(auth());
    } else {
        if (data.resultCode === ResultCodesForCaptchaEnum.IsCaptcha) {
            dispatch(getCaptchaUrl());
        } else {
            let message = data.messages ? data.messages : 'Some error';

            dispatch(stopSubmit('login', {_error: message}));
        }
    }
    dispatch(authActions.setCaptchaUrl(null));
    dispatch(appActions.toggleIsFetching(false));
};

export const logout = (): ThunkType => async (dispatch) => {
    let resultCode = await authApi.logout();

    if (resultCode === ResultCodesEnum.Success) {
        dispatch(authActions.setUserData(null, null, null, false));
        dispatch({type: 'sda'})
    }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityApi.captcha();

    dispatch(authActions.setCaptchaUrl(data.url));
};

type InitialStateType = typeof initialState;
export type AuthActionsTypes = InferActionsTypes<typeof authActions>;
type ThunkType = CommonThunkType<AuthActionsTypes | FormAction>;

export default authReducer;