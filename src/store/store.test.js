import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';
import * as types from "../actions/actionTypes";

describe('Store', () => {
  it('should handle creating courses', () => {
    // Arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    // Action
    const action = courseActions.createdCourseSuccess(course);
    store.dispatch(action);

    // Assets
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };

    expect(actual).toEqual(expected);

  });
});
