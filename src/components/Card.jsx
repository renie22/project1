import React from "react";

const Card = ({ skill }) => {
  return (
    <div className="flex flex-col items-center gap-1.5 w-10 h-14 mt-10">
      <img className="h-10 w-10 object-cover" src={skill.img} alt="" />
      <h1 className="text-sm">{skill.title}</h1>
    </div>
  );
};

export default Card;
