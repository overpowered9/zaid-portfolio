import React from "react";
function Card(props) {
  return (
    <>
      <div className=" w-[280px] pt-5 pb-5 flex gap-7 flex-col justify-between border-solid rounded-xl items-center align-middle  overflow-hidden font-mono font-normal transform transition duration-500 ease-in-out hover:scale-105">
        <img className="w-[100px] aspect-auto" src={props.imageSrc} alt="" />
        <p className=" font-semibold">{props.text}</p>
      </div>
    </>
  );
}
export default Card;
