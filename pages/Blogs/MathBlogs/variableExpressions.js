// pages/variable-expressions.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

export default function VariableExpressions() {
    return (
        <div className="container mt-28 mx-auto pr-5 pl-5 px-4 py-8 bg-gray-50">
            <Head>
                <title>Algebra: Variable Expressions - Definition, Types, and Examples</title>
                <meta name="description" content="Learn about variable expressions in algebra, their definition, types, and how to evaluate them. Understand the concepts of variables, constants, terms, and coefficients." />
                <meta name="keywords" content="variable expressions, algebraic expressions, algebra, variables, constants, terms, coefficients, monomial, binomial, polynomial" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/variable-expressions" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">ALGEBRA: Variable Expressions</h1>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Blog Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Introduction to Variable Expressions */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Introduction to Variable Expressions</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    James and Natalie were playing with matchsticks and thought of forming patterns of numbers using the matchsticks.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/A1.png" alt="Matchstick Pattern 1" width={300} height={200} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Natalie added 3 more matchsticks to form a pattern with two 4s.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/A2.png" alt="Matchstick Pattern 2" width={300} height={200} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Then James again added 3 more matchsticks to form a pattern with three 4s.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/A3.png" alt="Matchstick Pattern 3" width={300} height={200} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Suddenly, Natalie wondered how many matchsticks are required to make a pattern of ten 4s.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    They understood from the existing pattern that they need 4 + 9(3) sticks to get it done as they want a pattern with ten 4s.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    From this, they concluded that they need 4 + (n − 1)3 sticks, in general, to make a pattern with n number of 4s.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Here, 4 + (n − 1)3 is called an algebraic expression.
                </p>
            </div>

            {/* Definition of Variable, Constant, Term, and Coefficient */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Definition of Variable, Constant, Term, and Coefficient</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                    <li>
                        <strong>A symbol that doesn't have a fixed value is called a variable in Math. It can take any value.</strong>
                        <br />
                        In the above example, n is a variable, and here it can take the values 1, 2, 3, ...
                        <br />
                        Some examples of variables in Math are a, b, x, y, z, m, etc.
                    </li>
                    <li className="mt-4">
                        <strong>A symbol that has a fixed numerical value is called a constant.</strong>
                        <br />
                        All numbers are constants.
                        <br />
                        Some examples of constants are 3, 6, -1/2, 5, etc.
                    </li>
                    <li className="mt-4">
                        <strong>A term is a variable alone (or) a constant alone (or) it can be a combination of variables and constants by the operation of multiplication or division.</strong>
                        <br />
                        Some examples of terms are 3x², -2/3y, 5m, etc.
                        <br />
                        Here, the numbers that are multiplying the variables are 3, -2/3, and 5, which are called <strong>coefficients</strong>.
                    </li>
                </ul>
            </div>

            {/* Variable Expression (Algebraic Expression) */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Variable Expression (Algebraic Expression)</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                    <li>
                        <strong>A variable expression (or) an algebraic expression is a combination of terms by the operations such as addition, subtraction, multiplication, division, etc.</strong>
                    </li>
                    <li className="mt-4">
                        <strong>Example of a Variable Expression:</strong>
                        <br />
                        An example of a variable expression (or) an algebraic expression is <strong>5X + 7</strong>.
                    </li>
                </ul>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/paint 1.png" alt="Variable Expression Example" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Evaluating a Variable Expression */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Evaluating a Variable Expression</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    To evaluate a variable expression at a given value, we just substitute that value in the expression and simplify it.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Example:</strong>
                    <br />
                    Evaluate 5x² + 2x + 7 at x = -2.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    <strong>Solution:</strong>
                    <br />
                    Substitute x = -2 in 5x² + 2x + 7:
                    <br />
                    5(-2)² + 2(-2) + 7 = 5(4) - 4 + 7
                    <br />
                    = 20 - 4 + 7
                    <br />
                    = 23
                    <br />
                    So the answer is 23.
                </p>
            </div>

            {/* Types of Algebraic Expressions */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Types of Algebraic Expressions</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    There are 3 main types of algebraic expressions:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>
                        <strong>Monomial Expression:</strong>
                        <br />
                        An algebraic expression that has only one term is known as a monomial.
                        <br />
                        Examples of monomial expressions include 3x⁴, 3xy, 3x, 8y, etc.
                    </li>
                    <li className="mt-4">
                        <strong>Binomial Expression:</strong>
                        <br />
                        A binomial expression is an algebraic expression that has two terms, which are unlike.
                        <br />
                        Examples of binomial expressions include 5xy + 8, xyz + x³, etc.
                    </li>
                    <li className="mt-4">
                        <strong>Polynomial Expression:</strong>
                        <br />
                        In general, an expression with more than one term with non-negative integral exponents of a variable is known as a polynomial.
                        <br />
                        Examples of polynomial expressions include ax + by + ca, x³ + 2x + 3, etc.
                    </li>
                </ul>
            </div>

            {/* Other Types of Expressions */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Other Types of Expressions</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Apart from monomial, binomial, and polynomial types of expressions, an algebraic expression can also be classified into two additional types:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li>
                        <strong>Numeric Expression:</strong>
                        <br />
                        A numeric expression consists of numbers and operations but never includes any variable.
                        <br />
                        Some examples of numeric expressions are 10 + 5, 15 ÷ 2, etc.
                    </li>
                    <li className="mt-4">
                        <strong>Variable Expression:</strong>
                        <br />
                        A variable expression is an expression that contains variables along with numbers and operations to define an expression.
                        <br />
                        A few examples of variable expressions include 4x + y, 5ab + 33, etc.
                    </li>
                </ul>
            </div>

            {/* Formulas */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Formulas</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    The general algebraic formulas we use to solve expressions or equations are:
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/maths-formula-chart-3-(1) 1.png" alt="Algebraic Formulas" width={600} height={400} className="rounded-lg shadow-md" />
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/AngleIntroduction.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Angle Introduction
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/quadraticEquation.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Quadratic Equation →
                </Link>
            </div>
        </div>
    );
}