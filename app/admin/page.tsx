"use client";

import React from "react";
import Heading from "../utils/Heading";
import AdminSideBar from "../components/Admin/sidebar/AdminSideBar";
import AdminProtected from "../hooks/adminProtected";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="LearnUp - Admin"
          description="LearnUp is platform for students to learn and enhance skills"
          keywords="Learning,Programming,Java,Machine Learning"
        />
        <div className="flex h-[200vh]">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSideBar />
          </div>
          <div className="w-[85%]"></div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
