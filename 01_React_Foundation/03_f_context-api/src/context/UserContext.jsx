import React, { createContext } from "react";

export const DataContext = createContext();
const UserContext = ({ children }) => {
  const userData = {
    name: "Osama",
    age: 27,
    city: "Karachi",
  };
  return (
    <div>
      {/* {children} */}
      <DataContext.Provider value={userData}>{children}</DataContext.Provider>
    </div>
  );
};

export default UserContext;
