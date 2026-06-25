function CourseDetails({ courses }) {
  const coursedet = (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.cname}</h1>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1>Course Details</h1>
      {coursedet}
    </div>
  );
}

export default CourseDetails;