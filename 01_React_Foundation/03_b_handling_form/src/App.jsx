import React, { useState } from "react";

const App = () => {
  const [userName, setuserName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted", userName);
    setuserName("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        {/* <input type="text" placeholder="Enter Name" value="Osama" /> */}
        <input
          type="text"
          placeholder="Enter Name"
          value={userName}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
