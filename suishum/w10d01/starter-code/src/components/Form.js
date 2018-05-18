import React from 'react';

const Form = ({ newMessage, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a message..."
        onChange={handleChange}
        value={newMessage}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
