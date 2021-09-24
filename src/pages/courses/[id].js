import Head from "next/head";
import Link from "next/link";
import courses from "src/constants/api/courses";

function DetailsCourse({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>

      <section
        className='pt-10 relative overflow-hidden'
        style={{ height: 600 }}></section>
    </>
  );
}

DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.details(id);

    return { data };
  } catch (error) {}
};

export default DetailsCourse;
