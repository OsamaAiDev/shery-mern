// const App = () => {
//   let name = "Osama";
//   const changeName = () => {
//     // hama direct dom sa interact nai krna ha react ko bola ha wo kre ga.
//     // asa work nai kre ga react ko bolna para ga us lia useState hook use kre ga
//     // console.log(name);
//     // name = "Bilal";
//     // console.log(name);
//   };
//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//       <h2>Hello From React</h2>
//       <button onClick={changeName}>Change Name</button>
//     </div>
//   );
// };

import { useState } from "react";

// Use state example

// const App = () => {
//   const [a, setA] = useState(10);
//   const ChangeA = () => {
//     setA(20);
//   };
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={ChangeA}>Change Value</button>
//     </div>
//   );
// };

const App = () => {
  const [no, setNo] = useState(0);
  return (
    <div>
      <h3 className="text-xl">No is {no} </h3>
      <button
        onClick={function () {
          setNo(no + 1);
        }}
      >
        Increment
      </button>
      <button onClick={() => setNo(no - 1)}>Decrement</button>
    </div>
  );
};

export default App;
