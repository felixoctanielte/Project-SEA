import React, { useState } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { name: 'Alice', message: 'Loved the meals!', rating: 5 },
    { name: 'Bob', message: 'Great service.', rating: 4 }
  ]);

  const [formData, setFormData] = useState({ name: '', message: '', rating: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, formData]);
    setFormData({ name: '', message: '', rating: '' });
  };

  return (
    <div className="testimonials">
      <h1>Customer Testimonials</h1>
      <div className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p><strong>{t.name}</strong> ({t.rating}/5)</p>
            <p>{t.message}</p>
          </div>
        ))}
      </div>

      <h2>Submit Your Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={formData.name} required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <textarea placeholder="Your Review" value={formData.message} required
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        <input type="number" placeholder="Rating (1-5)" value={formData.rating} required
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })} min="1" max="5" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Testimonials;
