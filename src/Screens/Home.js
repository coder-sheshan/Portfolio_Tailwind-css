import React from 'react';
import Resume from '../Assets/MyResume.pdf';

const Home = () => {

  return (
    <div className='homePage'>
      {/* Home Content */}
      <section id='home' className="bg-purple-900 text-white">
        <div
          className="mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Hi, I am Sheshan
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-1 max-w-xl sm:text-xl/relaxed">
            I'm a full-stack web developer with experience in both front-end and back-end development, as well as mobile development in React Native and other modern web technologies such as Next.js, Typescript, ReduxToolkit, and Sequlize (ORM).</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href={Resume}
                download
                rel='noreferrer'
              >
                <span
                  className="block rounded-full bg-purple px-8 py-3 text-sm font-medium hover:bg-transparent"
                >
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
