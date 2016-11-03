import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeIndex from './views/IndexHome';
import App from './views/App';
import Course from './views/Course';
import CourseList from './views/CourseList';
import CreateCourse from './views/CreateCourse';
import CreateLesson from './views/CreateLesson';
import Lesson from './views/Lesson';
import LessonList from './views/LessonList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} />
    <Route path="/course" component={Course} />
    <Route path="/courses" component={CourseList} />
    <Route path="/createcourse" component={CreateCourse} />
    <Route path="/createlesson" component={CreateLesson} />
    <Route path="/lesson" component={Lesson} />
    <Route path="/lessons" component={LessonList} />
  </Route>

);
