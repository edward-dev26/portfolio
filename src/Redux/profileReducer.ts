import {profileAPI} from "../api/api";
import {toggleIsFetching, uploadInProgress} from "./appReducer";
import {getOwnerProfileData, setProfileData} from "./authReducer";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'portfolio/profile/ADD-POST';
const SET_USER_PROFILE = 'portfolio/profile/SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'portfolio/profile/SET_PROFILE_STATUS';
const DELETE_POST = 'portfolio/profile/DELETE_POST';
const INCREMENTED_LIKE = 'portfolio/profile/INCREMENTED_LIKE';
const UPLOAD_PROFILE_PHOTO_SUCCESS = 'portfolio/profile/UPLOAD_PROFILE_PHOTO_SUCCESS';
const UPDATE_PROFILE_DATA_SUCCESS = 'portfolio/profile/UPDATE_PROFILE_DATA_SUCCESS';


let initialState = {
    postData: [
        {
            id: 3,
            date: '10/20/2019',
            likeCount: 15,
            postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
                'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n' +
                'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n' +
                'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n' +
                'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {
            id: 2,
            date: '10/20/2019',
            likeCount: 54,
            postText: 'I learn React JS'
        },
        {
            id: 1,
            date: '10/20/2019',
            likeCount: 24,
            postText: "It'style my first post"

        }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '' as string,
    followed: true,
    isUpdateSuccess: false
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action:any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postData[0].id + 1,
                date: '10/21/2019',
                likeCount: 0,
                postText: action.post
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile

            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: state.postData.filter((post) => post.id != action.postId)
            }
        }
        case INCREMENTED_LIKE: {
            return {
                ...state,
                postData: state.postData.map((post) => {
                    if (post.id == action.postId) {
                        return {...post, likeCount: post.likeCount + 1};
                    } else {
                        return post;
                    }
                })
            }
        }
        case UPLOAD_PROFILE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        ...action.photos
                    }
                } as ProfileType
            }
        }
        case UPDATE_PROFILE_DATA_SUCCESS: {
            return {
                ...state,
                isUpdateSuccess: action.isUpdateSuccess
            }
        }
        default:
            return state;
    }
};

type AddPostActionType = {
    type: typeof ADD_POST,
    post: string
}

export const addPost = (post: string): AddPostActionType => ({type: ADD_POST, post});


type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}

export const deletePost = (postId: number): DeletePostActionType => ({
    type: DELETE_POST,
    postId
});

type IncrementedLikeActionType = {
    type: typeof INCREMENTED_LIKE,
    postId: number
}

export const incrementedLike = (postId: number): IncrementedLikeActionType => {
    return {
        type: INCREMENTED_LIKE,
        postId
    }
};

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS,
    status: string
}

const setProfileStatus = (status: string): SetProfileStatusActionType => {
    return {
        type: SET_PROFILE_STATUS,
        status
    }
};

type UploadProfilePhotoSuccess = {
    type: typeof UPLOAD_PROFILE_PHOTO_SUCCESS,
    photos: PhotosType
}

const uploadProfilePhotoSuccess = (photos: PhotosType): UploadProfilePhotoSuccess => {
    return {
        type: UPLOAD_PROFILE_PHOTO_SUCCESS,
        photos
    }
};

type UpdateProfileDataSuccess = {
    type: typeof UPDATE_PROFILE_DATA_SUCCESS,
    isUpdateSuccess: boolean
}

export const updateProfileDataSuccess = (isUpdateSuccess: boolean): UpdateProfileDataSuccess => {
    return {
        type: UPDATE_PROFILE_DATA_SUCCESS,
        isUpdateSuccess
    }
};

export const getUserProfile = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        let data = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(data));
        dispatch(toggleIsFetching(false));
    }
};

export const getProfileStatus = (userId: number) => {
    return async (dispatch: any) => {
        let response = await profileAPI.getProfileStatus(userId);
        dispatch(setProfileStatus(response.data));
    }
};
export const updateProfileStatus = (status: string) => {
    return async (dispatch: any) => {
        let response = await profileAPI.updateProfileStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        }
    }
};

export const uploadProfilePhoto = (photoFile: any) => {
    return async (dispatch: any, getState: any) => {
        dispatch(uploadInProgress(true));
        let photos = await profileAPI.uploadProfilePhoto((photoFile));
        dispatch(uploadProfilePhotoSuccess(photos));
        dispatch(setProfileData(photos, getState().auth.login));
        dispatch(uploadInProgress(false));
    };
};

export const updateProfileData = (profileData: any) => {
    return async (dispatch: any, getState: any) => {
        dispatch(updateProfileDataSuccess(false));
        let data = await profileAPI.updateProfileData(profileData);
        let userId = getState().auth.userId;
        if (data.resultCode === 0) {
            dispatch(updateProfileDataSuccess(true));
            dispatch(getOwnerProfileData(userId));
        } else {
            let errorItems = data.messages.map( (message:any) => {
                let start = message.indexOf('>') + 1;
                let item = message.slice(start, message.indexOf(')',start));
                return item[0].toLowerCase() + item.slice(1);
            });

            type Errors = {
                contacts: any
            }

            let errors: Errors = {"contacts": {} };

            errorItems.forEach( (item:string) => {
                errors["contacts"][item] = 'Invalid url format';
            } );
            dispatch(stopSubmit('edit', errors));
        }
    }
};

export default profileReducer;