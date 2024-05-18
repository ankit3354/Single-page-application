import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative h-52 w-36 flex-shrink-0 overflow-hidden rounded-[40px] bg-zinc-900/50 px-6 py-5 text-white sm:h-60 sm:w-48 sm:px-8 sm:py-10"
    >
      <FaRegFileAlt />

      <p className="text-xs sm:text-sm leading-tight mt-5 font-semibold">
        {data.desc}
      </p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex text-xs items-center justify-between px-8 mb-3 sm:text-xs">
          {data.fileSize}
          <span className="w-3 h-3 sm:w-7 sm:h-7 bg-zinc-900 rounded-full flex items-center justify-center ">
            {data.close ? <IoClose /> : <MdOutlineFileDownload color="#fff" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag text-xs sm:text-sm w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
