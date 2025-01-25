import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: {
      technology: false,
      science: false,
      arts: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: { ...prev.interests, [id]: checked },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Name:</h3>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h3>Email:</h3>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <h3>Areas of Interest:</h3>
          <label>
            <input
              type="checkbox"
              id="technology"
              checked={formData.interests.technology}
              onChange={handleCheckboxChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              id="science"
              checked={formData.interests.science}
              onChange={handleCheckboxChange}
            />
            Science
          </label>
          <label>
            <input
              type="checkbox"
              id="arts"
              checked={formData.interests.arts}
              onChange={handleCheckboxChange}
            />
            Arts
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for submitting!</p>}
    </main>
  );
}

export default App;
