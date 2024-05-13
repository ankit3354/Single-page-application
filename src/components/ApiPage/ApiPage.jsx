import React, { useEffect, useState } from "react";
import GamingApi from "./useApi/GamingApi";
import CovidCasesUs from "./useApi/CovidCasesUs";
import Anime from "./useApi/Anime";
import Music from "./useApi/Music";
import LocomotiveScroll from "locomotive-scroll";

function ApiPage() {
  const [selectOption, setSelectOption] = useState("Covid Case of USA");

  const locomotiveScroll = new LocomotiveScroll();

  const hanldeOption = (e) => {
    setSelectOption(e.target.value);
  };
  return (
    <div
      className={`flex flex-wrap text-center justify-center items-center bg-yellow-950 overflow-hidden bg-black/50`}
    >
      <div className="flex flex-col flex-wrap justify-center items-center gap-5 pt-4 bg-black/50">
        <select
          className=" text-white bg-cyan-800 p-2 font-semibold border rounded-md my-2 sm:hover:bg-cyan-700 h-fit text-center sm:w-80"
          value={selectOption}
          onChange={(e) => hanldeOption(e)}
        >
          <option value="Covid Case of USA">Covid Case of USA</option>
          <option value="Games">Games</option>
          <option value="Anime Character">Anime Character</option>
          <option value="Musics list">Musics list</option>
        </select>

        {selectOption === "Covid Case of USA" && <CovidCasesUs />}
        {selectOption === "Games" && <GamingApi />}
        {selectOption === "Anime Character" && <Anime />}
        {selectOption === "Musics list" && <Music />}
      </div>
    </div>
  );
}

export default ApiPage;
