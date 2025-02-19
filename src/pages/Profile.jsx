import React from "react";

import { useState } from "react";

function Profile() {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, { value: "" }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.value}
            onChange={(event) => handleChange(index, event)}
          />
          <button type="button" onClick={() => removeField(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addField}>Add Field</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Profile;
