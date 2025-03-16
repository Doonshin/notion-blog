import Image from "next/image";
import React, { FC } from "react";
import { CardProps } from "../types/types";
import { getCover, getDate, getMultiSelect, getText } from "../utils/property";

const Card: FC<CardProps> = ({ page }) => {
  return (
    <a href={`/articles/${getText(page.properties.slug.rich_text)}`} className="block w-full h-full">
      <div className="max-w-md rounded overflow-hidden shadow-lg w-full my-2 md:my-0 h-full flex flex-col cursor-pointer hover:scale-105 transition-transform duration-200">
        {/* Image */}
        <div className="w-full h-[150px] overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={getCover(page.cover)}
            alt=""
            width={400}
            height={100}
            quality={30}
          />
        </div>

        {/* Title & Date */}
        <div className="px-6 pt-4">
          <h3 className="text-base font-medium mb-3">
            {getText(page.properties.name.title)}
          </h3>
          <p className="text-gray-700 text-xs">
            {getDate(page.properties.published.date)}
          </p>
        </div>

        {/* Tags */}
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
            <span
              key={index}
              className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
