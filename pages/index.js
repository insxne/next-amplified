function Home({ name, host }) {
  return <>Hola {name} ({host})</>
}

export async function getServerSideProps(context) {
  const hostname = context.req.headers.host

  return {
    props: { name: 'Mario', host: hostname }
  }
}

export default Home;