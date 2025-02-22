// pages/quadratic-equation.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function QuadraticEquation() {
    return (
        <div className="container mt-28 mx-auto pr-5 pl-5 px-4 py-8 bg-gray-50">
            <Head>
                <title>Algebra: Quadratic Equation - Definition, Formula, and Examples</title>
                <meta name="description" content="Learn about quadratic equations, their definition, formula, and methods to solve them. Understand the applications of quadratic equations in real-life scenarios." />
                <meta name="keywords" content="quadratic equation, algebra, quadratic formula, solving quadratic equations, factoring, completing the square, square root method" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/quadratic-equation" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">ALGEBRA: Quadratic Equation</h1>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Blog Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Introduction to Quadratic Equations */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Quadratic equations are second-degree algebraic expressions and are of the form ax² + bx + c = 0. The term "quadratic" comes from the Latin word "quadratus" meaning square, which refers to the fact that the variable x is squared in the equation. In other words, a quadratic equation is an “equation of degree 2.” There are many scenarios where a quadratic equation is used. Did you know that when a rocket is launched, its path is described by a quadratic equation? Further, a quadratic equation has numerous applications in physics, engineering, astronomy, etc.
                    <br /><br />
                    Quadratic equations have a maximum of two solutions, which can be real or complex numbers. These two solutions (values of x) are also called the roots of the quadratic equations and are designated as (α, β). We shall learn more about the roots of a quadratic equation in the below content.
                </p>
            </div>

            {/* What is a Quadratic Equation? */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">What is a Quadratic Equation?</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    A quadratic equation is an algebraic equation of the second degree in x. The quadratic equation in its standard form is ax² + bx + c = 0, where a and b are the coefficients, x is the variable, and c is the constant term. The important condition for an equation to be a quadratic equation is the coefficient of x² is a non-zero term (a ≠ 0). For writing a quadratic equation in standard form, the x² term is written first, followed by the x term, and finally, the constant term is written.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/paint2 1.png" alt="Quadratic Equation" width={600} height={300} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Further, in real math problems, quadratic equations are presented in different forms: (x - 1)(x + 2) = 0, -x² = -3x + 1, 5x(x + 3) = 12x, x³ = x(x² + x - 3). All of these equations need to be transformed into the standard form of the quadratic equation before performing further operations.
                </p>
            </div>

            {/* Quadratic Formula */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Quadratic Formula</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    The formula for a quadratic equation is used to find the roots of the equation. Since quadratics have a degree equal to two, therefore there will be two solutions for the equation. Suppose ax² + bx + c = 0 is the quadratic equation, then the formula to find the roots of this equation will be:
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/paint3 1.png" alt="Quadratic Formula" width={600} height={200} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    The sign of plus/minus indicates there will be two solutions for x. Learn in detail the quadratic formula here.
                    <br /><br />
                    This formula is also known as the Sridharacharya formula.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Example:</strong> Let us find the roots of the same equation that was mentioned in the earlier section x² - 3x - 4 = 0 using the quadratic formula.
                    <br /><br />
                    a = 1, b = -3, and c = -4.
                    <br />
                    x = [-b ± √(b² - 4ac)] / 2a
                    <br />
                    = [-(-3) ± √((-3)² - 4(1)(-4))] / 2(1)
                    <br />
                    = [3 ± √25] / 2
                    <br />
                    = [3 ± 5] / 2
                    <br />
                    = (3 + 5) / 2 or (3 - 5) / 2
                    <br />
                    = 8 / 2 or -2 / 2
                    <br />
                    = 4 or -1 are the roots.
                </p>
            </div>

            {/* How to Solve Quadratic Equations? */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">How to Solve Quadratic Equations?</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    There are basically four methods of solving quadratic equations. They are:
                    <br /><br />
                    - Factoring
                    <br />
                    - Completing the square
                    <br />
                    - Using Quadratic Formula
                    <br />
                    - Taking the square root
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Factoring of Quadratics:</strong>
                    <br /><br />
                    <ul className="list-disc list-inside">
                        <li>Begin with an equation of the form ax² + bx + c = 0.</li>
                        <li>Ensure that it is set to adequate zero.</li>
                        <li>Factor the left-hand side of the equation by assuming zero on the right-hand side of the equation.</li>
                        <li>Assign each factor equal to zero.</li>
                        <li>Now solve the equation in order to determine the values of x.</li>
                    </ul>
                    <br />
                    Suppose if the main coefficient is not equal to one, then deliberately, you have to follow a methodology in the arrangement of the factors.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Example:</strong>
                    <br /><br />
                    2x² - x - 6 = 0
                    <br />
                    (2x + 3)(x - 2) = 0
                    <br />
                    2x + 3 = 0
                    <br />
                    x = -3 / 2
                    <br />
                    x = 2
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Completing the Square Method:</strong>
                    <br /><br />
                    Let us learn this method with an example.
                    <br /><br />
                    <strong>Example:</strong> Solve 2x² – x – 1 = 0.
                    <br /><br />
                    First, move the constant term to the other side of the equation.
                    <br />
                    2x² – x = 1
                    <br />
                    Dividing both sides by 2.
                    <br />
                    x² – x / 2 = ½
                    <br />
                    Add the square of half of the coefficient of x, (b / 2a)², on both the sides, i.e., 1 / 16
                    <br />
                    x² – x / 2 + 1 / 16 = ½ + 1 / 16
                    <br />
                    Now we can factor the right side,
                    <br />
                    (x - ¼)² = 9 / 16 = (¾)²
                    <br />
                    Taking root on both sides;
                    <br />
                    X – ¼ = ±3 / 4
                    <br />
                    Add ¼ on both sides
                    <br />
                    X = ¼ ± ¾
                    <br /><br />
                    Therefore,
                    <br />
                    X = ¼ + ¾ = 4 / 4 = 1
                    <br />
                    X = ¼ – ¾ = -2 / 4 = -½
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Taking the Square Root:</strong>
                    <br /><br />
                    We can use this method for equations such as:
                    <br />
                    x² + a² = 0
                    <br /><br />
                    <strong>Example:</strong> Solve x² – 50 = 0.
                    <br /><br />
                    x² – 50 = 0
                    <br />
                    x² = 50
                    <br />
                    Taking the roots on both sides
                    <br />
                    √x² = ±√50
                    <br />
                    x = ±√(2 x 5 x 5)
                    <br />
                    x = ±5√2
                    <br /><br />
                    Thus, we got the required solution.
                </p>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/variableExpressions"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Variable Expressions
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/Fraction.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Fraction →
                </Link>
            </div>
        </div>
    );
}