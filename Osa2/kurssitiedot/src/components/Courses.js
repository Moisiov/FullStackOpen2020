import React from 'react';
import Course from './Course';

const Courses = ({ courses }) => (
    <div>
        {courses.map((item, index) => (
            <Course key={index} course={item} />
        ))}
    </div>
);

export default Courses;