// pages/blogInner.tsx
import React from 'react';
import Head from 'next/head';
import BlogInnerSec from '../components/BlogInnerSec';
import Newheader from '@/components/newheader';
import '../styles/global.css';
import Footer from '@/components/footer';

const BlogInnerPage: React.FC = () => {
  // Example dynamic blog title — in real use, you may get this from props or fetch
  const blogTitle = "Onlyfans Method 2024";

  return (
    <>
      <Newheader/>
      <main>
        <BlogInnerSec blogTitle={blogTitle} />
      </main>
      <Footer/>
    </>
  );
};

export default BlogInnerPage;
