"use client";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <BlogList />
      <Footer />
    </>
  );
};

export default Home;
