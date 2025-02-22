// pages/linear-algebra.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function LinearAlgebra() {
    return (
        <div className="container mt-28 mx-auto pl-10 pr-10 px-4 py-8  bg-gray-50">
            <Head>
                <title>Linear Algebra - Introduction, Applications, and Concepts</title>
                <meta name="description" content="Learn about linear algebra, its components, vector spaces, linear functions, matrices, and applications in real-world scenarios." />
                <meta name="keywords" content="linear algebra, vector spaces, linear functions, matrices, numeric linear algebra, linear algebra applications" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/linear-algebra" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Linear Algebra</h1>
                <p className="text-xl text-gray-600">Understanding the Basics, Applications, and Concepts</p>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Linear Algebra Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Text Block */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Linear algebra is one of the important branches of mathematics. Linear algebra is basically the study of vectors and linear functions. It is a key concept for almost all areas of mathematics. Linear algebra is considered a basic concept in the modern presentation of geometry. It is mostly used in Physics and Engineering as it helps to define the basic objects such as planes, lines, and rotations of the object. It allows us to model many natural phenomena, and also it has computing efficiency.
                </p>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                    In this article, you are going to learn about the basic introduction, its components, problems, linear equations, and its applications.
                </p>
            </div>

            {/* Introduction to Linear Algebra */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Introduction to Linear Algebra</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Linear algebra is the study of linear combinations. It is the study of vector spaces, lines, planes, and some mappings that are required to perform linear transformations. It includes vectors, matrices, and linear functions. It is the study of linear sets of equations and their transformation properties.
                </p>

                {/* Equation and Image Section */}
                <div className="flex flex-col md:flex-row items-center mt-8">
                    <div className="equation-section md:w-1/2">
                        <strong className="text-xl font-bold text-gray-800">Linear Algebra Equations:</strong><br /><br />
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The general linear equation is represented as:<br />
                            <span className="equation text-xl font-mono bg-gray-100 p-2 rounded-lg">a<sub>1</sub>x<sub>1</sub> + a<sub>2</sub>x<sub>2</sub> + ... + a<sub>n</sub>x<sub>n</sub> = b</span><br /><br />
                            Here:<br />
                            <strong>a</strong> - represents the coefficients<br />
                            <strong>x</strong> - represents the unknowns<br />
                            <strong>b</strong> - represents the constant<br /><br />
                        </p>
                    </div>
                    <div className="image-section md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <Image src="/Blog/mathBlogs/la_img1.png" alt="Linear Algebra Illustration" width={300} height={200} />
                    </div>
                </div>className="rounded-lg shadow-md" 

                <p className="text-lg text-gray-700 mt-8 leading-relaxed">
                    There exists a system of linear algebraic equations, which is a set of equations. The system of equations can be solved using matrices. It obeys the linear function such as:<br />
                    <span className="equation text-xl font-mono bg-gray-100 p-2 rounded-lg">(x<sub>1</sub>, ..., x<sub>n</sub>) → a<sub>1</sub>x<sub>1</sub> + ... + a<sub>n</sub>x<sub>n</sub></span>
                </p>
            </div>

            {/* Image Block */}
            <div className="banner-image mb-12  overflow-hidden flex justify-center">
                <Image
                    src="/Blog/mathBlogs/la_img2.png"
                    alt="Linear Algebra Intro Image"
                    width={400} // Adjust width
                    height={600} // Adjust height for a tall look
                    className="object-cover"
                />
            </div>




            {/* Vector Spaces Section */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Vector Spaces</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    As we know that linear algebra deals with the study of vector spaces and the linear transformations between them. By the definition of a vector, it is a physical quantity that has both magnitude and direction. A vector space is defined as the collection of objects called vectors, which may be added together and multiplied (i.e. scaled) by numbers, called scalars. Generally, <strong>real numbers</strong> are taken as scalars, but there exist vector spaces with scalar multiplication by non-real numbers, i.e., complex numbers, or naturally any field.
                </p>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                    The operations such as vector addition and scalar multiplication must satisfy specific requirements, called vector axioms. Generally, the terms real vector space and complex vector space are used to define that the scalars are real or complex numbers, respectively.
                </p>
                <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                    Suppose V be any vector space with elements a, b, c and scalars m, n over a field F, then the vector axioms are given by:<br /><br />
                    <strong>Commutative of addition:</strong> a + b = b + a<br />
                    <strong>Associativity of addition:</strong> a + (b + c) = (a + b) + c<br />
                    <strong>Additive identity:</strong> a + 0 = 0 + a = a, where 0 is an element in V called the zero vector.<br />
                    <strong>Additive inverse:</strong> a + (-a) = 0, where a and -a belong to V.
                </p>
            </div>

            {/* Image Block */}
            <div className="banner-image mb-12  overflow-hidden flex justify-center">
                <Image
                    src="/Blog/mathBlogs/la_img3.png"
                    alt="Linear Algebra Intro Image"
                    width={400} // Adjust width
                    height={600} // Adjust height for a tall look
                    className="object-cover"
                />
            </div>



            {/* Linear Function Section */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Linear Function</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="equation-section md:w-1/2">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            A linear function is an algebraic equation in which each term is either a constant or the product of a constant and a single independent variable of power 1. In linear algebra, vectors are used when forming linear functions. Some examples of vectors can be rephrased in terms of the function of vectors.<br /><br />
                            Mathematically, a linear function is defined as:<br /><br />
                            A function L : R<sup>n</sup> → R<sup>m</sup> is linear if:<br /><br />
                            (i) L(x + y) = L(x) + L(y)<br />
                            (ii) L(αx) = αL(x)<br /><br />
                            for all x, y ∈ R<sup>n</sup>, α ∈ R.
                        </p>
                    </div>
                    <div className="image-section md:w-1/2 flex justify-center mt-6 md:mt-0">
                        <Image src="/Blog/mathBlogs/la_linear_functions.png" alt="Linear Algebra Function Image" width={400} height={600} className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>

            {/* Linear Algebra Matrix Section */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Linear Algebra Matrix</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Matrices are linear functions of a certain kind. A matrix is the result of organizing information related to certain linear functions. Matrices frequently appear in linear algebra because they are central to understanding its core concepts.<br /><br />
                    Mathematically, this relation can be defined as follows:<br /><br />
                    A is an m × n matrix, then we get a linear function L : R<sup>n</sup> → R<sup>m</sup> by defining:<br /><br />
                    <span className="equation text-xl font-mono bg-gray-100 p-2 rounded-lg">L(x) = Ax</span><br />
                    or<br />
                    <span className="equation text-xl font-mono bg-gray-100 p-2 rounded-lg">Ax = B</span><br /><br />
                    Go through the example below to understand this mapping in detail.<br /><br />
                    <strong>Question:</strong><br />
                    A room contains x bags and y boxes of fruits. Each bag contains 2 apples and 4 bananas, and each box contains 6 apples and 8 bananas. There are a total of 20 apples and 28 bananas in the room. Find the value of x and y.<br /><br />
                    <strong>Solution:</strong><br />
                    Write the simultaneous equations for the given information that satisfies the conditions:<br /><br />
                    <span className="equation text-xl font-mono bg-gray-100 p-2 rounded-lg">2x + 6y = 20</span><br />
                    <span className="equation text-xl font-mono bg-gray-100 p-2 rounded-lg">4x + 8y = 28</span><br /><br />
                </p>
            </div>

            {/* Image Block */}
            <div className="banner-image mb-12  overflow-hidden flex justify-center">
                <Image
                    src="/Blog/mathBlogs/la_matrix.png"
                    alt="Linear Algebra Intro Image"
                    width={600} // Adjust width
                    height={800} // Adjust height for a tall look
                    className="object-cover"
                />
            </div>

            
            {/* Numeric Linear Algebra Section */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Numeric Linear Algebra</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Numerical linear algebra is also known as the applied linear algebra. Applied linear algebra deals with the study of how matrix operations can be used to create computer algorithms, which helps to solve the problems in continuous mathematics with efficiency and accuracy. In numerical linear algebra, many matrix decomposition methods are used to find the solutions for common linear algebraic problems like least-square optimization, locating Eigenvalues, and solving systems of linear equations. Some of the matrix decomposition methods in numerical linear algebra include Eigen decomposition, Single value decomposition, QR factorization and so on.
                </p>
            </div>

            {/* Image Block */}
            <div className="banner-image mb-12  overflow-hidden flex justify-center">
                <Image
                    src="/Blog/mathBlogs/la_numeric.png"
                    alt="Linear Algebra Intro Image"
                    width={400} // Adjust width
                    height={600} // Adjust height for a tall look
                    className="object-cover"
                />
            </div>

            
            {/* Linear Algebra Applications Section */}
            <div className="subtitle-section mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Linear Algebra Applications</h2>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Here, some of the linear algebra applications are given as:
                </p>
                <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-4">
                    <li><strong>Ranking in Search Engines:</strong> One of the most important applications of linear algebra is in the creation of Google. The most complicated ranking algorithm is created with the help of linear algebra.</li>
                    <li><strong>Signal Analysis:</strong> It is massively used in encoding, analyzing, and manipulating signals that can be either audio, video, or images, etc.</li>
                    <li><strong>Linear Programming:</strong> Optimization is an important application of linear algebra, which is widely used in the field of linear programming.</li>
                    <li><strong>Error-Correcting Codes:</strong> It is used in coding theory. If encoded data is tampered with slightly, linear algebra can help recover it. One such important error-correcting code is called Hamming code.</li>
                    <li><strong>Prediction:</strong> Predictions of some objects can be made using linear models, which are developed using linear algebra.</li>
                    <li><strong>Facial Recognition:</strong> An automated facial recognition technology that uses linear algebraic expressions is called principal component analysis.</li>
                    <li><strong>Graphics:</strong> An important part of graphics is projecting a 3-dimensional scene onto a 2-dimensional screen, which is handled only by linear maps explained by linear algebra.</li>
                </ul>
            </div>

            <div className="flex justify-between mt-8">
        {/* <Link
          href="/Blogs/MathBlogs/AdjacentAngle.html"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          ← Adjacent Angle
        </Link> */}
        <Link
          href="/Blogs/BlogMaths"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          Back to Blogs
        </Link>
        <Link
          href="/Blogs/MathBlogs/IsocelesTriangle.html"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          Isoceles Triangle →
        </Link>
      </div>
        </div>
    );
}