import { combineReducers } from 'redux';
import CourseReducers from './course_reducers';
import LessonReducers from './lesson_reducers';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    lessons: LessonReducers,
    courses: CourseReducers,
    auth: AuthReducer,
    routing: routerReducer
});

export default rootReducer;
