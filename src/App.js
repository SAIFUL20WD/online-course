import React from 'react';
import './App.css';
import courses from './data/courseData';
import Course from './Components/Course/Course';
import { useState } from 'react';
import Navigation from './Components/Navigation/Navigation';

function App() {
  const [purchased, setPurchased] = useState([])

  const handlePurchase = (course) => {
    setPurchased([...purchased, course])
  }

  let totalPrice = 0;
  for (let i = 0; i < purchased.length; i++) {
    totalPrice += purchased[i].price;
  }

  return (
    <div className="App">
      <header className="container">
        <Navigation courseCount={purchased.length} totalPrice={totalPrice}></Navigation>
      </header>

      <main>
        <div className="container">
          <div className="row">
            {
              courses.map(course => <Course course={course} handlePurchase={handlePurchase} key={course.id}></Course>)
            }
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
