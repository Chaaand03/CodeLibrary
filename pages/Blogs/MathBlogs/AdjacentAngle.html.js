// pages/adjacent-angles.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function AdjacentAngles() {
    return (
        <div className="container mt-28 mx-auto pr-5 pl-5 px-4 py-8 bg-gray-50">
            <Head>
                <title>Adjacent Angles - Definition, Properties, and Examples</title>
                <meta name="description" content="Learn about adjacent angles, their definition, properties, and real-life examples. Understand how adjacent angles form linear pairs and supplementary angles." />
                <meta name="keywords" content="adjacent angles, linear pair, supplementary angles, geometry, angle properties" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/adjacent-angles" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Adjacent Angles</h1>
                <p className="text-xl text-gray-600">Understanding the Basics of Adjacent Angles</p>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Adjacent Angles Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Introduction */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Adjacent angles</strong> are the angles that have a common arm (side) and a common vertex, however, they do not overlap. An angle is formed when two rays meet at a common endpoint, and adjacent angles are those angles that are always placed next to each other. When the sum of two adjacent angles is 180°, they are called a linear pair of angles. Let us learn more about adjacent angles and see some adjacent angles examples.
                </p>
            </div>

            {/* What are Adjacent Angles? */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">What are Adjacent Angles?</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Two angles are said to be <strong>adjacent angles</strong> if they share a common vertex, a common side, and do not overlap. Observe the following figure to understand what adjacent angles look like. Angle 1 and 2 are adjacent because they share a common side BD and a common vertex B.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/11.png" alt="Adjacent Angles Diagram" width={400} height={600} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Adjacent Angles Definition */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Adjacent Angles Definition</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Adjacent angles are those angles that are always placed next to each other in such a way that they share a common vertex and a common side but they do not overlap each other.
                </p>
            </div>

            {/* Adjacent Angles Examples */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Adjacent Angles Examples</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    We can see many real-life examples of adjacent angles:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-4">
                    <li>The most common real-life example of adjacent angles can be seen in two pizza slices that are placed next to each other.</li>
                    <li>Another common example can be seen in the clock which shows the hour, minute, and second hand forming adjacent angles when all three are away from each other.</li>
                    <li>We can find three adjacent angles in the steering wheel of a car.</li>
                </ul>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/real-world-examples-of-adjacent-angles.png" alt="Examples of Adjacent Angles" width={1024} height={407} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Properties of Adjacent Angles */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Properties of Adjacent Angles</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    The properties of adjacent angles given below help us identify them easily:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-4">
                    <li>Adjacent angles always share a common arm.</li>
                    <li>They share a common vertex.</li>
                    <li>They do not overlap.</li>
                    <li>They have a non-common arm on both sides of the common arm.</li>
                    <li>Two adjacent angles can be supplementary or complementary based on the sum of the measures of the individual angles.</li>
                </ul>
            </div>

            {/* Adjacent Supplementary Angles */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Adjacent Supplementary Angles</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    What is the sum of adjacent angles? The adjacent angles will have the common side and the common vertex. Two angles are said to be supplementary angles if the sum of both the angles is 180 degrees. If the two supplementary angles are adjacent to each other, then they are called a linear pair.
                </p>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                    Sum of two adjacent supplementary angles = 180 degrees.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/Protractor1.png" alt="Linear Pair Example" width={1300} height={400} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Adjacent Angles - Linear Pair */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Adjacent Angles - Linear Pair</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    A pair of adjacent angles whose measures add up to form a straight angle are called a linear pair. For example, ∠POB and ∠POA are adjacent and supplementary:
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/Protractor2.png" alt="Linear Pair Example" width={800} height={400} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                    The angles ∠POB and ∠POA are formed at O. ∠POB and ∠POA are adjacent angles, and they are supplementary, i.e., ∠POB + ∠POA = ∠AOB = 180°.<br />
                    ∠POB and ∠POA are adjacent to each other, and when the sum of adjacent angles is 180°, then such angles form a linear pair of angles.
                </p>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/Protractor.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Protractor
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/Decimal.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Decimal  →
                </Link>
            </div>
        </div>
    );
}