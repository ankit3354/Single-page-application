import React from "react";
import LocomotiveScroll from "locomotive-scroll";

function Arrorr() {
  const locomotiveScroll = new LocomotiveScroll();
  const songs = [
    {
      _id: "660930da366c0bcfb213f977",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "découvert via le club d'écoute musicale de la bibliothèque de montreuil",
      name: "Bon Voyage Organisation - Yuseef (Trouver le soleil dans chaque jour de pluie) (Official Audio)",
      eId: "/yt/jLHXXXheZiQ",
      ctx: "bk",
      pl: {
        id: 64,
        name: "🌍 Voyage",
      },
      img: "https://i.ytimg.com/vi/jLHXXXheZiQ/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=jLHXXXheZiQ",
        name: "Bon Voyage Organisation - Yuseef (Trouver le soleil dans chaque jour de pluie) (Official Audio) - YouTube",
      },
      nbP: 2,
      lov: [],
    },
    {
      _id: "66092e8f366c0bcfb213f976",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Manon Meurt - Timeless",
      eId: "/yt/fFQWdVdvYew",
      ctx: "bk",
      img: "https://i.ytimg.com/vi/fFQWdVdvYew/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=fFQWdVdvYew",
        name: "Timeless - YouTube",
      },
      nbP: 2,
      lov: ["544c39c3e04b7b4fca803438"],
      nbR: 1,
    },
    {
      _id: "6609143d366c0bcfb213f974",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "from the racing video game Asphalt 9",
      name: "Ruelle - Madness",
      eId: "/yt/9h5jq3Ma3JI",
      ctx: "bk",
      pl: {
        id: 45,
        name: "🌚 Still awake at night",
      },
      img: "https://i.ytimg.com/vi/9h5jq3Ma3JI/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=9h5jq3Ma3JI&list=PL6v0YAHfvjfkxbfnKoGE95aK9ZUiac60V&index=3",
        name: "[Asphalt 9: Legends Soundtrack] Ruelle - Madness - YouTube",
      },
      nbP: 2,
      lov: ["544c39c3e04b7b4fca803438"],
      nbR: 1,
    },
    {
      _id: "6603ded1366c0bcfb213f7eb",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Engine Down - Retread",
      eId: "/yt/2aTRAvGkqGg",
      ctx: "bk",
      pl: {
        id: 23,
        name: "🥺 Paranormal intensity",
      },
      img: "https://i.ytimg.com/vi/2aTRAvGkqGg/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=2aTRAvGkqGg",
        name: "Engine Down - Retread - YouTube",
      },
      nbP: 2,
      lov: ["544c39c3e04b7b4fca803438"],
      nbR: 1,
    },
    {
      _id: "65fc0b16870dcc3307ae426e",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: 'case/lang/veirs - "Atomic Number"',
      eId: "/yt/x-81jnVsCQw",
      ctx: "bk",
      pl: {
        id: 8,
        name: "🧶 Chill out",
      },
      img: "https://i.ytimg.com/vi/x-81jnVsCQw/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=x-81jnVsCQw",
        name: "case/lang/veirs - &quot;Atomic Number&quot; - YouTube",
      },
      nbP: 3,
      nbR: 2,
      lov: [],
    },
    {
      _id: "65f9c63c870dcc3307ae418f",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "Merci Étienne Guéreau de Piano Jazz Concept pour la découverte",
      name: "The Very Big Experimental Toubifri Orchestra - GRANDE MAIN",
      eId: "/yt/V4pHCT0c4qw",
      ctx: "bk",
      pl: {
        id: 61,
        name: "🎺 Jazz meets World",
      },
      img: "https://i.ytimg.com/vi/V4pHCT0c4qw/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=V4pHCT0c4qw",
        name: "The Very Big Experimental Toubifri Orchestra - GRANDE MAIN - YouTube",
      },
      nbP: 2,
      lov: ["544c39c3e04b7b4fca803438"],
    },
    {
      _id: "65f8546a870dcc3307ae411c",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Jon Voyager - 360",
      eId: "/yt/_LdpNreJj6M",
      pl: {
        id: 31,
        name: "🌄 Today's the day",
      },
      img: "https://i.ytimg.com/vi/_LdpNreJj6M/default.jpg",
      repost: {
        pId: "65f83b1d870dcc3307ae4101",
        uId: "544c39c3e04b7b4fca803438",
        uNm: "Stefanos Mavrogenis",
      },
      lov: [],
      nbR: 0,
      nbP: 0,
    },
    {
      _id: "65f328bc870dcc3307ae3f9e",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "thank you aneta!",
      name: "  K.O.Brass - Markoesa Lobi",
      eId: "/yt/wfr1D7_-5eM",
      ctx: "bk",
      pl: {
        id: 11,
        name: "🕶 soul / funk / jazz / etc...",
      },
      img: "https://i.ytimg.com/vi/wfr1D7_-5eM/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=wfr1D7_-5eM",
        name: "Markoesa Lobi - YouTube",
      },
      nbP: 2,
      nbR: 1,
      lov: [],
    },
    {
      _id: "65ec2767f2427910a90e8d9a",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "discovered on KEXP",
      name: "Nova One - You were right",
      eId: "/yt/L7qKu_SPV4o",
      ctx: "bk",
      img: "https://i.ytimg.com/vi/L7qKu_SPV4o/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=L7qKu_SPV4o",
        name: "you were right - YouTube",
      },
      lov: ["518b5a447e91c862b2adea1a", "544c39c3e04b7b4fca803438"],
      nbP: 9,
      nbR: 1,
    },
    {
      _id: "65e988e2f2427910a90e8c93",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Teenage Wrist - Mary",
      eId: "/yt/XZPI3lNrQac",
      ctx: "bk",
      img: "https://i.ytimg.com/vi/XZPI3lNrQac/default.jpg",
      src: {
        id: "https://music.youtube.com/watch?v=XZPI3lNrQac",
        name: "YouTube Music",
      },
      nbP: 9,
      nbR: 1,
      lov: [],
    },
    {
      _id: "65e426fff2427910a90e8ac2",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Royel Otis cover Sophie Ellis-Bextor's 'Murder on the Dancefloor' for Like A Version",
      eId: "/yt/sQyL3mUVDWA",
      ctx: "bk",
      pl: {
        id: 65,
        name: "pop rock I'd love to cover",
      },
      img: "https://i.ytimg.com/vi/sQyL3mUVDWA/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=sQyL3mUVDWA&list=PLmzn1C-VN6G6IsNOshdNvpOANVWtaCEBq&index=13",
        name: "Royel Otis cover Sophie Ellis-Bextor&#39;s &#39;Murder on the Dancefloor&#39; for Like A Version - YouTube",
      },
      nbP: 4,
      lov: ["544c39c3e04b7b4fca803438"],
    },
    {
      _id: "65dc8e7cf2427910a90e8909",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Championne - Rien (Live on KEXP)",
      eId: "/yt/3WAO0ACcbNE",
      ctx: "bk",
      pl: {
        id: 45,
        name: "🌚 Still awake at night",
      },
      img: "https://i.ytimg.com/vi/3WAO0ACcbNE/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=3WAO0ACcbNE",
        name: "Championne - Rien (Live on KEXP) - YouTube",
      },
      nbP: 6,
      lov: [],
    },
    {
      _id: "65dc8c2ef2427910a90e8908",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "discovered on KEXP radio",
      name: "Championne - Petite Mort",
      eId: "/yt/NKlx9nZRAEs",
      ctx: "bk",
      pl: {
        id: 45,
        name: "🌚 Still awake at night",
      },
      img: "https://i.ytimg.com/vi/NKlx9nZRAEs/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=NKlx9nZRAEs",
        name: "Petite Mort - YouTube",
      },
      nbP: 5,
      lov: [],
    },
    {
      _id: "65ca4685f2427910a90e8261",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "suggested by tidal after listening to oceansize",
      name: "Opeth - The Drapery Falls (Audio)",
      eId: "/yt/YeTNkPXRrVY",
      ctx: "bk",
      pl: {
        id: 12,
        name: "☁️  Post-rock / progressive",
      },
      img: "https://i.ytimg.com/vi/YeTNkPXRrVY/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=YeTNkPXRrVY",
        name: "Opeth - The Drapery Falls (Audio) - YouTube",
      },
      nbP: 7,
      lov: ["544c39c3e04b7b4fca803438"],
      nbR: 1,
    },
    {
      _id: "65ca340ef2427910a90e8251",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Oceansize - Unfamiliar",
      eId: "/yt/dFkyrRqzkIQ",
      ctx: "bk",
      pl: {
        id: 12,
        name: "☁️  Post-rock / progressive",
      },
      img: "https://i.ytimg.com/vi/dFkyrRqzkIQ/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=dFkyrRqzkIQ",
        name: "Oceansize - Unfamiliar - YouTube",
      },
      lov: ["518b5a447e91c862b2adea1a"],
      nbP: 7,
      nbR: 1,
    },
    {
      _id: "65ca3340f2427910a90e824f",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Oceansize - New Pin HD",
      eId: "/yt/1sc9tN_DVX0",
      ctx: "bk",
      pl: {
        id: 12,
        name: "☁️  Post-rock / progressive",
      },
      img: "https://i.ytimg.com/vi/1sc9tN_DVX0/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=1sc9tN_DVX0",
        name: "Oceansize - New Pin HD - YouTube",
      },
      nbP: 7,
      lov: ["53f4ee46e04b7b4fca7dcea3"],
    },
    {
      _id: "65ca101cf2427910a90e8224",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Snarky Puppy - Shofukan (We Like It Here)",
      eId: "/yt/kk0WRHV_vt8",
      ctx: "bk",
      pl: {
        id: 11,
        name: "🕶 soul / funk / jazz / etc...",
      },
      img: "https://i.ytimg.com/vi/kk0WRHV_vt8/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=kk0WRHV_vt8",
        name: "Snarky Puppy - Shofukan (We Like It Here) - YouTube",
      },
      nbP: 5,
      lov: [],
    },
    {
      _id: "65c3476df2427910a90e7f37",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Paramore - Burning Down the House (Behind The Scenes)",
      eId: "/yt/A73voVPhMfY",
      ctx: "bk",
      pl: {
        id: 33,
        name: "🎉 Celebration!",
      },
      img: "https://i.ytimg.com/vi/A73voVPhMfY/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=A73voVPhMfY",
        name: "Paramore - Burning Down the House (Behind The Scenes) - YouTube",
      },
      nbP: 6,
      lov: ["53f4ee46e04b7b4fca7dcea3"],
    },
    {
      _id: "65bb9c0c56badb88594d2b92",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Incubus - Sick Sad Little World (from Look Alive)",
      eId: "/yt/t-E1SaDrHJQ",
      ctx: "bk",
      pl: {
        id: 39,
        name: "🎟  aLIVE",
      },
      img: "https://i.ytimg.com/vi/t-E1SaDrHJQ/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=t-E1SaDrHJQ",
        name: "Incubus - Sick Sad Little World (from Look Alive) - YouTube",
      },
      nbP: 6,
      lov: [],
    },
    {
      _id: "65b8fd6ce028f49d96fc0a5c",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: 'from "turn a gundam" OST, compose by Yoko Kanno, japanese composer of Cowboy Bebop',
      name: "Yoko Kanno - Moon",
      eId: "/yt/rITbGRY4zRs",
      ctx: "bk",
      pl: {
        id: 53,
        name: "👨‍💻 epic coding session soundtrack",
      },
      img: "https://i.ytimg.com/vi/rITbGRY4zRs/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=rITbGRY4zRs",
        name: "Moon - YouTube",
      },
      nbP: 8,
      lov: ["53f4ee46e04b7b4fca7dcea3"],
    },
    {
      _id: "65b7b72be028f49d96fc0a09",
      uId: "4d94501d1f78ac091dbc9b4d",
      uNm: "Adrien Joly",
      text: "",
      name: "Teenage Wrist - Afterglow (official audio)",
      eId: "/yt/_NEDVXPIdms",
      ctx: "bk",
      pl: {
        id: 34,
        name: "👟 Indie rock / Shoegaze",
      },
      img: "https://i.ytimg.com/vi/_NEDVXPIdms/default.jpg",
      src: {
        id: "https://www.youtube.com/watch?v=_NEDVXPIdms",
        name: "Teenage Wrist - Afterglow (official audio) - YouTube",
      },
      nbP: 7,
      nbR: 1,
      lov: ["544c39c3e04b7b4fca803438"],
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center text-center">
      <div>
        <h1 className="text-2xl text-white text-center  mt-4 p-2 mb-2 font-semibold">
          Pop Music List
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly items-center border gap-5">
        {songs.map((song) => (
          <li
            key={song["_id"]}
            className="flex flex-wrap border justify-center items-center w-80 h-90 p-4 pb-6 rounded-lg"
          >
            <div className="w-full justify-center items-center">
              <img src={song.img} alt="" className="w-72" />
            </div>
            <p className="px-2 font-mono text-xl py-2 font-semibold text-white">
              <strong className="">Song</strong> : {song.name}
            </p>
            <p className="px-2 py-2 text-xl font-bold font-mono text-cyan-300">{song.uNm}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Arrorr;
