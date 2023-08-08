import React, { useState } from 'react';
import './App.css';
import Data from './Data'; // Replace with your data source
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Menu() {
  const [category, setCategory] = useState('all');

  const categoryClick = (category) => {
    setCategory(category);
  };

  const filterData = category === 'all' ? Data : Data.filter((item) => item.category === category);

  return (
    <div className="container mt-5 ">
      <h1 className='text-center'>Restaurant Menu</h1>
      <br></br>
      <div className="text-center mb-4">
        <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('breakfast')}>Breakfast</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('lunch')}>Lunch</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('dinner')}>Dinner</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('started')}>Started</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('salad')}>Salad</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('dessert')}>Dessert</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => categoryClick('all')}>All</button>
      </div>
      <div className="row">
        {filterData.map((item) => (
          <div className="col-md-4 mb-4" key={item.name}>
            <div className="card">
              <img src={item.img} className="card-img-top object-fit-cover shadow-sm p-3 mb-5 bg-white rounded" height={250} alt={item.name} />
              <div className="card-body ">
                <h5 className="card-title text-success">{item.name}</h5>
                <p className="card-text text-primary">{item.description}</p>
                <p className="card-text text-danger">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
