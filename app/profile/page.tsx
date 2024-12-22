"use client";

import React, { FC, useState } from "react";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Profile from "../components/Profile"
import { useSelector } from "react-redux";
type Props = {};

const page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const {user} = useSelector((state:any) => state.auth)
  return (
    <div>
      <Protected>
        <Heading
          title={`${user.name}`}
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
        <Profile user={user}/>
      </Protected>
    </div>
  );
};

export default page;
