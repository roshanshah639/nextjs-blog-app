/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../Assets/assets";
import Image from "next/image";
import Footer from "@/components/Footer.jsx";
import Link from "next/link";

const Blog = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        // console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              alt="Logo"
              width={180}
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-indigo-800 shadow-[-7px_7px_0px_#4b0082]">
            Get Started
            <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24 ">
          <h1 className="text-2xl sm:text-4xl tracking-tight font-semibold max-w-[700px] mx-auto text-indigo-950">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
        <div className="mx-5 max-w[800px] md:mx-auto mt-[-100px] mb-10">
          <Image
            src={data.image}
            alt=""
            width={1280}
            height={720}
            className="rounded border-4 border-indigo-100 "
          />
          <h1 className="my-6 text-[26px] font-semibold text-indigo-950">
            Introduction{" "}
          </h1>
          <p>{data.description}</p>
          <h3 className="my-5 text-[18px] font-semibold">
            Step 1: Self-Reflection and Goal Setting
          </h3>
          <p className="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            expedita beatae. Quidem illo porro labore rerum. Dignissimos, velit?
            Dolore expedita voluptate nostrum a quidem esse deleniti ratione
            delectus ipsa doloribus!
          </p>
          <p className="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            expedita beatae. Quidem illo porro labore rerum. Dignissimos, velit?
            Dolore expedita voluptate nostrum a quidem esse deleniti ratione
            delectus ipsa doloribus!
          </p>
          <h3 className="my-5 text-[18px] font-semibold">
            Step 2: Self-Reflection and Goal Setting
          </h3>
          <p className="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            expedita beatae. Quidem illo porro labore rerum. Dignissimos, velit?
            Dolore expedita voluptate nostrum a quidem esse deleniti ratione
            delectus ipsa doloribus!
          </p>
          <p className="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            expedita beatae. Quidem illo porro labore rerum. Dignissimos, velit?
            Dolore expedita voluptate nostrum a quidem esse deleniti ratione
            delectus ipsa doloribus!
          </p>
          <h3 className="my-5 text-[18px] font-semibold">
            Step 3: Self-Reflection and Goal Setting
          </h3>
          <p className="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            expedita beatae. Quidem illo porro labore rerum. Dignissimos, velit?
            Dolore expedita voluptate nostrum a quidem esse deleniti ratione
            delectus ipsa doloribus!
          </p>
          <p className="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            expedita beatae. Quidem illo porro labore rerum. Dignissimos, velit?
            Dolore expedita voluptate nostrum a quidem esse deleniti ratione
            delectus ipsa doloribus!
          </p>
          <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
          <p className="my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            expedita beatae. Quidem illo porro labore rerum. Dignissimos, velit?
            Dolore expedita voluptate nostrum a quidem esse deleniti ratione
            delectus ipsa doloribus! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Illum, expedita beatae. Quidem illo porro labore
            rerum. Dignissimos, velit? Dolore expedita voluptate nostrum a
            quidem esse deleniti ratione delectus ipsa doloribus! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Illum, expedita beatae.
            Quidem illo porro labore rerum. Dignissimos, velit? Dolore expedita
            voluptate nostrum a quidem esse deleniti ratione delectus ipsa
            doloribus!
          </p>
          <div className="my-24 ">
            <p className="text-indigo-800 font-semibold my-4">
              Share this article on Social Media
            </p>
            <div className="flex">
              <Image src={assets.facebook_icon} width={50} alt="" />
              <Image src={assets.twitter_icon} width={50} alt="" />
              <Image src={assets.googleplus_icon} width={50} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};
export default Blog;
