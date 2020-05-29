import {updateObjectInArray} from "../utils/helpers";
import {appActions, AppActionsTypes} from "./app-reducer";
import {UserType} from "../types/types";
import {CommonThunkType, InferActionsTypes} from "./store";
import {Dispatch} from "redux";
import {usersApi} from "../api/users-api";
import {ResultCodesEnum} from "../api/api";

const initialState = {
    usersData: [] as Array<UserType>,
    count: 6,
    currentPage: 1,
    startPage: 1,
    totalCount: 0,
    followingInProgress: [] as Array<number> //Array of user ids
};

const usersReducer = (state = initialState, action: UserActionsTypes): InitialStateType => {
    switch (action.type) {
        case "PORTFOLIO/USERS/FOLLOW":
        case "PORTFOLIO/USERS/UN-FOLLOW":
            return {
                ...state,
                usersData: updateObjectInArray(
                    state.usersData,
                    action.payload.userId,
                    'id',
                    {followed: action.payload.followed}
                )
            };
        case "PORTFOLIO/USERS/SET-USERS":
        case "PORTFOLIO/USERS/SET-CURRENT-PAGE":
        case "PORTFOLIO/USERS/SET-TOTAL-COUNT":
            return {
                ...state,
                ...action.payload
            };
        case "PORTFOLIO/USERS/TOGGLE_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
};

// actions

export const userActions = {
    followSuccess: (userId: number) => ({
        type: 'PORTFOLIO/USERS/FOLLOW',
        payload: {userId, followed: true}
    } as const),
    unFollowSuccess: (userId: number) => ({
        type: 'PORTFOLIO/USERS/UN-FOLLOW',
        payload: {userId, followed: false}
    } as const),
    setUsers: (users: Array<UserType>) => ({
        type: 'PORTFOLIO/USERS/SET-USERS',
        payload: {usersData: users}
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'PORTFOLIO/USERS/SET-CURRENT-PAGE',
        payload: {currentPage}
    } as const),
    setTotalCount: (totalCount: number) => ({
        type: 'PORTFOLIO/USERS/SET-TOTAL-COUNT',
        payload: {totalCount}
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'PORTFOLIO/USERS/TOGGLE_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
};

//thunks

export const getUsers = (count: number, currentPage: number): ThunkType => async (dispatch) => {
    dispatch(appActions.toggleIsFetching(true));
    let data = await usersApi.getUsers(count, currentPage);

    dispatch(userActions.setUsers(data.items));
    dispatch(userActions.setTotalCount(data.totalCount));
    dispatch(appActions.toggleIsFetching(false));
    dispatch(userActions.setCurrentPage(currentPage));
};

export const searchUsers = (userName: string): ThunkType => async (dispatch) => {
    dispatch(appActions.toggleIsFetching(true));
    let data = await usersApi.searchUsers(userName);

    dispatch(userActions.setUsers(data.items));
    dispatch(appActions.toggleIsFetching(false));
};

const followUnfollowFlow = async (apiMethod: (userId: number) => Promise<number>,
                                  dispatch: Dispatch<UserActionsTypes>, userId: number,
                                  actionCreator: (userId: number) => UserActionsTypes) => {
    dispatch(userActions.toggleFollowingProgress(true, userId));
    let resultCode = await apiMethod(userId);

    if (resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(userActions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
    followUnfollowFlow(usersApi.follow.bind(usersApi), dispatch, userId, userActions.followSuccess);
};

export const unFollow = (userId: number) => (dispatch: any) => {
    followUnfollowFlow(usersApi.unFollow.bind(usersApi), dispatch, userId, userActions.unFollowSuccess);
};

type InitialStateType = typeof initialState;
type UserActionsTypes = InferActionsTypes<typeof userActions>;
type ThunkType = CommonThunkType<UserActionsTypes | AppActionsTypes>;

export default usersReducer;
