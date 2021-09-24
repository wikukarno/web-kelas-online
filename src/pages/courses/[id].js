import Head from "next/head";
import courses from "src/constants/api/courses";

import Youtube from "react-youtube";
import Header from "src/parts/Header";

function DetailsCourse({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Micro</title>
      </Head>

      <section
        className='pt-10 relative overflow-hidden'
        style={{ height: 600 }}>
        {data?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className='video-wrapper'>
            <Youtube
              videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
              id={data?.chapters?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}></Youtube>
          </div>
        )}
        <div className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'></div>
        <div className='meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center'>
          <div className='text-center'>
            <h3 className='text-lg text-white'>Kelas Online :</h3>
            <h4 className='text-6xl text-teal-500 font-semibold'>
              {data?.name ?? "Nama Kelas"}
            </h4>
          </div>
        </div>
        <div className='container mx-auto z-10 relative'>
          <Header></Header>
        </div>
      </section>
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
