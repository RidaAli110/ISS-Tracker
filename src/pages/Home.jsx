import NavBar from '../components/Navbar';

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className='text-2xl md:text-3xl text-(--text-primary) text-center mt-7 md:mt-10'>
          Track the International Space Station
        </h1>
      </main>
    </>
  );
}

export default Home;
