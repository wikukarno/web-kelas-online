import Head from "next/head";
import Link from "next/link";

function Todo({ data }) {
  return (
    <>
      <Head>
        <title>Micro | Random | {data.title}</title>
      </Head>

      <main className='container mt-12 mx-auto'>
        <h1 className='text-3xl text-blue-700'>{data.title}</h1>
        <Link href='/random'>
          <a>random</a>
        </Link>
      </main>
    </>
  );
}

Todo.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);

    return { data };
  } catch (error) {}
};

export default Todo;
