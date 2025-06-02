// pages/protractor.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Protractor() {
    return (
        <div className="container mt-28 mx-auto px-4 py-8 bg-gray-50">
            <Head>
                <title>Protractor - Definition, Usage, and Examples</title>
                <meta name="description" content="Learn about protractors, their definition, how to measure angles using a protractor, and important notes about angles in geometry." />
                <meta name="keywords" content="protractor, measuring angles, geometry, 360° protractor, angle measurement" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/protractor" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Protractor</h1>
                <p className="text-xl text-gray-600">Understanding Angle Measurement in Geometry</p>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Protractor Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Text Block */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    A <strong>protractor</strong> is a simple measuring instrument that is used to measure angles. A common protractor is in the shape of a semicircle with an inner scale and an outer scale and with markings from 0° to 180° on it. Architects and designers use a more precise protractor called an angle protractor tool which gives more accurate measures. Protractors have been in use since the seventeenth century. Later by the eighteenth century, protractors were widely used in geometry and mathematics.
                </p>
            </div>

            {/* What is a Protractor? */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">What is a Protractor?</h2>
            </div>

            <div className="container flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-md mb-12">
                <div className="text-block md:w-1/2">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Protractor</strong>, in math, is considered to be an important measuring instrument that is in the shape of a semi-circle. The common protractor is a translucent tool that helps us measure angles in degrees. A <strong>radian</strong> scale protractor measures an angle in radians. If we observe the figure given below, we can see that a common protractor has degrees marked clockwise from 0° to 180° in the outer scale and anti-clockwise from 0° to 180° in the inner scale.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image src="/Blog/mathBlogs/ProtractorA.png" alt="Protractor Illustration" width={350} height={100} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* How to Measure Angles Using Protractor? */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">How to Measure Angles Using Protractor?</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Suppose we have an angle to measure say, ∠ABC. Follow the steps given below to measure the angle.
                </p>
                <ol className="list-decimal list-inside mt-4 text-lg text-gray-700 space-y-4">
                    <li><strong>Step 1.</strong> Put the protractor above the line BC such that the midpoint of the protractor is at point B.</li>
                    <li><strong>Step 2.</strong> Adjust the protractor in such a way that BC is parallel to the straight-edge of the protractor.</li>
                    <li><strong>Step 3.</strong> The protractor has two ‘scales’ marked from 0 to 180 degrees on both ends. Take the reading where BC coincides with the 0 degree.</li>
                    <li><strong>Step 4.</strong> Now from 0 degrees, check the ray BA coincides with the curved edges of the protractor. This reading gives us the measure of angle ABC.</li>
                </ol>
                <div className="banner-image mt-6 shadow-lg rounded-lg overflow-hidden">
                    <Image src="/Blog/mathBlogs/Protractordata.png" alt="Measuring Angles with Protractor" width={1000} height={400} className="w-full h-auto" />
                </div>
            </div>

            {/* 360° Protractor */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">360° Protractor</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    A 360° protractor is circular in shape and has readings up to 360° in the clockwise direction. It is commonly used in the field of architecture, mechanical drawings, and meteorology.
                </p>
            </div>

            {/* Important Notes */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Important Notes</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                    <li>Angles are measured in degrees or radians.</li>
                    <li>A right angle is ¼ revolution and a straight angle is ½ a revolution.</li>
                    <li>A straight angle forms a straight line, and both its arms coincide with the straight edges of the protractor.</li>
                    <li>When the sum of the measures of two angles is that of a right angle, then each one of them is 45 degrees.</li>
                    <li>When the sum of the measures of two angles is that of a straight angle and if one of them is acute, then the other should be an obtuse angle.</li>
                </ul>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/squareRoot.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Square Root
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/AdjacentAngle.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Adjacent Aangle  →
                </Link>
            </div>
        </div>
    );
}