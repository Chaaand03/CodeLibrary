import Head from "next/head";
import Link from "next/link";

const BlogLandingMath = () => {
  const blogs = [
    { title: "Linear Algebra", link: "/Blogs/MathBlogs/LinearAlgebra.html", desc: "Unlock the power of vectors and matrices with linear algebra, the backbone of modern mathematics!" },
    { title: "Isosceles Triangle", link: "/Blogs/MathBlogs/IsocelesTriangle.html", desc: "Discover the elegance of the isosceles triangle—where two sides are always equal and symmetry reigns!" },

    { title: "Slope Formula", link: "/Blogs/MathBlogs/slopeFormula.html", desc: "Master the slope formula to measure the steepness of lines and navigate the world of geometry!" },
    { title: "Corresponding Angles", link: "/Blogs/MathBlogs/correspondingAngles.html", desc: "Uncover the magic of corresponding angles and their role in parallel lines and transversal mysteries!" },
    { title: "Square Root", link: "/Blogs/MathBlogs/squareRoot.html", desc: "Demystify square roots and learn how to simplify equations with this fundamental math tool!" },
    { title: "Protractor", link: "/Blogs/MathBlogs/Protractor.html", desc: "Use a protractor to measure, draw angles, understand degrees, and apply in geometric constructions." },
    { title: "Adjacent Angles", link: "/Blogs/MathBlogs/AdjacentAngle.html", desc: "Explore how adjacent angles form linear pairs, relationships in polygons, and applications in real-world geometry." },
    { title: "3/8 as a Decimal", link: "/Blogs/MathBlogs/Decimal.html", desc: "Explore decimal place value, operations, conversions with fractions, rounding, applications in measurements, and real-world problems." },
    { title: "Angles: An Introduction", link: "/Blogs/MathBlogs/AngleIntroduction.html", desc: "Learn types, measurement, properties, and relationships of angles in geometric shapes and constructions." },
    { title: "Algebra: Variable Expressions", link: "/Blogs/MathBlogs/variableExpressions", desc: "Discover how variables represent unknowns, simplify expressions, solve equations, and model real-world situations." },
    { title: "Algebra: Quadratic Equation", link: "/Blogs/MathBlogs/quadraticEquation.html", desc: "Study solving methods, graphing parabolas, roots, vertex form, discriminants, and real-world applications." },
    { title: "Convert Decimal to Fraction", link: "/Blogs/MathBlogs/Fraction.html", desc: "Analyze fraction simplification, equivalence, operations, conversions, comparisons, and applications in real-world problems." },
    { title: "Algebra: Exponential Functions", link: "/Blogs/MathBlogs/exponentialFunction.html", desc: "Learn exponential growth, decay, graphs, equations, base properties, and applications in real-world problems." },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Mathematics Blog - Learn Math Concepts | EduBlogs</title>
        <meta name="description" content="Explore key mathematical concepts like linear algebra, quadratic equations, angles, and more. Learn with easy-to-understand explanations and examples." />
        <meta name="keywords" content="Mathematics, Algebra, Geometry, Linear Algebra, Quadratic Equations, Angles, Square Root, Exponential Functions" />
      </Head>

      {/* Blog Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-gray-100 min-h-screen mt-28">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Mathematics</h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link key={index} href={blog.link} className="group">
              <div className="cursor-pointer p-6 bg-white rounded-xl shadow-md border border-gray-200 
                  hover:shadow-xl hover:scale-[1.05] transition-all duration-300 relative overflow-hidden">
                
                {/* Faded Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>

                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 relative z-10">{blog.title}</h3>
                <p className="text-gray-600 mt-2 relative z-10">{blog.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogLandingMath;
