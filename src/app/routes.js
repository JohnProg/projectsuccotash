import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeIndex from './components/IndexHome';
import App from './components/app';
import Course from './components/course';
import CourseList from './components/courselist';
import CreateCourse from './components/createcourse';
import CreateLesson from './components/createlesson';
import Lesson from './components/lesson';
import LessonList from './components/lessonlist';

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
