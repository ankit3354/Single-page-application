import React from "react";
import LocomotiveScroll from "locomotive-scroll";

function GamingApi() {
  const locomotiveScroll = new LocomotiveScroll();
  const games = [
    {
      internalName: "PRINCEOFPERSIATHESANDSOFTIME",
      title: "Prince of Persia: The Sands of Time",
      metacriticLink:
        "https://store.steampowered.com/app/13600/Prince_of_Persia_The_Sands_of_Time/",
      dealID: "ZblEZO%2Fy4fXzX2MPHRLN%2FMTI1Q1hXXXPFMvMrud8%2B6Y%3D",
      storeID: "1",
      gameID: "278",
      salePrice: "1.99",
      normalPrice: "9.99",
      isOnSale: "1",
      savings: "80.080080",
      metacriticScore: "89",
      steamRatingText: "Very Positive",
      steamRatingPercent: "85",
      steamRatingCount: "3511",
      steamAppID: "13600",
      releaseDate: 1070323200,
      lastChange: 1711826798,
      dealRating: "9.4",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/13600/capsule_sm_120.jpg?t=1447351278",
    },
    {
      internalName: "THEWITCHER2ASSASSINSOFKINGSENHANCEDEDITION",
      title: "The Witcher 2: Assassins of Kings Enhanced Edition",
      metacriticLink:
        "https://gg.deals/us/game/the-witcher-2-assassins-of-kings-enhanced-edition/",
      dealID: "8JWQ51DVapSJnGVviMI0Hgu4YFqxme2sBdLD3vh6dZw%3D",
      storeID: "1",
      gameID: "5572",
      salePrice: "2.99",
      normalPrice: "19.99",
      isOnSale: "1",
      savings: "85.042521",
      metacriticScore: "88",
      steamRatingText: "Very Positive",
      steamRatingPercent: "90",
      steamRatingCount: "61233",
      steamAppID: "20920",
      releaseDate: 1305590400,
      lastChange: 1711650848,
      dealRating: "9.3",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/20920/capsule_sm_120.jpg?t=1700481810",
    },
    {
      internalName: "THEWITCHERENHANCEDEDITIONDIRECTORSCUT",
      title: "The Witcher: Enhanced Edition Director's Cut",
      metacriticLink:
        "https://store.steampowered.com/app/20900/The_Witcher_Enhanced_Edition_Directors_Cut/",
      dealID: "XvdAVEU9b7gYQqsNjJB6TCQtxN8qpubzIpJWMLvEVsQ%3D",
      storeID: "1",
      gameID: "188",
      salePrice: "1.49",
      normalPrice: "9.99",
      isOnSale: "1",
      savings: "85.085085",
      metacriticScore: "86",
      steamRatingText: "Very Positive",
      steamRatingPercent: "89",
      steamRatingCount: "58640",
      steamAppID: "20900",
      releaseDate: 1221523200,
      lastChange: 1711650897,
      dealRating: "9.2",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/20900/capsule_sm_120.jpg?t=1700481839",
    },
    {
      internalName: "JOEDEVERSLONEWOLFHDREMASTERED",
      title: "Joe Dever's Lone Wolf HD Remastered",
      metacriticLink:
        "https://store.steampowered.com/app/279440/Joe_Devers_Lone_Wolf_HD_Remastered/",
      dealID: "B%2BP8xo9yxMT0PpDOf0gW0ZFl5%2F5V8yd9ViW0kloPGQ8%3D",
      storeID: "1",
      gameID: "140206",
      salePrice: "1.49",
      normalPrice: "14.99",
      isOnSale: "1",
      savings: "90.060040",
      metacriticScore: "78",
      steamRatingText: "Mostly Positive",
      steamRatingPercent: "74",
      steamRatingCount: "529",
      steamAppID: "279440",
      releaseDate: 1417046400,
      lastChange: 1711653550,
      dealRating: "9.0",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/279440/capsule_sm_120.jpg?t=1486406889",
    },
    {
      internalName: "PRINCEOFPERSIATHETWOTHRONES",
      title: "Prince of Persia: The Two Thrones",
      metacriticLink:
        "https://store.steampowered.com/app/13530/Prince_of_Persia_The_Two_Thrones/",
      dealID: "2QqCv7qHzVAScckz0X4sOVeB%2F08naBroZIJzMKXzPIw%3D",
      storeID: "1",
      gameID: "347",
      salePrice: "1.99",
      normalPrice: "9.99",
      isOnSale: "1",
      savings: "80.080080",
      metacriticScore: "85",
      steamRatingText: "Mostly Positive",
      steamRatingPercent: "78",
      steamRatingCount: "1781",
      steamAppID: "13530",
      releaseDate: 1133395200,
      lastChange: 1711826830,
      dealRating: "9.0",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/13530/capsule_sm_120.jpg?t=1447351264",
    },
    {
      internalName: "THEBUNKER",
      title: "The Bunker",
      metacriticLink: "https://store.steampowered.com/app/481110/The_Bunker/",
      dealID: "Cr3QFxEuGpfAhbgacB4fUCJHGsabY%2Boq13uVfAA%2BAHY%3D",
      storeID: "1",
      gameID: "154122",
      salePrice: "2.99",
      normalPrice: "14.99",
      isOnSale: "1",
      savings: "80.053369",
      metacriticScore: "0",
      steamRatingText: "Mixed",
      steamRatingPercent: "69",
      steamRatingCount: "1368",
      steamAppID: "481110",
      releaseDate: 1708992000,
      lastChange: 1711740464,
      dealRating: "8.9",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/481110/capsule_sm_120.jpg?t=1696844539",
    },
    {
      internalName: "EVILGENIUS2WORLDDOMINATION",
      title: "Evil Genius 2: World Domination",
      metacriticLink:
        "https://store.steampowered.com/app/700600/Evil_Genius_2_World_Domination/",
      dealID: "TFMsHY8yEXTTxChVjffLd7JqTV24nShS0ZsChthQZGg%3D",
      storeID: "1",
      gameID: "226366",
      salePrice: "1.99",
      normalPrice: "39.99",
      isOnSale: "1",
      savings: "95.023756",
      metacriticScore: "75",
      steamRatingText: "Mixed",
      steamRatingPercent: "67",
      steamRatingCount: "9540",
      steamAppID: "700600",
      releaseDate: 1617062400,
      lastChange: 1711480263,
      dealRating: "8.9",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/700600/capsule_sm_120.jpg?t=1644329179",
    },
    {
      internalName: "TOMCLANCYSTHEDIVISION",
      title: "Tom Clancys The Division",
      metacriticLink: "https://store.steampowered.com/agecheck/app/365590/",
      dealID: "LZXyEAGk%2B9IVGVQKblt%2B5AP85sg4kgnJdqR5fa4LJGU%3D",
      storeID: "1",
      gameID: "119363",
      salePrice: "4.49",
      normalPrice: "29.99",
      isOnSale: "1",
      savings: "85.028343",
      metacriticScore: "79",
      steamRatingText: "Mostly Positive",
      steamRatingPercent: "71",
      steamRatingCount: "70673",
      steamAppID: "365590",
      releaseDate: 1457308800,
      lastChange: 1711826690,
      dealRating: "8.9",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/365590/capsule_sm_120.jpg?t=1711101159",
    },
    {
      internalName: "THEREDSOLSTICE",
      title: "The Red Solstice",
      metacriticLink:
        "https://store.steampowered.com/app/265590/The_Red_Solstice/",
      dealID: "4Z7ZOAP0ixP%2FKY1fILv8hq4QMIOfChrqV%2Blr6l%2BDYQ0%3D",
      storeID: "1",
      gameID: "115484",
      salePrice: "0.99",
      normalPrice: "9.99",
      isOnSale: "1",
      savings: "90.090090",
      metacriticScore: "74",
      steamRatingText: "Mostly Positive",
      steamRatingPercent: "73",
      steamRatingCount: "835",
      steamAppID: "265590",
      releaseDate: 1404950400,
      lastChange: 1711653519,
      dealRating: "8.8",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/265590/capsule_sm_120.jpg?t=1706400270",
    },
    {
      internalName: "TUMBLESTONE",
      title: "Tumblestone",
      metacriticLink: "https://store.steampowered.com/app/269710/Tumblestone/",
      dealID: "dJNCeHkZV3iaXZQFBSpYh3B2tz6ZuMvBaFpI6d1QYiU%3D",
      storeID: "1",
      gameID: "154838",
      salePrice: "4.74",
      normalPrice: "24.99",
      isOnSale: "1",
      savings: "81.032413",
      metacriticScore: "91",
      steamRatingText: "Very Positive",
      steamRatingPercent: "87",
      steamRatingCount: "157",
      steamAppID: "269710",
      releaseDate: 1468281600,
      lastChange: 1711398472,
      dealRating: "8.8",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/269710/capsule_sm_120.jpg?t=1673726244",
    },
    {
      internalName: "THEWITCHER3WILDHUNT",
      title: "The Witcher 3: Wild Hunt",
      metacriticLink:
        "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
      dealID: "zm2ORJ1RIWrq7UFFCs9J4ps4rgsNUV7FTSnWxzxxj8Q%3D",
      storeID: "1",
      gameID: "112330",
      salePrice: "9.99",
      normalPrice: "39.99",
      isOnSale: "1",
      savings: "75.018755",
      metacriticScore: "93",
      steamRatingText: "Overwhelmingly Positive",
      steamRatingPercent: "96",
      steamRatingCount: "700694",
      steamAppID: "292030",
      releaseDate: 1431907200,
      lastChange: 1711650740,
      dealRating: "8.8",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/capsule_sm_120.jpg?t=1710411171",
    },
    {
      internalName: "PRINCEOFPERSIA",
      title: "Prince of Persia",
      metacriticLink:
        "https://store.steampowered.com/app/19980/Prince_of_Persia/",
      dealID: "5c%2FUiBic303AmXesDtRhz7DBzqUpSRxykKvQnMt2q%2Fw%3D",
      storeID: "1",
      gameID: "549",
      salePrice: "1.99",
      normalPrice: "9.99",
      isOnSale: "1",
      savings: "80.080080",
      metacriticScore: "82",
      steamRatingText: "Mostly Positive",
      steamRatingPercent: "78",
      steamRatingCount: "2815",
      steamAppID: "19980",
      releaseDate: 1228780800,
      lastChange: 1711826827,
      dealRating: "8.8",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/19980/capsule_sm_120.jpg?t=1451472861",
    },
    {
      internalName: "MONSTERSLAYERS",
      title: "Monster Slayers",
      metacriticLink:
        "https://store.steampowered.com/app/496620/Monster_Slayers/",
      dealID: "Uqg0XVBn2QpUPg0tFzp9DkM9Pl%2FvuqpbtHpPtElZJ%2BY%3D",
      storeID: "1",
      gameID: "167601",
      salePrice: "1.34",
      normalPrice: "8.99",
      isOnSale: "1",
      savings: "85.094549",
      metacriticScore: "86",
      steamRatingText: "Very Positive",
      steamRatingPercent: "80",
      steamRatingCount: "769",
      steamAppID: "496620",
      releaseDate: 1490227200,
      lastChange: 1711396587,
      dealRating: "8.8",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/496620/capsule_sm_120.jpg?t=1630517695",
    },
    {
      internalName: "HUNTDOWN",
      title: "Huntdown",
      metacriticLink: "https://store.steampowered.com/app/598550/HUNTDOWN/",
      dealID: "MAqygRPj1pJzGuDPyHMP4HUtdEfubslKSfKozC197jU%3D",
      storeID: "1",
      gameID: "215382",
      salePrice: "3.99",
      normalPrice: "19.99",
      isOnSale: "1",
      savings: "80.040020",
      metacriticScore: "85",
      steamRatingText: "Overwhelmingly Positive",
      steamRatingPercent: "95",
      steamRatingCount: "2852",
      steamAppID: "598550",
      releaseDate: 1589241600,
      lastChange: 1711650971,
      dealRating: "8.6",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/598550/capsule_sm_120.jpg?t=1694199558",
    },
    {
      internalName: "WARSTONETD",
      title: "Warstone TD",
      metacriticLink: "https://store.steampowered.com/app/562500/Warstone_TD/",
      dealID: "KQSTr1TaP9%2BhzDJErR7iyr6nLzzFryvPQIvmfUa1igg%3D",
      storeID: "1",
      gameID: "167978",
      salePrice: "2.24",
      normalPrice: "14.99",
      isOnSale: "1",
      savings: "85.056704",
      metacriticScore: "70",
      steamRatingText: "Very Positive",
      steamRatingPercent: "85",
      steamRatingCount: "2481",
      steamAppID: "562500",
      releaseDate: 1527033600,
      lastChange: 1711782388,
      dealRating: "8.5",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/562500/capsule_sm_120.jpg?t=1711836392",
    },
    {
      internalName: "STEEP",
      title: "Steep",
      metacriticLink: "https://store.steampowered.com/app/460920/Steep/",
      dealID: "lFYNlnjTxibcq5rKeaVnbU8ovP6Jj2w9NEiS028K8oc%3D",
      storeID: "1",
      gameID: "153990",
      salePrice: "4.49",
      normalPrice: "29.99",
      isOnSale: "1",
      savings: "85.028343",
      metacriticScore: "72",
      steamRatingText: "Very Positive",
      steamRatingPercent: "81",
      steamRatingCount: "25072",
      steamAppID: "460920",
      releaseDate: 1480636800,
      lastChange: 1711826704,
      dealRating: "8.5",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/460920/capsule_sm_120.jpg?t=1679998365",
    },
    {
      internalName: "AIRSCAPETHEFALLOFGRAVITY",
      title: "Airscape: The Fall of Gravity",
      metacriticLink:
        "https://store.steampowered.com/app/317250/Airscape__The_Fall_of_Gravity/",
      dealID: "q1UFZHqIZfW0HngET7MRT8s9erUzGCTafet8JwTalxg%3D",
      storeID: "1",
      gameID: "145330",
      salePrice: "2.08",
      normalPrice: "15.96",
      isOnSale: "1",
      savings: "86.967419",
      metacriticScore: "75",
      steamRatingText: "Very Positive",
      steamRatingPercent: "81",
      steamRatingCount: "2313",
      steamAppID: "317250",
      releaseDate: 1439251200,
      lastChange: 1711498624,
      dealRating: "8.5",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/317250/capsule_sm_120.jpg?t=1574484005",
    },
    {
      internalName: "INDIVISIBLE",
      title: "Indivisible",
      metacriticLink: "https://store.steampowered.com/app/421170/Indivisible/",
      dealID: "JMBT8pEc2pkZMSCdKx12D45A7e%2FEqho2vPUknM4lF9M%3D",
      storeID: "1",
      gameID: "203925",
      salePrice: "5.99",
      normalPrice: "39.99",
      isOnSale: "1",
      savings: "85.021255",
      metacriticScore: "78",
      steamRatingText: "Mostly Positive",
      steamRatingPercent: "72",
      steamRatingCount: "2055",
      steamAppID: "421170",
      releaseDate: 1570492800,
      lastChange: 1711661885,
      dealRating: "8.5",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/421170/capsule_sm_120.jpg?t=1677520885",
    },
    {
      internalName: "WHATREMAINSOFEDITHFINCH",
      title: "What Remains of Edith Finch",
      metacriticLink:
        "https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/",
      dealID: "PJFYR0z2rsYWPoIuowKiAYxHqt5Rx0M0XHcqDCtW7Cw%3D",
      storeID: "1",
      gameID: "168429",
      salePrice: "4.99",
      normalPrice: "19.99",
      isOnSale: "1",
      savings: "75.037519",
      metacriticScore: "89",
      steamRatingText: "Overwhelmingly Positive",
      steamRatingPercent: "95",
      steamRatingCount: "34325",
      steamAppID: "501300",
      releaseDate: 1492992000,
      lastChange: 1711559497,
      dealRating: "8.4",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/501300/capsule_sm_120.jpg?t=1709320869",
    },
    {
      internalName: "XPANDRALLY",
      title: "Xpand Rally",
      metacriticLink: "https://store.steampowered.com/app/3010/Xpand_Rally/",
      dealID: "fgGw0t%2FU1b5nRlIKdzTX5W6hgenYkxA0njL%2BqBGLnko%3D",
      storeID: "1",
      gameID: "3720",
      salePrice: "0.54",
      normalPrice: "4.99",
      isOnSale: "1",
      savings: "89.178357",
      metacriticScore: "82",
      steamRatingText: "Very Positive",
      steamRatingPercent: "81",
      steamRatingCount: "436",
      steamAppID: "3010",
      releaseDate: 1145491200,
      lastChange: 1711127316,
      dealRating: "8.4",
      thumb:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/3010/capsule_sm_120.jpg?t=1639506578",
    },
  ];
  return (
    <div className="container flex flex-wrap justify-center items-center text-center min-h-screen gap-5">
      <div>
        <h1 className="text-2xl text-center text-white mt-4 p-2 mb-2 font-semibold">
          All Game's
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center text-center">
        {games.map((game) => (
          <div key={game.gameID} className="text-white">
            <ul className="p-4 rounded-md flex">
              <li className="rounded-md border p-3 bg-yellow-900/50 grid justify-center text-center sm:items-center py-4 w-80 h-96">
                <div className="flex items-center justify-center w-full">
                  <img
                    src={game.thumb}
                    alt="Game-Image"
                    className="w-full sm:w-80 my-2 "
                  />
                </div>
                <button className="m-4">
                  <a
                    href={game.metacriticLink}
                    className="border rounded-md p-2 px-4 bg-teal-800 hover:bg-teal-700 active:bg-teal-700"
                  >
                    Game Link
                  </a>
                </button>
                <h1 className="p-2 font-medium text-xl">Game : {game.title}</h1>
                <div>
                  <p className="sm:font-serif">Rating : {game.dealRating}</p>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamingApi;
