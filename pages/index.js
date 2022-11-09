function Home({ name, host }) {
  return (
    <>
      <div>Hola {name}</div> 
      <pre>{host}</pre>
    </>
  )
}

export async function getServerSideProps(context) {
  const hostname = context.req.headers['x-forwarded-host'] || context.req.headers.host;

  return {
    props: { name: 'Mario', host: hostname }
  }
}

export default Home;