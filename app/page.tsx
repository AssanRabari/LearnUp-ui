"use-client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="LearnUp"
        description="LearnUp is a platform for students to learn new Skills"
        keywords="Programming,Coding,Tech, React,Next,MERN, Node,Express,Mongodb"
      />
    </div>
  );
};
export default Page;
