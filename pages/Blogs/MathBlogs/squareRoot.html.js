import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

export default function SquareRoot() {
    return (
        <div className="container mt-28 px-5 mx-auto py-8 bg-gray-50 text-gray-900">
            <Head>
                <title>Square Root - Definition, Properties, and Methods</title>
                <meta name="description" content="Learn about square roots, their definition, properties, and methods to calculate them with examples and illustrations." />
                <meta name="keywords" content="square root, mathematics, perfect square, prime factorization, long division" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/square-root" />
            </Head>

            <div className="title-section text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Square Root</h1>
            </div>

            <div className="banner-image mb-12 flex justify-center">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Linear Algebra Banner" width={800} height={400} className="w-full h-auto" />
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg leading-relaxed">
                    The square root of a number is the inverse operation of squaring a number.
                    The square of a number is the value that is obtained when we multiply the number by itself,
                    while the square root of a number is obtained by finding a number that when squared gives the original number.
                    If 'a' is the square root of 'b', it means that a × a = b.
                    The square of any number is always a positive number, so every number has two square roots, one of a positive value, and one of a negative value. For example, both 2 and -2 are square roots of 4. However, in most places, only the positive value is written as the square root of a number.
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What is a Square Root?</h2>
                <p className="text-lg leading-relaxed">
                    The square root of a number is that factor of a number which when multiplied by itself
                    gives the original number. Squares and square roots are special exponents.
                    Consider the number 9. When 3 is multiplied by itself, it gives 9 as the product.
                    This can be written as 3 × 3 or 3². Here, the exponent is 2, and we call it a square.
                    Now when the exponent is 1/2, it refers to the square root of the number.
                    For example, √n = n^(1/2), where n is a positive integer.
                </p>
                <div className="sectionsubheading text-center my-6">
                    <p className="text-xl font-semibold">Square Root Definition:</p>
                </div>
                <p className="text-lg leading-relaxed">
                    The square root of a number is the value of power 1/2 of that number.
                    In other words, it is the number whose product by itself gives the original number.
                    It is represented using the symbol '√ '. The square root symbol is called a radical,
                    whereas the number under the square root symbol is called the radicand.
                </p>
                <div className="flex justify-center my-6">
                    <Image src="/Blog/mathBlogs/fx1.png" alt="fx 1" width={200} height={200} className="rounded-lg" />
                </div>
                <p className="text-lg leading-relaxed">
                    Let us say m is a positive integer, such that  √(m.m) = √(m²) = m
                </p>
                <p className="text-lg leading-relaxed">
                    In mathematics, a square root function is defined as a one-to-one function
                    that takes a positive number as an input and returns the square root of the given input number.
                    f(x) = √x
                </p>
                <p className="text-lg leading-relaxed">
                    For example, if x=4, then the function returns the output value as 2.
                    Note: The square root of a negative number represents a complex number.
                    Suppose √-n = i√n, where i is the imaginary number.
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Square Root Formula</h2>
                <p className="text-lg leading-relaxed">
                    The formula to find the square root is:
                    <strong> y = √a </strong>
                    Since, y.y = y² = a; where ‘a’ is the square of a number ‘y’.
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Properties of Square Root</h2>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li>If a number is a perfect square number, then there exists a perfect square root.</li>
                    <li>If a number ends with an even number of zeros (0’s), then it can have a square root.</li>
                    <li>The two square root values can be multiplied. For example, √3 can be multiplied by √2, then the result should be √6.</li>
                    <li>When two same square roots are multiplied, then the result should be a radical number. It means that the result is a non-square root number. For instance, when √7 is multiplied by √7, the result obtained is 7.</li>
                    <li>The square root of any negative numbers is not defined because the perfect square cannot be negative.</li>
                    <li>If a number ends with 2, 3, 7 or 8 (in the unit digit), then the perfect square root does not exist.</li>
                    <li>If a number ends with 1, 4, 5, 6 or 9 in the unit digit, then the number may have a perfect square root.</li>
                </ul>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Find Square Root?</h2>
                <p className="text-lg leading-relaxed">
                    To find the square root of a number, we just see by squaring which number would give the actual number.
                    It is very easy to find the square root of a number that is a perfect square. Perfect squares are
                    those positive numbers that can be expressed as the product of a number by itself. In other words,
                    perfect squares are numbers which are expressed as the value of power 2 of any integer. We can use
                    <strong> four methods to find the square root of numbers</strong> and those methods are as follows:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li>Repeated Subtraction Method</li>
                    <li>Prime Factorization Method</li>
                    <li>Estimation Method</li>
                    <li>Long Division Method</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    It should be noted that the first three methods can be conveniently used for perfect squares, while the fourth
                    method, i.e., the long division method can be used for any number whether it is a perfect square or not.
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Repeated Subtraction Method of Square Root</h2>
                <p className="text-lg leading-relaxed">
                    This is a very simple method. We subtract the consecutive odd numbers from the number for which we are finding the
                    square root, till we reach 0. The number of times we subtract is the square root of the given number.
                    This method works only for perfect square numbers. Let us find the square root of 16 using this method.
                </p>
                <ol className="list-decimal list-inside text-lg leading-relaxed">
                    <li>16 - 1 = 15</li>
                    <li>15 - 3 = 12</li>
                    <li>12 - 5 = 7</li>
                    <li>7 - 7 = 0</li>
                </ol>
                <p className="text-lg leading-relaxed">
                    You can observe that we have subtracted 4 times. Thus, √16 = 4
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Square Root by Prime Factorization Method</h2>
                <p className="text-lg leading-relaxed">
                    Prime factorization of any number means to represent that number as a product of prime numbers.
                    To find the square root of a given number through the prime factorization method, we follow
                    the steps given below:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li><strong>Step 1:</strong> Divide the given number into its prime factors.</li>
                    <li><strong>Step 2:</strong> Form pairs of factors such that both factors in each pair are equal.</li>
                    <li><strong>Step 3:</strong> Take one factor from the pair.</li>
                    <li><strong>Step 4:</strong> Find the product of the factors obtained by taking one factor from each pair.</li>
                    <li><strong>Step 5:</strong> That product is the square root of the given number.</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Let us find the square root of 144 by this method.
                </p>
                <div className="flex justify-center my-6">
                    <Image src="/Blog/mathBlogs/sq1.png" alt="sqr 1" width={200} height={200} className="rounded-lg" />
                </div>
                <p className="text-lg leading-relaxed">
                    This method works when the given number is a perfect square number.
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Finding Square Root by Estimation Method</h2>
                <p className="text-lg leading-relaxed">
                    Estimation and approximation refer to a reasonable guess of the actual value to make
                    calculations easier and more realistic. This method helps in estimating and approximating
                    the square root of a given number. Let us use this method to find √15. Find the nearest
                    perfect square number to 15. 9 and 16 are the perfect square numbers nearest to 15.
                    We know that √16 = 4 and √9 = 3. This implies that √15 lies between 3 and 4.
                    Now, we need to see if √15 is closer to 3 or 4. Let us consider 3.5 and 4.
                    Since 3.5² = 12.25 and 4²= 16. Thus, √15 lies between 3.5 and 4 and is closer to 4.
                </p>
                <p className="text-lg leading-relaxed">
                    Let us find the squares of 3.8 and 3.9. Since 3.8² = 14.44 and 3.9² = 15.21.
                    This implies that √15 lies between 3.8 and 3.9. We can repeat the process and check
                    between 3.85 and 3.9. We can observe that √15 = 3.872.
                    This is a very long process and time-consuming.
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Calculating Square Root by Long Division Method</h2>
                <p className="text-lg leading-relaxed">
                    Long division is a method for dividing large numbers into steps or parts, breaking the
                    division problem into a sequence of easier steps. We can find the exact square root of
                    any given number using this method. Let us understand the process of finding square root
                    by the long division method with an example. Let us find the square root of 180.
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                    <li><strong>Step 1:</strong> Place a bar over every pair of digits of the number starting from the units' place (right-most side). We will have two pairs, i.e., 1 and 80</li>
                    <li><strong>Step 2:</strong> We divide the left-most number by the largest number whose square is less than or equal to the number in the left-most pair.</li>
                    <div className="flex justify-center my-6">
                        <Image src="/Blog/mathBlogs/lllllll 1.png" alt="lllllll 1" width={400} height={400} className="rounded-lg" />
                    </div>
                    <li><strong>Step 3:</strong> Bring down the number under the next bar to the right of the remainder. Add the last digit of the quotient to the divisor. To the right of the obtained sum, find a suitable number which, together with the result of the sum, forms a new divisor for the new dividend that is carried down.</li>
                    <div className="flex justify-center my-6">
                        <Image src="/Blog/mathBlogs/lllllll 2.png" alt="lllllll 2" width={400} height={400} className="rounded-lg" />
                    </div>
                    <li><strong>Step 4:</strong> The new number in the quotient will have the same number as selected in the divisor. The condition is the same — as being either less than or equal to the dividend.</li>
                    <li><strong>Step 5:</strong> Now, we will continue this process further using a decimal point and adding zeros in pairs to the remainder.</li>
                    <div className="flex justify-center my-6">
                        <Image src="/Blog/mathBlogs/Untitled1(5).png" alt="square1" width={400} height={400} className="rounded-lg" />
                    </div>
                    <div className="flex justify-center my-6">
                        <Image src="/Blog/mathBlogs/vv1.png" alt="vv1" width={400} height={400} className="rounded-lg" />
                    </div>
                    <li><strong>Step 6:</strong> The quotient thus obtained will be the square root of the number. Here, the square root of 180 is approximately equal to 13.4 and more digits after the decimal point can be obtained by repeating the same process as follows.</li>
                </ul>
                <div className="flex justify-center my-6">
                    <Image src="/Blog/mathBlogs/square-root-of-180-1-1652950151 1.png" alt="square2" width={400} height={400} className="rounded-lg" />
                </div>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Square Root Table</h2>
                <p className="text-lg leading-relaxed">
                    The square root table consists of numbers and their square roots. It is useful
                    to find the squares of numbers as well. Here is the list of square roots of perfect
                    square numbers and some non-perfect square numbers from 1 to 10.
                </p>
                <div className="flex justify-center my-6">
                    <Image src="/Blog/mathBlogs/Add a subheading 1.png" alt="square2" width={400} height={400} className="rounded-lg" />
                </div>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Square Root of Decimal</h2>
                <p className="text-lg leading-relaxed">
                    A decimal value will have a dot (.) such as 3.8, 5.2, 6.33, etc. For a whole number, we have understood how to derive the square root but let us see how to get the square root of a decimal.
                </p>
                <p className="text-lg leading-relaxed">
                    <strong>Example:</strong> Find the square root of 0.09. Let N² = 0.09
                    Taking root on both sides.
                    N = ±√0.09
                    As we know,
                    0.3 x 0.3 = (0.3)² = 0.09
                    Therefore,
                    N = ±√(0.3)²
                    N = ±(0.3)
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Square Root of Negative Number</h2>
                <p className="text-lg leading-relaxed">
                    The square root of a negative number cannot be a real number, since a square is either a
                    positive number or zero. But complex numbers have the solutions to the square root of a
                    negative number. The principal square root of -x is: √(-x)= i√x. Here, i is the square root of -1.
                    For example: Take a perfect square number like 16. Now, let's see the square root of -16.
                    There is no real square root of -16. √(-16)= √16 × √(-1) = 4i (as, √(-1)= i), where 'i' is represented as the square root of -1. So, 4i is a square root of -16. </p>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Square of a Number</h2>
                <p className="text-lg leading-relaxed">
                    Any number raised to exponent two (y2) is called the square of the base. So, 52 or 25 is referred to as the square of 5, while 82 or 64 is referred to as the square of 8. We can easily find the square of a number by multiplying the number two times. For example, 52 = 5 × 5 = 25, and 82 = 8 × 8 = 64. When we find the square of a whole number, the resultant number is a perfect square. Some of the perfect squares we have are 4, 9, 16, 25, 36, 49, 64, and so on. The square of a number is always a positive number.
                </p>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Find the Square of a Number?</h2>
                <p className="text-lg leading-relaxed">
                    The square of a number can be found by multiplying a number by itself. For single-digit numbers, we can use multiplication tables to find the square, while in the case of two or more than two-digit numbers, we perform multiplication of the number by itself to get the answer. For example, 9 × 9 = 81, where 81 is the square of 9. Similarly, 3 × 3 = 9, where 9 is the square of 3.
                </p>
                <div className="flex justify-center my-6">
                    <Image src="/Blog/mathBlogs/squares-and-square-roots-1612186913 1.png" alt="square2" width={400} height={400} className="rounded-lg" />
                </div>
                <p className="text-lg leading-relaxed">
                    The square of a number is written by raising the exponent to 2. For example, the square of 3 is written as 32 and is read as "3 squared".
                </p>
                <p className="text-lg leading-relaxed">
                    <strong>Here are some examples : </strong>
                    <br />
                    42 = 4 × 4 = 16 <br />
                    (-6)2 = -6 × -6 = 36 <br />
                    (5/3)2 = 5/3 × 5/3 = 25/9
                </p>

            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Find the Square of a Number?</h2>
                <p className="text-lg leading-relaxed">
                    There is very strong relation between squares and square roots as each one of them is the inverse relation of the other. i.e., if x2 = y then x = √y.
                    <br />
                    <br />

                    It can be simply remembered like this:
                    <br />
                    <br />

                    When "square" is removed from one side of the equation, we get the square root on the other side. For example, 42 = 16 means, 4 = √16. This is also known as "taking square root on both sides".
                    When "square root" is removed from one side of the equation, we get square on the other side. For example, √25 = 5 means, 25 = 52. This is also known as "squaring on both sides"
                    This logic helps in solving many equations in algebra. Consider the following example:
                </p>

                <p className="text-lg leading-relaxed mt-5">
                    <strong> Example:  </strong> Solve the equation √(2x + 3) = 10. <br />
                    <strong> Solution: </strong>  <br />
                    Squaring on both sides of the equation would result in the cancellation of
                    the square root on the left side. 2x + 3 = 102 <br />
                    2x + 3 = 100 <br />
                    2x = 97 <br />
                    x = 97/2 = 48.5

                </p>

            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/correspondingAngles.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Corresponding Angles
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/Protractor.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Protractor →
                </Link>
            </div>
        </div>
    )
}



