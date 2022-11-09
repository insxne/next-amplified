function Home({ name, host }) {
  return (
    <>
      <div>Hola {name}</div> 
      <pre>{host}</pre>)
    </>
  )
}

export async function getServerSideProps(context) {
  const hostname = JSON.stringify(context.req.headers)

  return {
    props: { name: 'Mario', host: hostname }
  }
}

export default Home;