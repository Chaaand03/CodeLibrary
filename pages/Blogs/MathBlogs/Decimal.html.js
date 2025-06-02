// pages/fraction-to-decimal.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FractionToDecimal() {
  return (
    <div className="container mt-28 mx-auto pr-5 pl-5 px-4 py-8 bg-gray-50">
      <Head>
        <title>Converting Fractions to Decimals: 3/8 as a Decimal</title>
        <meta
          name="description"
          content="Learn how to convert the fraction 3/8 to a decimal using the division method. Step-by-step explanation with visual aids."
        />
        <meta
          name="keywords"
          content="fractions to decimals, 3/8 as a decimal, division method, math, decimal conversion"
        />
        <meta name="author" content="Your Name" />
        <link
          rel="canonical"
          href="https://yourwebsite.com/fraction-to-decimal"
        />
      </Head>

      {/* Title Section */}
      <div className="title-section text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Converting Fractions to Decimals
        </h1>
      </div>

      {/* Banner Image */}
      <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/Blog/mathBlogs/blog_bg.png"
          alt="Fraction to Decimal Banner"
          width={1200}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Writing 3/8 as a decimal using the division method:
          <br />
          <br />
          To convert any fraction to decimal form, we just need to divide its
          numerator by the denominator.
          <br />
          <br />
          Here, the fraction is 3/8, which means we need to perform 3 ÷ 8.
          <br />
          <br />
          This gives the answer as 0.375. So, 3/8 as a decimal is 0.375.
          <br />
          <br />
          Thus, 3/8 as a decimal is 0.375.
        </p>
        <div className="image-container flex justify-center">
          <Image
            src="/Blog/mathBlogs/38 1.png"
            alt="Decimal Conversion"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      {/* // Add this before the closing div */}
      <div className="flex justify-between mt-8">
        <Link
          href="/Blogs/MathBlogs/AdjacentAngle.html"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          ← Adjacent Angle
        </Link>
        <Link
          href="/Blogs/BlogMaths"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          Back to Blogs
        </Link>
        <Link
          href="/Blogs/MathBlogs/AngleIntroduction.html"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          Angle Introduction →
        </Link>
      </div>
    </div>
  );
}
