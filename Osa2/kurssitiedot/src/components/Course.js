import React from 'react';

const Header = ({ course }) => {
  return (
    <h3>{course.name}</h3>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((a, b) => a + b.exercises, 0);
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = ({ course }) => (
  <div>
    {course.parts.map((item, index) => (
      <Part key={index} part={item} />
    ))}
  </div>
)

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)

export default Course;