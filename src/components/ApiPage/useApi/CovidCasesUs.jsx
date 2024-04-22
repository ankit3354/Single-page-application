import React, { useEffect, useState } from "react";
import axios from "axios";

function CovidCasesUs() {
  const [Covid, setVirus] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/states")
      .then((res) => setVirus(res.data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(Covid);
  return (
    <>
      <h1 className="text-2xl text-center w-full mt-4 p-2 mb-2 font-semibold">
        Covid Cases in US States
      </h1>
      {Covid.map((cases) => (
        <div
          key={cases.state}
          className="bg-yellow-900 rounded-lg text-white grid grid-rows-5 my-2 mx-2 p-4 border w-80 h-96 "
        >
          <h1 className="p-2 border font-serif flex justify-center items-center">State : {cases.state}</h1>
          <p className="py-1 border px-1 flex justify-center items-center">Cases Updated: {cases.updated}</p>
          <p className=" border flex justify-center items-center">Deaths : {cases.deaths}</p>
          <p className="py-1 border flex justify-center items-center">Actice cases : {cases.active}</p>
          <p className="py-1 border flex justify-center items-center">Population : {cases.population}</p>
        </div>
      ))}
    </>
  );
}

export default CovidCasesUs;
