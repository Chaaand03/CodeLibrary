// pages/slope-formula.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

export default function SlopeFormula() {
    return (
        <div className="container mt-28 pr-5 pl-5 mx-auto px-4 py-8 bg-gray-50">
            <Head>
                <title>Slope Formula - Definition, Calculation, and Examples</title>
                <meta name="description" content="Learn about the slope formula, its definition, calculation, and examples. Understand how to calculate the slope of a line using coordinates." />
                <meta name="keywords" content="slope formula, slope calculation, slope examples, slope of a line, coordinate geometry" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/slope-formula" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Slope Formula</h1>
                <p className="text-xl text-gray-600">Understanding the Steepness of a Line</p>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Slope Formula Banner" width={800} height={400} className="w-full h-auto" />
            </div>

            {/* Text Block */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    The slope formula is used to calculate the steepness or the incline of a line. The x and y coordinates of the lines are used to calculate the slope of the line. It is the ratio of the change in the y-axis to the change in the x-axis.
                </p>
            </div>

            {/* Slope Formula Graph */}
            <div className="banner-image mb-12  overflow-hidden flex justify-center">
                <Image src="/Blog/mathBlogs/slope1.png" alt="Slope Formula Graph" width={800} height={800} className="rounded-lg" />
            </div>

            {/* Formula Section */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <div className="sectionsubheading text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Formula of Slope</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                    The formula to calculate slope is given as:
                </p>
                <p className="text-xl font-bold text-gray-800 mt-4">
                    m = (y<sub>2</sub> − y<sub>1</sub>) / (x<sub>2</sub> − x<sub>1</sub>)
                </p>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                    Where <strong>m</strong> is the slope of the line. <strong>x<sub>1</sub>, x<sub>2</sub></strong> are the coordinates of the x-axis, and <strong>y<sub>1</sub>, y<sub>2</sub></strong> are the coordinates of the y-axis.
                </p>
            </div>

            {/* Sample Examples Section */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <div className="sectionsubheading text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Sample Examples</h2>
                </div>

                {/* Question 1 */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Question 1:</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Find the slope of a line whose coordinates are (2, 7) and (8, 1)?
                    </p>
                    <div className="solution mt-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2"><strong>Solution:</strong></h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Given,<br />
                            <span className="equation">(x<sub>1</sub>, y<sub>1</sub>) = (2, 7)</span><br />
                            <span className="equation">(x<sub>2</sub>, y<sub>2</sub>) = (8, 1)</span>
                        </p>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                            The slope formula is:
                        </p>
                        <p className="equation text-xl text-black font-mono bg-gray-100 p-2 rounded-lg mt-2">
                            m = (y<sub>2</sub> − y<sub>1</sub>) / (x<sub>2</sub> − x<sub>1</sub>)
                        </p>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                            Calculations:
                        </p>
                        <p className="equation text-xl text-black font-mono bg-gray-100 p-2 rounded-lg mt-2">
                            m = (1 − 7) / (8 − 2)<br />
                            m = −6 / 6<br />
                            m = −1
                        </p>
                    </div>
                </div>

                {/* Question 2 */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Question 2:</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        If the slope of a line passing through the points (4, b) and (2, -9) is 3, then what is the value of b?
                    </p>
                    <div className="solution mt-4">
                        <h3 className="text-xl font-bold text-gray-800 mb-2"><strong>Solution:</strong></h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Given,<br />
                            Slope = m = 3<br />
                            Points:<br />
                            <span className="equation">(x<sub>1</sub>, y<sub>1</sub>) = (4, b)</span><br />
                            <span className="equation">(x<sub>2</sub>, y<sub>2</sub>) = (2, -9)</span>
                        </p>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                            Using the slope formula:
                        </p>
                        <p className="equation text-xl text-black font-mono bg-gray-100 p-2 rounded-lg mt-2">
                            m = (y<sub>2</sub> – y<sub>1</sub>) / (x<sub>2</sub> – x<sub>1</sub>)
                        </p>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                            Since the slope is 3:
                        </p>
                        <p className="equation text-xl text-black font-mono bg-gray-100 p-2 rounded-lg mt-2">
                            3 = (-9 – b) / (2 – 4)<br />
                            3 = (-9 – b) / (-2)<br />
                            -9 – b = 3(-2)<br />
                            -9 – b = -6<br />
                            b = -9 + 6 = -3
                        </p>
                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                            Therefore, the value of <strong>b</strong> is -3.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/IsocelesTriangle.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Isoceles Triangle
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/correspondingAngles.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Corresponding Angles →
                </Link>
            </div>
        </div>
    );
}