import React, { useRef } from "react";
import Card from "./Card";

function ForGround() {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is a backgound color of the card that will be displayed ",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is a backgound color of the card that will be displayed ",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is a backgound color of the card that will be displayed ",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload Now", tagColor: "green" },
    },
    {
      desc: "This is a backgound color of the card that will be displayed ",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" },
    },
    {
      desc: "This is a backgound color of the card that will be displayed ",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
  ];

  return (
    <div ref={ref} className="w-full h-screen flex gap-10 flex-wrap p-5 ">
      {data.map((item, index) => (
        <Card data={item} key={index} reference={ref} />
      ))}
    </div>
  );
}

export default ForGround;
