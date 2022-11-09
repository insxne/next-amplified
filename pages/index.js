function Home({ name }) {
  return <>Hola {name}</>
}

export async function getServerSideProps(context) {
  return {
    props: { name: 'Mario' }
  }
}

export default Home;