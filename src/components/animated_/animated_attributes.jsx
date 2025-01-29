import React from "react";
import "animate.css/animate.min.css";
import Card from "../cards/card";
import adapt from "../../assets/adapt.png";
import solution from "../../assets/solution.png";
import equal from "../../assets/equal.png";
const AnimatedAttr = () => {
  return (
    <div className=" flex justify-center flex-col items-center mt-[50px]">
      <h1 className="font-semibold text-3xl">Strenghts</h1>
      <div className=" sm: gap-4 px-[50px] py-7  justify-between overflow-hidden flex flex-row flex-wrap animate__animated animate__fadeInUp animate__slow">
        <Card imageSrc={adapt} text="Adaptability"></Card>
        <Card imageSrc={solution} text="Problem solving"></Card>
        <Card imageSrc={equal} text="Attention to detail"></Card>
      </div>
    </div>
  );
};

export default AnimatedAttr;
