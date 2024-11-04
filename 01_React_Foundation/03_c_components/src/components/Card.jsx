// import React from "react";

// const Card = (props) => {
//   console.log(props);

//   return (
//     <div>
//       <h1 className="text-3xl">Username is {props.user}</h1>
//     </div>
//   );
// };

// export default Card;

import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white text-black inline-block p-6 text-center rounded mr-7">
      <img src={props.photo} alt="Profile Photo" />
      <h1 className="text-2xl font-semibold mb-4"> {props.user}</h1>
      <h2>
        {props.city}, {props.age}
      </h2>
      <h3 className="text-blue-300">{props.profession}</h3>
      <button className="bg-emerald-700 mt-4 text-white px-4 py-4 rounded font-medium">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
