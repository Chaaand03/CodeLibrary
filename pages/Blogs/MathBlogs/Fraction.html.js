// pages/fractions.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Fractions() {
    return (
        <div className="container mt-28 mx-auto pr-5 pl-5 px-4 py-8 bg-gray-50">
            <Head>
                <title>Fractions - Decimal to Fraction Conversion and Examples</title>
                <meta name="description" content="Learn how to convert decimals into fractions with step-by-step explanations and solved examples. Understand the concept of fractions and decimals in mathematics." />
                <meta name="keywords" content="fractions, decimals, decimal to fraction, fraction conversion, mathematics, solved examples" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/fractions" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Fractions</h1>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Blog Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Introduction to Fractions */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    To convert a decimal into a fraction, we need to first write the given decimal in the form of a fraction by adding a denominator 1. Then, we multiply both the numerator and denominator with multiples of 10 to remove the decimal point. For example, 1.9 is a decimal number, and its equivalent fraction is 19/10, which cannot be simplified further.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Decimal:</strong> In terms of a computer, decimal numbers have a base 10. In mathematics, a decimal number has a dot (.) or decimal point between the digits. Decimals are essentially fractions with denominators as 10 or multiples of 10. Examples include 3.2, 10.9, 55.1, 1.28, and 9.234.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Fractions:</strong> A fraction represents a part of a whole number. It is denoted as a ratio of two numbers a/b, where a and b are integers, and b ≠ 0. The two numbers are called the numerator and denominator. For example, 1/2 is a part of 1, and 3/5 is a part of 3. Fractions can be proper, improper, or mixed.
                </p>
            </div>

            {/* How to Convert Decimal into Fractions? */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">How to Convert Decimal into Fractions?</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Follow these steps to convert a decimal into a fraction:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>Write the given decimal as a ratio (p/q), where the denominator is 1.</li>
                    <li>Multiply the numerator and denominator by multiples of 10 for every decimal point, so that the decimal in the numerator becomes a whole number. (For example, if there are two numbers after the decimal point, multiply by 100/100).</li>
                    <li>Simplify the resulting fraction.</li>
                </ul>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/38 1.png" alt="Decimal to Fraction Conversion" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    These steps make decimal-to-fraction conversion simple and accurate.
                </p>
            </div>

            {/* Solved Examples */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Solved Examples</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Here are some examples of decimal-to-fraction conversions to help you understand the concept better.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Example 1:</strong> Find the fraction form of the decimal 0.7.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Solution:</strong> Given the decimal number 0.7, we need to find its fraction form.
                    <br />
                    0.7 = 7/10
                    <br />
                    Now, multiply 7/10 by 2 in both the numerator and denominator:
                    <br />
                    (7 × 2) / (10 × 2) = 14/20
                    <br />
                    To find more equivalent fractions, multiply 7/10 by 5 and 10:
                    <br />
                    (7 × 5) / (10 × 5) = 35/50
                    <br />
                    (7 × 10) / (10 × 10) = 70/100
                    <br />
                    Therefore, the fractions of 0.7 are 7/10, 35/50, and 70/100.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Example 2:</strong> Convert 7.15 into a fraction.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Solution:</strong> Given the decimal number 7.15, multiply and divide by 100:
                    <br />
                    7.15 × 100 / 100 = 715/100
                    <br />
                    Simplify the fraction:
                    <br />
                    715/100 = 143/20
                    <br />
                    To find equivalent fractions, multiply the numerator and denominator by 2:
                    <br />
                    (143 × 2) / (20 × 2) = 286/40
                    <br />
                    Therefore, the fractions of 7.15 are 715/100, 143/20, and 286/40.
                </p>
            </div>

            {/* 0.375 as a Fraction */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">0.375 as a Fraction</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Explanation:</strong>
                    <br />
                    To convert 0.375 into a fraction, follow these steps:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Step 1:</strong> Write 0.375 as the numerator and place 1 in the denominator, followed by the number of zeros equal to the decimal places. Since 0.375 has three decimal places, the denominator becomes 1000.
                    <br />
                    0.375 = 375/1000
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Step 2:</strong> Simplify the fraction 375/1000.
                    <br />
                    375/1000 = 3/8
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Therefore, 0.375 as a fraction is 3/8.</strong>
                </p>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/quadraticEquation.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Quadratic Equation
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/exponentialFunction.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Exponential Function →
                </Link>
            </div>
        </div>
    );
}