import React, { useEffect, useState } from "react";
import GamingApi from "./useApi/GamingApi";
import CovidCasesUs from "./useApi/CovidCasesUs";
import Anime from "./useApi/Anime";
import Music from "./useApi/Music";


function ApiPage() {
  const [showCovid, setShowCovid] = useState(false);
  const [showGames, setShowGames] = useState(false);
  const [showAnime, setShowAnime] = useState(false);
  const [showmusic, setShowMusic] = useState(false);

  const Covidhandler = () => {
    setShowCovid((prev) => !prev);
    setShowGames(false);
    setShowAnime(false);
    setShowMusic(false);
  };

  const Gamehanlder = () => {
    setShowGames((prev) => !prev);
    setShowCovid(false);
    setShowAnime(false);
    setShowMusic(false);
  };

  const Animehandler = () => {
    setShowAnime((prev) => !prev);
    setShowGames(false);
    setShowCovid(false);
    setShowMusic(false);
  };

  const musichanlder = () => {
    setShowMusic((prev) => !prev);
    setShowGames(false);
    setShowCovid(false);
    setShowAnime(false);
  };

  return (
    <div className={`flex flex-wrap text-center justify-start items-center bg-gradient-to-r from-sky-400 to-blue-600  min-h-screen overflow-hidden`}>
      <div className="flex flex-wrap justify-evenly w-screen gap-5 pt-4">
        <div
          onClick={Covidhandler}
          className="p-2 text-white font-semibold border rounded-md my-2 block sm:hover:bg-cyan-400"
        >
          <button className="px-2">Covid Cases USA API</button>
        </div>
        <div
          onClick={Gamehanlder}
          className="p-2 text-white font-semibold border rounded-md my-2 sm:hover:bg-blue-400"
        >
          <button className="px-2">Games Api</button>
        </div>
        <div
          onClick={Animehandler}
          className="p-2 text-white font-semibold border rounded-md my-2 sm:hover:bg-sky-500"
        >
          <button className="px-2">Anime Character</button>
        </div>
        <div
          onClick={musichanlder}
          className="p-2 text-white font-semibold border rounded-md my-2 sm:hover:bg-sky-500"
        >
          <button className="px-2">Musics list</button>
        </div>
        {showCovid && <CovidCasesUs />}
        {showGames && <GamingApi />}
        {showAnime && <Anime />}
        {showmusic && <Music />}
      </div>
    </div>
  );
}

export default ApiPage;
