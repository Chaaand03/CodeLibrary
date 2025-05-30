import React from 'react'
import Head from 'next/head'

const BlogMaths = () => {
  return (
    <>
      <Head>
        <title>Mathematics Blog</title>
        <meta name="description" content="Learn Mathematics concepts and tutorials" />
      </Head>
      <div className="py-12 mt-28 px-6 md:px-16 lg:px-24">
        <h1 className="text-3xl font-bold text-[#2D3A55] mb-6">Mathematics Blog</h1>
        <div className="prose max-w-none">
          {/* Add your math blog content here */}
          <p>Welcome to our Mathematics blog section!</p>
        </div>
      </div>
    </>
  )
}

export default BlogMaths
