import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="bg-teal-700 text-white font-semibold text-2xl px-3 py-4 rounded active:scale-90"
      >
        Get Data
      </button>
      <div className="p-5 bg-gray-900 mt-5">
        {data.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-gray-50 text-black flex items-center justify-between w-full px-6 py-7 rounded mb-3"
            >
              <img
                src={elem.download_url}
                className="w-32 h-32 rounded object-cover"
              />
              <h2 className="text-black">{elem.author}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
