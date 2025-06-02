// pages/angles.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Angles() {
    return (
        <div className="container mt-28 mx-auto pr-5 pl-5 px-4 py-8 bg-gray-50">
            <Head>
                <title>Angles - Definition, Types, and Properties</title>
                <meta name="description" content="Learn about angles, their definition, types, and properties. Understand how angles are measured and their significance in geometry." />
                <meta name="keywords" content="angles, acute angle, right angle, obtuse angle, straight angle, reflex angle, complete angle, geometry" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/angles" />
            </Head>

            {/* Title Section */}
            <div className="title-section text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Angles: An Introduction</h1>
            </div>

            {/* Banner Image */}
            <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Linear Algebra Banner" width={1200} height={400} className="w-full h-auto" />
            </div>

            {/* Introduction */}
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    An angle is formed when two rays are joined together at a common point. The common point here is called the node or vertex, and the two rays are called the arms of the angle. The angle is represented by the symbol ‘∠’. The word angle comes from the Latin word “Angulus”. Learn more about lines and angles here.
                    <br/><br/>
                    The angle is usually measured in degrees, using a protractor. Degrees 30°, 45°, 60°, 90°, 180° show different angles here. The types of angles are based on the values of angles in degrees.
                    <br/><br/>
                    We can also represent angles in radians, i.e., in terms of pi (π). 180 degrees is equal to π in radians.
                </p>
            </div>

            {/* Definition of Angles */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Definition of Angles</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    An <strong>angle</strong> is a form of geometrical shape, constructed by joining two rays to each other at their end-points. The angle can also be represented by three letters of the shape that define the angle, with the middle letter being where the angle actually is (i.e., its vertex). Angles are generally represented by Greek letters such as θ, α, β, etc.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/ABCw3001.png" alt="Adjacent Angles Diagram" width={300} height={200} className="rounded-lg shadow-md" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Eg. ∠ABC, where B is the given angle.
                    <br/><br/>
                    Angle measurement terms are – degree °, radians, or gradians.
                    <br/><br/>
                    The amount of rotation about the point of intersection of two planes (or lines) which is required to bring one in correspondence with the other is called an Angle.
                </p>
            </div>

            {/* Types of Angles */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Types of Angles and Their Properties</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    There are six types of angles. Each type of angle has a unique identification based on angle measurement. Let us read about each type of angle individually along with their properties.
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
                    <li><strong>Acute Angle:</strong> An acute angle is an angle greater than 0° and less than 90°.</li>
                    <li><strong>Right Angle:</strong> When an angle measures 90°, it is known as a right angle. A right angle can be easily observed as it forms the shape of the letter L.</li>
                    <li><strong>Obtuse Angle:</strong> When an angle measures greater than 90° but less than 180°, it is an obtuse angle.</li>
                    <li><strong>Straight Angle:</strong> The angle formed by a straight line is called a straight angle. In other words, a straight angle is a straight line, and the angle formed between two rays is equal to 180°.</li>
                    <li><strong>Reflex Angle:</strong> A reflex angle is an angle whose measure is greater than 180° but less than 360°.</li>
                    <li><strong>Complete Angle:</strong> When the measurement of an angle is equal to 360°, it is a complete angle.</li>
                </ul>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/different.png" alt="Types of Angles" width={600} height={400} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Angle Based on Rotation */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Angle Based on Rotation</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    Based on the direction of measurement or the direction of rotation, angles can be of two types:
                    <br/><br/>
                    • Positive Angles
                    <br/>
                    • Negative Angles
                </p>
                <div className="sectionsubheading text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-800">Positive Angles:</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    An angle measured in the counterclockwise (anti-clockwise) direction is a positive angle. In other words, positive angles are those angles that are rotated from the base in the anti-clockwise direction.
                </p>
                <div className="sectionsubheading text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-800">Negative Angles:</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Negative angles are those angles that are measured in a clockwise direction from the base. In other words, negative angles are those angles that are rotated from the base in the clockwise direction.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/positiveangle.png" alt="Positive and Negative Angles" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
            </div>

            {/* Parts of Angles */}
            <div className="sectionsubheading text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Parts of Angles</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/Terminalside.png" alt="Parts of Angles" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-6">
                    <li><strong>Vertex:</strong> The corner point of an angle is known as the Vertex. It is the point where two rays meet.</li>
                    <li><strong>Arms:</strong> The two sides of an angle joined at a common endpoint.</li>
                    <li><strong>Initial Side:</strong> It is also known as the reference line. All the measurements are done taking this line as the reference.</li>
                    <li><strong>Terminal Side:</strong> It is also known as the reference line. All the measurements are done taking this line as the reference.</li>
                </ul>
            </div>

            {/* Measurement Units */}
            <div className="subtitle-section text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Angle Based on Rotation</h2>
            </div>
            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                    To measure everything in this world, we need a unit. Similarly, angle measurement requires three units of measurement:
                </p>
                <div className="sectionsubheading text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-800">Degree of an Angle:</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    It is represented by ° (read as a degree). It most likely comes from Babylonians, who used a base 60 (Sexagesimal) number system. In their calendar, there was a total of 360 days. Hence, they adopted a full angle to be 360°. First, they tried to divide a full angle into angles using the angle of an equilateral triangle. Later, following their number system (base 60), they divided 60° by 60 and defined that as 1°. Sometimes, it is also referred to as arc degree or arc-degree which means the degree of an arc.
                    <br/><br/>
                    An angle is said to be equal to 1° if the rotation from the initial to the terminal side is equal to 1/360 of the full rotation.
                    <br/><br/>
                    A degree is further divided into minutes and seconds. 1′ (1 minute) is defined as one-sixtieth of a degree and 1” (1 second) is defined as one-sixtieth of a minute. Thus,
                    <br/><br/>
                    1°= 60′ = 3600”
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/angles-in-degrees (1) 1.png" alt="Degree Measurement" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
                <div className="sectionsubheading text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-800">Radian of an Angle:</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    This is the SI unit of angle. Radian is mostly used in Calculus. All the formulas for derivatives and integrals hold true only when angles are measured in terms of a radian. It is denoted by ‘rad’.
                    <br/><br/>
                    The length of the arc of a unit circle is numerically equal to the measurement in radian of the angle that it subtends.
                    <br/><br/>
                    In a complete circle, there are 2π radians.
                    <br/><br/>
                    360 = 2π; radian
                    <br/><br/>
                    Therefore, 1 radian = 180°/π
                </p>
                <div className="sectionsubheading text-center mt-6">
                    <h3 className="text-2xl font-bold text-gray-800">Gradian of an Angle:</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    This unit is least used in Maths. It is also called a gon or a grade.
                    <br/><br/>
                    An angle is equal to 1 gradian if the rotation from the initial to terminal side is 1/400 of the full rotation. Hence, the full angle is equal to 400 gradians.
                    <br/><br/>
                    It is denoted by ‘grad’.
                </p>
                <div className="image-container mt-6 flex justify-center">
                    <Image src="/Blog/mathBlogs/angle-measurement-in-gradian 1.png" alt="Gradian of an Angle" width={400} height={300} className="rounded-lg shadow-md" />
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/Decimal.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Decimal
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/variableExpressions"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    variableExpressions 
                </Link>
            </div>
        </div>
    );
}