import React, { useState } from 'react';
import sampleImage from '../assets/sample-meal.png';

const plans = [
  { id: 1, name: 'Basic Plan', price: 'Rp 200,000', desc: 'Simple meals for everyday life.', details: 'Includes 10 meals', image: sampleImage },
  { id: 2, name: 'Premium Plan', price: 'Rp 500,000', desc: 'Healthy and premium meals.', details: 'Includes 25 meals + free delivery', image: sampleImage },
];

const Menu = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="menu">
      <h1>Meal Plans</h1>
      {plans.map(plan => (
        <div key={plan.id} className="meal-card">
          <h2>{plan.name}</h2>
          <img src={plan.image} alt={plan.name} width="200" />
          <p>Price: {plan.price}</p>
          <p>{plan.desc}</p>
          <button onClick={() => setSelectedPlan(plan)}>See More Details</button>
        </div>
      ))}

      {selectedPlan && (
        <div className="modal">
          <h2>{selectedPlan.name}</h2>
          <p>{selectedPlan.details}</p>
          <button onClick={() => setSelectedPlan(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
