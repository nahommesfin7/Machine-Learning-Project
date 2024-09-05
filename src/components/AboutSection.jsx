import React from "react";

import Card from "./Card";
const AboutSection = () => {
  return (
    <div id="aboutus" className="py-28 bg-yellow-100 p-10">
      <h1 className="text-center uppercase  text-2xl">Team Members</h1>
      <div className="flex justify-around px-24 py-10 flex-wrap md:flex-nowrap">
        <Card Name={'Abebe Kebede'}></Card>
        <Card Name={'Abebe Kebede'}></Card>
        <Card Name={'Abebe Kebede'}></Card>
        <Card Name={'Abebe Kebede'}></Card>
  
      </div>
      <div className="flex justify-around px-24 pb-10 md:py-10 flex-wrap md:flex-nowrap">
      <Card Name={'Abebe Kebede'}></Card>
      <Card Name={'Abebe Kebede'}></Card>
      <Card Name={'Abebe Kebede'}></Card>
      <Card Name={'Abebe Kebede'}></Card>
 
      </div>
      <h1 className="text-center">Ethiopian AI institute alumni 2024</h1>
    </div>
  );
};

export default AboutSection;
