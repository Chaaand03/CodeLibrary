// pages/exponential-functions.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ExponentialFunctions() {
    return (
        <div className="container mt-28 mx-auto pr-5 pl-5 px-4 py-8 bg-gray-50">
            <Head>
                <title>Algebra: Exponential Functions - Definition, Formulas, and Examples</title>
                <meta name="description" content="Learn about exponential functions, their definition, formulas, graphs, and properties. Understand exponential growth and decay with examples." />
                <meta name="keywords" content="exponential functions, exponential growth, exponential decay, algebra, exponential function graph, exponential function properties" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/exponential-functions" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">ALGEBRA: Exponential Functions</h1>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Blog Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Introduction to Exponential Functions */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    An exponential function is a mathematical function used in many real-world situations. It is mainly used to find exponential decay or exponential growth, compute investments, model populations, and more. In this article, you will learn about exponential function formulas, rules, properties, graphs, derivatives, exponential series, and examples.
                </p>
            </div>

            {/* What is an Exponential Function? */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">What is an Exponential Function?</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    An exponential function, as its name suggests, involves exponents. It has a constant as its base and a variable as its exponent. An exponential function can be in one of the following forms.
                </p>
            </div>

            {/* Exponential Function Definition */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Exponential Function Definition</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    In mathematics, an exponential function is a function of the form f(x) = a<sup>x</sup>, where "x" is a variable and "a" is a constant called the base of the function. The base "a" must be greater than 0.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/paint4 1.png" alt="Exponential Function Definition" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Exponential Function Examples */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Exponential Function Examples</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Here are some examples of exponential functions:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>f(x) = 2<sup>x</sup></li>
                    <li>f(x) = (1/2)<sup>x</sup></li>
                    <li>f(x) = 3e<sup>2x</sup></li>
                    <li>f(x) = 4 (3)<sup>-0.5x</sup></li>
                </ul>
            </div>

            {/* Exponential Function Formula */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Exponential Function Formula</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    An exponential function is defined by the formula f(x) = a<sup>x</sup>, where the input variable x occurs as an exponent. The exponential curve depends on the exponential function and the value of x.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    The exponential function is an important mathematical function of the form:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
                    <strong>f(x) = a<sup>x</sup></strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Where:
                    <br />
                    -a {'>'} 0 and a ≠ 1
                    <br />
                    - x is any real number
                    <br />
                    - If the variable is negative, the function is undefined for -1 &lt; x &lt; 1
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    An exponential curve grows or decays depending on the exponential function. Any quantity that grows or decays by a fixed percentage at regular intervals exhibits exponential growth or decay.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Exponential Growth:</strong>
                    <br />
                    In exponential growth, the quantity increases slowly at first and then rapidly. The rate of change increases over time. The formula for exponential growth is:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
                    <strong>y = a (1 + r)<sup>x</sup></strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Where r is the growth percentage.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Exponential Decay:</strong>
                    <br />
                    In exponential decay, the quantity decreases rapidly at first and then slowly. The rate of change decreases over time. The formula for exponential decay is:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
                    <strong>y = a (1 - r)<sup>x</sup></strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Where r is the decay percentage.
                </p>
            </div>

            {/* Exponential Function Graph */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Exponential Function Graph</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    The following figure represents the graph of exponents of x. As the exponent increases, the curves get steeper, and the rate of growth increases. Thus, for x {'>'} 1, the value of y = f<sub>n</sub>(x) increases for increasing values of n.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/paint5 1.png" alt="Exponential Function Graph" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    The exponential function with a base greater than 1, i.e., a {'>'} 1, is defined as y = f(x) = a<sup>x</sup>. The domain of the exponential function is the set of all real numbers R, and the range is the set of all positive real numbers.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    The graph of an exponential function passes through the point (0, 1) and is increasing. It is very close to zero if the value of x is mostly negative.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    The natural exponential function is y = e<sup>x</sup>, where e is the base of the natural logarithm.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/Exponential.png" alt="Natural Exponential Function" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Exponential Function Properties */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Exponential Function Properties</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    The properties of the exponential function graph when the base is greater than 1 are:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>The graph passes through the point (0, 1).</li>
                    <li>The domain is all real numbers.</li>
                    <li>The range is y {'>'} 0.</li>
                    <li>The graph is increasing.</li>
                    <li>The graph is asymptotic to the x-axis as x approaches negative infinity.</li>
                    <li>The graph increases without bound as x approaches positive infinity.</li>
                    <li>The graph is continuous.</li>
                    <li>The graph is smooth.</li>
                </ul>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/1 2.png" alt="Exponential Function Graph for y = 2^x" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    For the exponential function y = 2<sup>-x</sup>, the properties are:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>The graph passes through the point (0, 1).</li>
                    <li>The domain is all real numbers.</li>
                    <li>The range is y {'>'} 0.</li>
                    <li>The graph is decreasing.</li>
                    <li>The graph is asymptotic to the x-axis as x approaches positive infinity.</li>
                    <li>The graph increases without bound as x approaches negative infinity.</li>
                    <li>The graph is continuous.</li>
                    <li>The graph is smooth.</li>
                </ul>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/1 2.png" alt="Exponential Function Graph for y = 2^-x" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Exponential Function Rules */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Exponential Function Rules</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Some important exponential rules are:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>a<sup>x</sup> a<sup>y</sup> = a<sup>x + y</sup></li>
                    <li>a<sup>x</sup> / a<sup>y</sup> = a<sup>x - y</sup></li>
                    <li>(a<sup>x</sup>)<sup>y</sup> = a<sup>xy</sup></li>
                    <li>a<sup>x</sup> b<sup>x</sup> = (ab)<sup>x</sup></li>
                    <li>(a / b)<sup>x</sup> = a<sup>x</sup> / b<sup>x</sup></li>
                    <li>a<sup>0</sup> = 1</li>
                    <li>a<sup>-x</sup> = 1 / a<sup>x</sup></li>
                </ul>
            </div>

            {/* Exponential Function Examples */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Exponential Function Examples</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Examples of exponential functions include:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>f(x) = 2<sup>x</sup></li>
                    <li>f(x) = (1/2)<sup>x</sup></li>
                    <li>f(x) = 2<sup>x + 3</sup></li>
                    <li>f(x) = 0.5<sup>x</sup></li>
                </ul>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/Fraction.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Fraction
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
               
            </div>
        </div>
    );
}