"use client";

import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";

type Props = {};

const page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      <Protected>
        <Heading
          title="LearnUp"
          description="LearnUp is a platform for students to learn new Skills"
          keywords="Programming,Coding,Tech, React,Next,MERN, Node,Express,Mongodb"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          route={route}
          setRoute={setRoute}
        />
      </Protected>
    </div>
  );
};

export default page;
