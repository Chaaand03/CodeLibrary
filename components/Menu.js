// pages/menu.js
import Link from 'next/link';

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import kindercourse from "../public/Courses/kindercourse.jpg"
import basicmath from "../public/Courses/basicmath.jpg"
import basicmath2 from "../public/Courses/basicmath2.jpg"
import science from "../public/Courses/science.jpg"
import history from "../public/Courses/history.jpg"
import gemetry from "../public/Courses/gemetry.png"
import line from "../public/Courses/line.png"
import grade7 from "../public/Courses/grade7.png"
import grade8 from "../public/Courses/grade8.png"
import algebera1 from "../public/Courses/algebera1.png"
import algebera2 from "../public/Courses/algebera2.png"
import Multiplication from "../public/Courses/Multiplication.png"


const menuItems = [
  {
    name: "Kinder Garten",
    detail: "Basic literacy, numeracy",
    price: "$250",
    img: kindercourse,
    link: "https://drive.google.com/file/d/1t3KTg9Sw4mZkzkDlGTjOP2N34226HrZi/view?usp=sharing",
  },
  {
    name: "GRADE - 1",
    detail: "Basic literacy, numeracy",
    price: "$250",
    img: basicmath,
    link: "https://drive.google.com/file/d/1AmnliWJZYACIuVim_sVcrgU_agGfFKIM/view?usp=sharing",
  },
  {
    name: "GRADE - 2",
    detail: "Reading, simple math",
    price: "$250",
    img: basicmath2,
    link: "https://drive.google.com/file/d/1z6hJ5lJaBjoBrCvyNm4-puuqI8I9JAOq/view?usp=sharing",
  },
  {
    name: "GRADE - 3",
    detail: "Science introduction, expanded reading",
    price: "$250",
    img: science,
    link: "https://drive.google.com/file/d/1mfW-0FsE-RPQsYnfQm1p7LJC9mJrRxGt/view?usp=sharing",
  },
  {
    name: "GRADE - 4",
    detail: "Multiplication, grammar basics",
    price: "$250",
    img: Multiplication,
    link: "https://drive.google.com/file/d/1au_euVqoPyltcqmOdPW_kic85NbC6yDW/view?usp=sharing",
  },
  {
    name: "GRADE - 5",
    detail: "History, environmental studies",
    img: history,
    link: "https://drive.google.com/file/d/1YjZFqz3sLHeG5rDE4Q5q7Tje8-Wymqeu/view?usp=sharing",
  },
  {
    name: "GRADE - 6",
    detail: "Algebra basics, geography",
    img: line,
    link: "https://drive.google.com/file/d/1qBtTCOTW5woybLjeJvWmXjH-Fc8QYm68/view?usp=sharing",
  },
  {
    name: "GRADE - 7",
    detail: "Intermediate studies, deeper history",
    img: grade7,
    link: "https://drive.google.com/file/d/1hWgG7LKdL96Rsuq0i4qq__H_dEzJoCOj/view?usp=sharing",
  },
  {
    name: "GRADE - 8",
    detail: "High school prep, advanced algebra",
    img: grade8,
    link: "https://drive.google.com/file/d/15c0PBnl8VuDAmfZEyvrWkCgPick2qWy1/view?usp=sharing",
  },
  {
    name: "Algebra 1",
    detail: "Solving linear equations and inequations",
    img: algebera1,
    link: "https://drive.google.com/file/d/1YHfAStgcXdHH2zDvqg2OcRuRUb7MIaPQ/view?usp=sharing",
  },
  {
    name: "Algebra 2",
    detail: "Linear, quadratic functions",
    img: algebera2,
    link: "https://drive.google.com/file/d/1gwPqR4XB0wg7u1pjnWslDcfZgc13R934/view?usp=sharing",
  },
  {
    name: "Geometry",
    detail: "Triangle, Trigonometry, Circles, Probability",
    img: gemetry,
    link: "https://drive.google.com/file/d/1gJp25NhS9RiQqFqtUfmXqEr8K238ehz6/view?usp=sharing",
  },
];

export default function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <>
      <Head>
        <title>Educational Resources - Buy & Download</title>
        <meta name="description" content="Get the best educational resources for all grades. Buy and download study materials instantly." />
        <meta name="keywords" content="education, kindergarten, grade 1, grade 2, grade 3, algebra, geometry, learning materials, study resources" />
        <meta name="author" content="Kumar Mukteshwar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Educational Resources</h1>

        <div className="grid md:grid-cols-3 gap-4">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-3 rounded-lg">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-lg w-full h-48 object-cover"
                />

              </a>
              <h2 className="text-lg text-center text-black font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-600 text-center text-sm">{item.detail}</p>
              <p className="text-lg text-black text-center font-bold mt-1">{item.price}</p>
              <div className="flex justify-center mt-2">
                <Link href={item.link} target="_blank" className=" px-3 py-1 bg-blue-600 text-white rounded text-sm text-center ">
                  View File
                </Link>
                {/* <button onClick={() => addToCart(item)} className="px-3 py-1 bg-green-600 text-white rounded text-sm">
                  Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-8">
          <Link href="/programming">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded">
              Explore Programming
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
