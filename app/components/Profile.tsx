"use client";

import React, { useState } from "react";

type Props = {};

const Profile = (props: Props) => {
  const [scroll, setScroll] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.screenY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }
  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] bh-slate-900 bg-opacity-90 border border-[#ffffff1d] rounded-[5px] shadow-sm mt-[80px] mb-[60px] sticky
        ${scroll ? "w-[120px]" : "top-[30px]"} `}
      ></div>
    </div>
  );
};

export default Profile;
