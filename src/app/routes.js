import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeIndex from './components/IndexHome';
import App from './components/App';
import Course from './components/Course';
import CourseList from './components/CourseList';
import CreateCourse from './components/CreateCourse';
import CreateLesson from './components/CreateLesson';
import Lesson from './components/Lesson';
import LessonList from './components/LessonList';

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
