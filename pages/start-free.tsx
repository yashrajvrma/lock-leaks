import React from "react";
import { useState } from "react";
import Newheader from "@/components/newheader";
import CheckPrivateContentFree from "../components/CheckPrivateContentFree";
import Footer from "@/components/footer";

const Start: React.FC = () => {
  return (
    <>
      <Newheader />
      <CheckPrivateContentFree />
      <Footer />
    </>
  );
};

export default Start;
