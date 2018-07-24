import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(actionType) {
  return actionType.substring(actionType.length - 8) === '_SUCCESS';
}

function actionTypeEndsInErrors(actionType) {
  return actionType.substring(actionType.length - 6) === '_ERROR';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if(action.type === types.BEGIN_AJAX_CALL){
    return state + 1;
  }else if(actionTypeEndsInSuccess(action.type) || actionTypeEndsInErrors(action.type)){
    return state -1;
  }

  return state;
}
