// pages/isosceles-triangle.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
export default function IsoscelesTriangle() {
  return (
    <div className="container mx-auto mt-28 px-4 py-8 bg-gray-50">
      <Head>
        <title>Isosceles Triangle - Properties, Formulas, and Examples</title>
        <meta name="description" content="Learn about the isosceles triangle, its properties, formulas, and examples. Understand the different types of isosceles triangles and their applications in geometry." />
        <meta name="keywords" content="isosceles triangle, geometry, triangle properties, triangle formulas, isosceles triangle examples" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://yourwebsite.com/isosceles-triangle" />
      </Head>

      {/* Title Section */}
      <div className="title-section text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Isosceles Triangle</h1>
        <p className="text-xl text-gray-600">Understanding the Properties, Formulas, and Types</p>
      </div>

      {/* Banner Image */}
      <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
        <Image src="/Blog/mathBlogs/blog_bg.png" alt="Blog Banner" width={1200} height={400} className="w-full h-auto" />
      </div>

      {/* Text Block */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          An isosceles triangle is a type of triangle that has any two sides equal in length. The two angles of an isosceles triangle, opposite to equal sides, are equal in measure. In geometry, a triangle is a three-sided polygon that is classified into three categories based on its sides, such as:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-2">
          <li>Scalene triangle (All three sides are unequal)</li>
          <li>Isosceles triangle (Only two sides are equal)</li>
          <li>Equilateral triangle (All three sides are equal)</li>
        </ul>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          In this article, we will learn the properties and formulas related to the isosceles triangle, in detail, along with examples.
        </p>
      </div>

      {/* Fun Fact Section */}
      <div
        className="text-block mb-12 p-8 rounded-lg shadow-md bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Blog/mathBlogs/isosceles_img1.png')",
          color: "#D3CCF2"
        }}
      >
        <h2 className="text-3xl text-black font-bold mb-4">Fun Fact:</h2>
        <p className="text-lg leading-relaxed text-black">
          Did you know that the isosceles triangle played a starring role in ancient architecture? The Great Pyramid of Giza, one of the Seven Wonders of the Ancient World, incorporates isosceles triangles in its design. Each triangular face of the pyramid is an isosceles triangle, symbolizing strength and stability—a perfect blend of beauty and engineering that has stood the test of time!
        </p>
      </div>

      {/* What is Isosceles Triangle? */}
      <div className="subtitle-section mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">What is Isosceles Triangle?</h2>
      </div>

      <div className="container flex flex-col md:flex-row items-center mb-12 bg-white p-8 rounded-lg shadow-md">
        <div className="text-block md:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed">
            An Isosceles triangle is a triangle that has two equal sides. Also, the two angles opposite the two equal sides are equal. In other words, we can say that “An isosceles triangle is a triangle which has two congruent sides“. Suppose in a triangle △ABC, if sides AB and AC are equal, then △ ABC is an isosceles triangle where ∠ B = ∠ C. The theorem that describes the isosceles triangle is “if the two sides of a triangle are congruent, then the angle opposite to them are also congruent”.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image src="/Blog/mathBlogs/isosceles_img2.png" alt="Isosceles Triangle Illustration" width={200} height={200} className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Angles of Isosceles Triangle */}
      <div className="subtitle-section mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Angles of Isosceles Triangle</h2>
      </div>

      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          The two of the three angles of the isosceles triangle are equal in measure, which is opposite to the equal sides. Hence, one of the angles is unequal. Suppose, if the measure of an unequal angle is given to us, then we can easily find the other two angles by angle sum property.
        </p>
      </div>

      {/* Example Section */}
      <div className="container flex flex-col md:flex-row items-center mb-12 p-8 rounded-lg shadow-md" style={{ backgroundColor: '#76B8D0' }}>
        <div className="text-block md:w-1/2">
          <p className="text-lg text-black leading-relaxed">
            <b>Example:</b> Given an isosceles triangle.
            Let the measure of the unequal angle is 70° and the other two equal angles measures x; then, as per the angle sum rule,<br />
            70° + x + x = 180°<br />
            70° + 2x = 180°<br />
            2x = 180 – 70 = 110°<br />
            x = 110/2 = 55°<br />
            Hence, the measure of the other two angles of an isosceles triangle is 55°.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image src="/Blog/mathBlogs/isosceles_img3.png" alt="Isosceles Triangle Example" width={200} height={200} className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Properties of Isosceles Triangle */}
      <div className="subtitle-section mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Properties of Isosceles Triangle</h2>
      </div>

      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          <li>As the two sides are equal in this triangle, the unequal side is called the base of the triangle.</li>
          <li>The angles opposite to the two equal sides of the triangle are always equal.</li>
          <li>The altitude of an isosceles triangle is measured from the base to the vertex (topmost) of the triangle.</li>
          <li>A right isosceles triangle has a third angle of 90 degrees.</li>
        </ol>
      </div>

      {/* Isosceles Triangle Theorem */}
      <div className="subtitle-section mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Isosceles Triangle Theorem</h2>
      </div>

      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          As per the theorem, if two sides are congruent in an isosceles triangle, then the angles opposite to the two sides are also congruent.
        </p>
      </div>

      <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
        <Image src="/Blog/mathBlogs/isosceles_img4.png" alt="Isosceles Triangle Theorem" width={1200} height={400} className="w-full h-auto" />
      </div>

      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Alternatively, if two angles are congruent in an isosceles triangle, then the sides opposite to them are also congruent.<br />
          In the above triangle ABC,<br />
          AB = AC<br />
          ∠ABC = ∠ADC
        </p>
      </div>

      {/* Types of Isosceles Triangle */}
      <div className="subtitle-section mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Types of Isosceles Triangle</h2>
      </div>

      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Generally, the isosceles triangle is classified into different types, namely:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-2">
          <li>Isosceles acute triangle</li>
          <li>Isosceles right triangle</li>
          <li>Isosceles obtuse triangle</li>
        </ul>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          Now, let us discuss these three different types of an isosceles triangle in detail.
        </p>
      </div>

      {/* Isosceles Acute Triangle */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Isosceles Acute Triangle</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          As we know that the different dimensions of a triangle are legs, base, and height. All the isosceles triangle has an axis of symmetry along the perpendicular bisector of its base. Depending on the angle between the two legs, the isosceles triangle is classified as acute, right, and obtuse. The isosceles triangle can be acute if the two angles opposite the legs are equal and are less than 90 degrees (acute angle).
        </p>
      </div>

      {/* Isosceles Right Triangle */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Isosceles Right Triangle</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          A right isosceles triangle has two equal sides, wherein one of the two equal sides acts as perpendicular and another one as a base of the triangle. The third side, which is unequal, is termed the hypotenuse. Therefore, we can apply here the famous Pythagoras theorem, where the square of the hypotenuse is equal to the sum of the square of base and perpendicular.
          Suppose the sides of the right isosceles triangle are a, a, and h, where a is the two equal sides, and h is the hypotenuse, then:<br /><br />
          <b>h = √(a² + a²) = √2a² = a√2 or h = √2a</b>
        </p>
      </div>

      {/* Isosceles Obtuse Triangle */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Isosceles Obtuse Triangle</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We know that the obtuse triangle is a triangle in which one of its angles is greater than 90 degrees (right angle). Also, drawing a triangle with more than two obtuse angles is impossible. We know that the obtuse triangle can be a scalene triangle or isosceles triangle. Therefore, the isosceles obtuse triangle is a triangle which has two equal sides with an obtuse angle.
        </p>
      </div>

      {/* Types of Isosceles Triangle Image */}
      <div className="banner-image mb-12 shadow-lg rounded-lg overflow-hidden">
        <Image src="/Blog/mathBlogs/isosceles_img5.png" alt="Types of Isosceles Triangle" width={1200} height={400} className="w-full h-auto" />
      </div>

      {/* Isosceles Triangle Formulas */}
      <div className="subtitle-section mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Isosceles Triangle Formulas</h2>
      </div>

      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          We know that an isosceles triangle is a two-dimensional shape with three sides. The measures to compute the isosceles triangle are the area and perimeter. Now, let us discuss the area and the perimeter of the isosceles triangle in detail.
        </p>
      </div>

      {/* Area of Isosceles Triangle */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Area of Isosceles Triangle</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The area of an isosceles triangle is defined as the region occupied by it in the two-dimensional space. Generally, the isosceles triangle is half the product of the base and height of an isosceles triangle. The formula to calculate the area of an isosceles triangle is given by:
        </p>
        <div className="image-container my-6 flex justify-center">
          <Image src="/Blog/mathBlogs/isosceles_img6.png" alt="Area of Isosceles Triangle" width={500} height={300} className="rounded-lg shadow-md" />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          <b>The area of an isosceles triangle, A = 1/2 x b x h square units</b><br />
          where b is the base and h is the triangle's height.
        </p>
      </div>

      {/* Perimeter of Isosceles Triangle */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Perimeter of Isosceles Triangle</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          As we know, the perimeter of any shape is the shape’s boundary. Similarly, the perimeter of an isosceles triangle is defined as the sum of the three sides of an isosceles triangle. The perimeter of an isosceles triangle can be found if we know its base and side. The formula to calculate the perimeter of the isosceles triangle is given by:
        </p>
        <div className="image-container my-6 flex justify-center">
          <Image src="/Blog/mathBlogs/isosceles_img7.png" alt="Perimeter of Isosceles Triangle" width={500} height={300} className="rounded-lg shadow-md" />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          <b>The perimeter of an isosceles triangle, P = 2a + b units</b><br />
          where a is the length of the two equal legs of the triangle and b is the base of the triangle.
        </p>
      </div>

      {/* Altitude of Isosceles Triangle */}
      <div className="text-block bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Altitude of Isosceles Triangle</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          When an altitude is drawn to the base of the isosceles triangle, it bisects the vertex angle. As it bisects the base, the two congruent triangles are created. The altitude of the triangle forms the required right angle and the altitude becomes the shared legs. Also, the congruent legs of a triangle become the congruent hypotenuse. Therefore, the altitude of drawn to the base of the isosceles triangle bisects the base.
        </p>
        <div className="image-container my-6 flex justify-center">
          <Image src="/Blog/mathBlogs/isosceles_img8.png" alt="Altitude of Isosceles Triangle" width={500} height={300} className="rounded-lg shadow-md" />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Link
          href="/Blogs/MathBlogs/LinearAlgebra.html"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          ← Linear Algebra
        </Link>
        <Link
          href="/Blogs/BlogMaths"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          Back to Blogs
        </Link>
        <Link
          href="/Blogs/MathBlogs/slopeFormula.html"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition flex items-center"
        >
        Slope Formula →
        </Link>
      </div>
    </div>
  );
}