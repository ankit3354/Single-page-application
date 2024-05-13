import React, { useEffect, useState } from "react";
import axios from "axios";
import LocomotiveScroll from "locomotive-scroll";

function CovidCasesUs() {
  const locomotiveScroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(false);
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
      <div className="container flex flex-wrap justify-center items-center text-center ">
        <div>
          <h1 className="text-2xl text-white text-center w-full mt-4 p-2 mb-2 font-semibold">
            Covid Cases in US States
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center text-center overflow-hiden">
          {loading ? (
            <p className="text-4xl">Loading...</p>
          ) : (
            <div className="flex flex-wrap justify-center w-full overflow-hidden ">
              {Covid.map((cases) => (
                <div
                  key={cases.state}
                  className="rounded-lg text-white my-2 mx-2 p-4 border w-full sm:min-[320px]:w-80  h-96 overflow-hidden flex flex-wrap justify-center "
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
