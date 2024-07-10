import Image from "next/image";
import React from "react";
import { assets } from "../../Assets/assets";
import Link from "next/link";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w[300px] rounded bg-indigo-50 border border-indigo-800 hover:shadow-[-7px_7px_0px_#4b0082]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-indigo-800 "
        />
      </Link>
      <p className="ml-5 mt-5 px-4 py-1 inline-block bg-indigo-800 text-white text-sm rounded ">
        {category}
      </p>
      <div className="p-4">
        <h5 className="mb-2 mt-1 text-lg font-medium tracking-tight text-indigo-600">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center text-indigo-800"
        >
          Read More{" "}
          <Image src={assets.arrow} className="ml-2" alt="" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
