import React from "react";
import { useState } from 'react';
import Newheader from '@/components/newheader';
import CheckPrivateContent from "../components/CheckPrivateContent";
import Footer from "@/components/footer";

const Start: React.FC = () => {
  return (
    <>
    <Newheader/>
    <CheckPrivateContent />
    <Footer/>
    </>
  );
};

export default Start;
