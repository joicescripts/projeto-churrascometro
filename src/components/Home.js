import '../App.css';
import Banner from './Banner';
import Box from './Box';
import Title from './Title';

function Home() {
  return (
    <div className="App">
      <div className="container">
          <Title />
          <Banner page="PrincipalPage" />
          <Box />
      </div>
    </div>
  );
}

export default Home;