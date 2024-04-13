"use client";
import React, { useEffect, useState } from "react";

const CounterApp = () => {
  const [count, setcount] = useState(0);

  return (
    <div className="bg-pink-100 p-3 mx-[10%] lg:mx-[30%] px-18 mt-6 items-center rounded-xl border-8  border-green-700">
      <div className="  justify-center items-center mt-6">
        <h1 className="text-3xl lg:text-4xl font-serif font-medium  text-center underline p-4">
          Counter App
        </h1>{" "}
        <br /> <br />
        <div>
          <h1 className=" text-3xl font-semobold text-center">{count}</h1>
        </div>
      </div>
      <div className="flex gap-x-8 lg:gap-x-6 md:gap-x-4  justify-center flex-col lg:flex-row gap-y-4 items-center mt-16">
        <button
          onClick={() => setcount(count + 1)}
          className="bg-green-600 border-4 border-red-400 text-white px-4 py-2 rounded-xl text-xl"
        >
          Increment{" "}
        </button>
        <button
          onClick={() => setcount(count - 1)}
          disabled={count == 0}
          className="bg-red-500 text-white py-2 px-4 rounded-xl text-xl border-4 border-green-400"
        >
          {" "}
          Decrement
        </button>
        <button
          onClick={() => setcount(0)}
          disabled={count == 0}
          className="bg-gray-400 text-white border-4 border-red-500 py-2 px-4 rounded-xl text-xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
