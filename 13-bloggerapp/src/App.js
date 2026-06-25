import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const books = [
    { id: 101, bname: 'Master React', price: 670 },
    { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 103, bname: 'Mongo Essentials', price: 450 }
  ];

  const blogs = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz',
      description: 'Welcome to learning React!'
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schwazdenier',
      description: 'You can install React from npm.'
    }
  ];

  const courses = [
    { id: 1, cname: 'Angular', date: '4/5/2021' },
    { id: 2, cname: 'React', date: '6/3/2021' }
  ];

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div className="container">
      {showCourses && (
        <div className="section">
          <CourseDetails courses={courses} />
        </div>
      )}

      {showBooks ? (
        <div className="section">
          <BookDetails books={books} />
        </div>
      ) : null}

      {showBlogs && (
        <div className="section">
          <BlogDetails blogs={blogs} />
        </div>
      )}
    </div>
  );
}

export default App;