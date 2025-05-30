import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function CorrespondingAngles() {
    return (
        <div className="container mt-28 px-5 mx-auto py-8 bg-gray-50 text-gray-900">
            <Head>
                <title>Corresponding Angles - Definition, Examples, and Theorems</title>
                <meta name="description" content="Learn about corresponding angles, their definition, examples, types, and theorems with clear illustrations." />
                <meta name="keywords" content="corresponding angles, parallel lines, transversals, angles theorem" />
                <meta name="author" content="Your Name" />
                <link rel="canonical" href="https://yourwebsite.com/corresponding-angles" />
            </Head>

            <div className="title-section text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Corresponding Angles</h1>
            </div>

            <div className="banner-image mb-12 flex justify-center">
                <Image src="/Blog/mathBlogs/blog_bg.png" alt="Blog Banner" width={800} height={400} className="w-full h-auto" />
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Definition</h2>
                <p className="text-lg leading-relaxed">
                    Corresponding angles are the angles which are formed in matching corners or corresponding corners with the transversal when two parallel lines are intersected by any other line (i.e., the transversal).
                </p>
                <p className="text-lg leading-relaxed">
                    For example, in the figure below, angle <strong>p</strong> and angle <strong>w</strong> are corresponding angles.
                </p>
                <div className="flex justify-center mt-6">
                    <Image src="/Blog/mathBlogs/ca1.png" alt="Corresponding Angles" width={540} height={540} className="rounded-lg" />
                </div>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Corresponding Angles Examples and Types</h2>
                <p className="text-lg leading-relaxed">
                    Examples of corresponding angles are any angles formed on the opposite side of the transversal. These can be of two types:
                </p>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
                    <li>Corresponding angles formed by parallel lines and transversals</li>
                    <li>Corresponding angles formed by non-parallel lines and transversals</li>
                </ul>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Corresponding Angles Formed by Parallel Lines and Transversals</h2>
                <p className="text-lg leading-relaxed">
                    If a transversal crosses two parallel lines, then the corresponding angles formed have equal measures.
                </p>
                <div className="flex justify-center mt-6">
                    <Image src="/Blog/mathBlogs/pa1.png" alt="Angles formed by parallel lines and transversal" width={540} height={540} className="rounded-lg" />
                </div>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Corresponding Angles Theorem</h2>
                <p className="text-lg leading-relaxed">
                    The corresponding angles theorem states: <span className="font-semibold">"If a line intersects two parallel lines, then the corresponding angles are congruent (equal)."</span>
                </p>
                <div className="flex justify-center mt-6">
                    <Image src="/Blog/mathBlogs/ct1.png" alt="Corresponding Angles Theorem" width={540} height={540} className="rounded-lg" />
                </div>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800">The Converse of the Corresponding Angles Theorem</h2>
                <p className="text-lg leading-relaxed">
                    The converse states: <span className="font-semibold">"If the corresponding angles are congruent, then the two lines are parallel."</span>
                </p>
            </div>

            <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Important Notes on Corresponding Angles</h2>
                <ul className="list-disc list-inside text-lg leading-relaxed mt-4">
                    <li>When two parallel lines are intersected by a third one, the angles that occupy the same relative position at different intersections are called corresponding angles.</li>
                    <li>Corresponding angles are congruent with each other.</li>
                    <li>If the corresponding angles in the two intersection regions are congruent, then the two lines are parallel.</li>
                </ul>
            </div>
            <div className="flex justify-between mt-8">
                <Link
                    href="/Blogs/MathBlogs/slopeFormula.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    ← Slope Formula
                </Link>
                <Link
                    href="/Blogs/BlogMaths"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Back to Blogs
                </Link>
                <Link
                    href="/Blogs/MathBlogs/squareRoot.html"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
                >
                    Square Root →
                </Link>
            </div>
        </div>
    );
}
