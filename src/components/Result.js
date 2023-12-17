import '../App.css';
import Title from './Title';
import Table from './Table';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();

  const { values } = location.state;

  return (
    <div className="App">
      <div className="container">
          <Title />
          <Table values={values}/>
      </div>
    </div>
  );
}

export default Result;