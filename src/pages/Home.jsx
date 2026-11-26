import NavBar from '../components/Navbar';
import StatsBar from '../components/home-page/StatsBar';
import IssMap from '../components/map/Map';
import AltitudeGraph from '../components/map-and-graph/Line-Graph';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className='text-2xl md:text-3xl text-(--text-primary) text-center mt-12 md:mt-17'>
          Track the International Space Station
        </h1>

        <StatsBar />
        <IssMap />
        <AltitudeGraph />
      </main>
    </>
  );
}
