import React from "react";

type CardProps = {
  name: string;
  image: string;
  href: string;
  disabled?: boolean;
}

export default function Card({name, image, href, disabled}: CardProps) {
  function handleClick(e: React.MouseEvent) {
    if (disabled) {
      e.preventDefault();
    }
  }

  return (
    <a href={href} onClick={handleClick}>
      <div className={"py-4 px-6 rounded-lg shadow-lg text-center cursor-pointer transform transition-transform hover:scale-110 "}>
        <div className={"flex flex-col items-center justify-center"}>
          <img className="mx-auto h-32 lg:h-48 w-32 lg:w-48" src={image} alt={"Profile picture"}/>
          {disabled && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="bg-gray-500 bg-opacity-50 py-4 px-4 lg:px-8 rounded">
                <p className="text-white text-center">Coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <h2 className="text-xl text-white hover:text-gray-200 text-center">{name}</h2>
    </a>
  );
}