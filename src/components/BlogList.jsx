import React, { useState } from "react";
import { blog_data } from "../../Assets/assets";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-indigo-800 text-white py-2 px-6 rounded" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-indigo-800 text-white py-2 px-6 rounded"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-indigo-800 text-white py-2 px-6 rounded"
              : ""
          }
        >
          Start Up
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-indigo-800 text-white py-2 px-6 rounded"
              : ""
          }
        >
          Life Style
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <>
                <BlogItem
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
