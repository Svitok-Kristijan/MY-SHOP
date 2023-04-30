import {takeLatest, call, all, put} from "redux-saga/effects";
import {USER_ACTION_TYPES} from "./user.types";

import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
  signUpStart,
  signOutStart,
  signOutFailed,
} from "./user.action";

import {
  getCurrentUser,
  createUserElementFromAuth,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import {createUserWithEmailAndPassword} from "firebase/auth";

export function* getUserSnapshot(userAuth, additionalInformation) {
  try {
    const userSnapshot = yield call(
      createUserElementFromAuth,
      userAuth,
      additionalInformation
    );

    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuth() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getUserSnapshot, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield call(signInWithGooglePopup);
    yield call(getUserSnapshot, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUp({payload: {email, password, displayName}}) {
  try {
    const {user} = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, {displayName}));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInWithEmailAndPassword({payload: {email, password}}) {
  try {
    const {user} = yield call(
      singInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getUserSnapshot, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInAfterSignUp({payload: {user, additionalDetails}}) {
  yield call(getUserSnapshot, user, additionalDetails);
}

export function* onEmailSignInStart() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuth);
}
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpSuccess),
    call(onSignUpStart),
    call(onSignOutStart),
  ]);
}
