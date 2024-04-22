import React from "react";

function Anime() {
  const AnimeCharaters = [
    {
      id: 2145,
      quote:
        "If you don't like how things turned out, then try to change it. And then if it still doesn't work out, that's when you can be depressed.",
      anime: "Ryuugajou Nanana No Maizoukin",
      character: "Nanana Ryuugajou",
    },
    {
      id: 7177,
      quote:
        "The arrogant one is you, Espada. But rest at ease. The reason for your loss is not due to that arrogance. It is simply due to a difference in power.",
      anime: "Bleach",
      character: "Kuchiki Byakuya",
    },
    {
      id: 4849,
      quote:
        "It doesn't matter who your parents were. Everyone is a child of the sea.",
      anime: "One Piece",
      character: "Whitebeard",
    },
    {
      id: 4441,
      quote:
        "People cannot change the past. All we can do, is accept our own actions. If you still wish to be burdened by your sins, let it show in your future actions. It is your choice how to perceive something that has already happened.",
      anime: "Fate/stay night",
      character: "Kotomine Kirei",
    },
    {
      id: 4467,
      quote:
        "For the right price, you can buy not only treasures, but dreams, hearts and even people's lives!",
      anime: "Hunter X Hunter",
      character: "Leorio Paladiknight",
    },
    {
      id: 2381,
      quote:
        "This is what's inside your heart right now. A sky that has become this lovely, will not always remain sunny. There will be times when rain will fall and storms will carry on. The scenery will change, but if it is left alone, it will stay changed forever. For that, you must continue to fight, because that is to live. To live is to fight.",
      anime: "Rozen Maiden",
      character: "Shinku",
    },
    {
      id: 1672,
      quote:
        "They're part of who I am. No matter how much they hurt, they're important to me.",
      anime: "Natsume Yuujinchou",
      character: "Takashi Natsume",
    },
    {
      id: 5147,
      quote:
        "As long as I exist, I don't care if there's hell, or if only suffering exists there.",
      anime: "Durarara!!",
      character: "Izaya Orihara",
    },
    {
      id: 5536,
      quote:
        "Uhh.. Syaoran.. it's okay if you don't have any more feelings for me, that doesn't matter to me at all. But I'm in love with you and I just wanted you to know, that's all.",
      anime: "Tsubasa Reservoir Chronicle",
      character: "Sakura Kinomoto",
    },
    {
      id: 1337,
      quote:
        "Because nothing makes one happier than being with the one you love.",
      anime: "Plastic Memories",
      character: "Isla",
    },
    {
      id: 7298,
      quote:
        "Nobody calls me a pipsqueak and gets away with it! Not even a little girl!",
      anime: "Fullmetal Alchemist",
      character: "Edward Elric",
    },
    {
      id: 2541,
      quote:
        "There are so many weapons scattered across my path that it makes me wonder if this world is made of little more than lead and gunpowder.",
      anime: "Jormungand",
      character: "Jonathan Mar",
    },
    {
      id: 2310,
      quote:
        "The world is a big cradle of lies where people lay their heads on pretending nothing is wrong. A cycle where mortals dwells upon to...for a cursed one like me happily watch them from darkness savoring each moment a human dies due to their ignorance...",
      anime: "Touhou Project",
      character: "Flandre Scarlet",
    },
    {
      id: 5495,
      quote: "You know... You like me more than you think you do.",
      anime: "Sekai Ichi Hatsukoi",
      character: "Masamune Takano",
    },
    {
      id: 2031,
      quote:
        "If you have the will to follow through with your beliefs, the results will follow naturally.",
      anime: "A Certain Scientific Railgun",
      character: "Kuroko Shirai",
    },
    {
      id: 5918,
      quote:
        "We were born as weapons and we loved the power that came with it. Nothing could scare us. We walked around town like we owned the place, taking whatever we wanted whenever we wanted it. No one ever thought to ask what our lives were really like.",
      anime: "Soul Eater",
      character: "Elizabeth Thompson",
    },
    {
      id: 3160,
      quote:
        "There's no point in the world. But isn't that wonderful? Because if there isn't one, then you can decide what it is for yourself.",
      anime: "Sora No Woto",
      character: "Filicia Heideman",
    },
    {
      id: 2829,
      quote:
        "Sticking through with a lie to protect someone, is probably harder than telling the truth.",
      anime: "Akuma To Love Song",
      character: "Kawai Maria",
    },
    {
      id: 5559,
      quote:
        "Why you ask? That's the stupidest question I've ever heard.  The answer is obvious.  Because I want to! *to Misaki Takahashi*",
      anime: "Junjou Romantica",
      character: "Akihiko Usami",
    },
    {
      id: 1061,
      quote:
        "What are people? What is the \"self\"? So long as you look like someone else, no one can't tell who's really on the inside.",
      anime: "Kokoro Connect",
      character: "Iori Nagase",
    },
    {
      id: 4731,
      quote: "Hey Kaiba, maybe we should duel sometimes.",
      anime: "Yu-Gi-Oh!",
      character: "Joey Wheeler",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center text-center border">
      {AnimeCharaters.map((Anime) => (
        <div
          key={Anime.id}
          className="flex flex-wrap border text-white justify-center p-4 bg-transparent w-80 h-96 rounded-md mx-2 my-3 overflow-hidden"
        >
          <li className="sm:font-serif font-bold text-xl border border-white w-full flex justify-center items-center px-2 mb-3">
            Anime : {Anime.anime}
          </li>
          <p className="sm:font-mono "><strong>Quote</strong> : {Anime.quote}</p>
          <p className="p-2 font-semibold text-xl">
            Character : {Anime.character}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Anime;
