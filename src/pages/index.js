import Head from "next/head";
import Link from "next/link";

import axios from "src/configs/axios";

import Circle from "public/images/circle-accent-1.svg";

import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import Clients from "src/parts/Clients";
import ListCourses from "src/parts/ListCourses";
import ListCategories from "src/parts/ListCategories";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>MICRO</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main>
        <section className='header-clipping pt-10 min-h-screen md:min-h-0'>
          <div className='sunshine max-w-full'></div>
          <Circle className='absolute left-0 bottom-0'></Circle>
          <div className='container mx-auto px-4'>
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>

        <section className='container mx-auto pt-24'>
          <Clients></Clients>
        </section>

        <section className='container mx-auto pt-24'>
          <ListCourses data={data}></ListCourses>
        </section>

        <section className='container mx-auto pt-24'>
          <ListCategories></ListCategories>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
