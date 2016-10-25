import { combineReducers } from 'redux';
import CourseReducers from './course_reducers';
import LessonReducers from './lesson_reducers';

const rootReducer = combineReducers({
    lessons: LessonReducers,
    courses: CourseReducers
});

export default rootReducer;
