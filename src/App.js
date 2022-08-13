import './App.css';
import  CakesComponent  from './components/CakesComponent';
import { HooksCakeContainer } from './components/HooksCakeContainer';
import { HooksIceCreamContainer } from './components/HooksIceCreamContainer';
import  IceCreamComponent  from './components/IceCreamComponent';



function App() {

  return (
    <div className="App">
      <CakesComponent />
      <HooksCakeContainer />
      <IceCreamComponent />
      <HooksIceCreamContainer />
      
    </div>
  );
}

export default App;
