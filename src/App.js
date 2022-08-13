import './App.css';
import { CakesComponent } from './components/CakesComponent';
import {useSelector} from 'react-redux'


function App() {
  const {numOfCake} = useSelector((state) => state)
  console.log(numOfCake)
  return (
    <div className="App">
      <CakesComponent numberOfCake={numOfCake} />
      
    </div>
  );
}

export default App;
