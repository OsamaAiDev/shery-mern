// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Card from "./components/Card";

// // const App = () => {
// //   // const user = "Osama";
// //   const users = [
// //     {
// //       name: "Alice Johnson",
// //       city: "New York",
// //       age: 28,
// //       profession: "Graphic Designer",
// //       profilePhoto: "https://example.com/profiles/alice.jpg",
// //     },
// //     {
// //       name: "Michael Smith",
// //       city: "Los Angeles",
// //       age: 34,
// //       profession: "Software Engineer",
// //       profilePhoto: "https://example.com/profiles/michael.jpg",
// //     },
// //     {
// //       name: "Jessica Lee",
// //       city: "Chicago",
// //       age: 25,
// //       profession: "Marketing Specialist",
// //       profilePhoto: "https://example.com/profiles/jessica.jpg",
// //     },
// //     {
// //       name: "David Brown",
// //       city: "Houston",
// //       age: 42,
// //       profession: "Project Manager",
// //       profilePhoto: "https://example.com/profiles/david.jpg",
// //     },
// //     {
// //       name: "Emily Davis",
// //       city: "Miami",
// //       age: 30,
// //       profession: "Data Analyst",
// //       profilePhoto: "https://example.com/profiles/emily.jpg",
// //     },
// //   ];

// //   return (
// //     <>
// //       {/* <Header />
// //       <Footer /> */}
// //       {/* <Card user={user} />
// //       <Card user="Bilal" /> */}
// //       <div className="p-10">
// //         {/* <Card user="Osama" age="26" city="Karachi" /> */}
// //         {users.map((user, index) => {
// //           return (
// //             <Card
// //               key={index}
// //               user={user.name}
// //               age={user.age}
// //               city={user.city}
// //               photo={user.profilePhoto}
// //               profession={user.profession}
// //             />
// //           );
// //         })}
// //       </div>
// //     </>
// //   );
// // };

// export default App;

import React from "react";
import Ex from "./components/Ex";

const App = () => {
  return (
    <div>
      <Ex name="Osama" />
    </div>
  );
};

export default App;
