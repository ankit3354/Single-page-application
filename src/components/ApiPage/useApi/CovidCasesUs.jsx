import React, { useEffect, useState } from "react";
import axios from "axios";

function CovidCasesUs() {
  const [loading, setLoading] = useState(true);
  const [Covid, setVirus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true when fetching starts
        setLoading(true);
        axios
          .get("https://disease.sh/v3/covid-19/states")
          .then((res) => setVirus(res.data))
          .catch((err) => console.log(err));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if needed
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-hiden">
        <h1 className="text-2xl text-center w-full mt-4 p-2 mb-2 font-semibold">
          Covid Cases in US States
        </h1>

        <div className="overflow-hiden">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-wrap justify-center w-full overflow-hidden ">
              {Covid.map((cases) => (
                <div
                  key={cases.state}
                  className="bg-yellow-900 rounded-lg text-white my-2 mx-2 p-4 border w-full sm:min-[320px]:w-80  h-96 overflow-hidden flex flex-wrap justify-center "
                >
                  <h1 className="p-2 font-serif text-2xl flex flex-wrap justify-center items-center">
                    State : {cases.state}
                  </h1>
                  <div className="border flex flex-col justify-center items-center gap-5 p-4 rounded-md">
                    <p className="text-[1rem]">
                      Cases Updated: {cases.updated}
                    </p>
                    <p className="text-[1rem]">Deaths : {cases.deaths}</p>
                    <p className="text-[1rem]">Actice cases : {cases.active}</p>
                    <p className="text-[1rem]">
                      Population : {cases.population}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CovidCasesUs;
