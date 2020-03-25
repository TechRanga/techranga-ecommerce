import UserActionTypes from './user.actionTypes';
export const setCurrentUser = user =>(
    {
        type:UserActionTypes.SET_CURRENT_USER,
        payload:user
    }
);

export const startGoogleSignIn = () => (
    {
        type:UserActionTypes.GOOGLE_SIGN_IN_START
    }
);

export const signInSuccess = user =>(
    {
        type:UserActionTypes.SIGN_IN_SUCCESS,
        payload:user
    }
);

export const signInFailure = error =>(
    {
        type:UserActionTypes.SIGN_IN_FAILURE,
        payload:error
    }
);



export const startEmailSignIn = emailAndPassword => (
    {
        type:UserActionTypes.EMAIL_SIGN_IN_START,
        payload:emailAndPassword
    }
);

export const checkUserSession = () =>(
    {
        type:UserActionTypes.CHECK_USER_SESSION
    }
);

export const startSignOut = () => (
    {
        type:UserActionTypes.SIGN_OUT_START
    }
);

export const signOutSuccess = () => (
    {
        type:UserActionTypes.SIGN_OUT_SUCCESS
    }
);

export const signOutFailure = (message) => (
    {
        type:UserActionTypes.SIGN_OUT_FAILURE,
        payload:message
    }
);
