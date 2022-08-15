import './App.css';
import  CakesComponent  from './components/CakesComponent';
import { HooksCakeContainer } from './components/HooksCakeContainer';
import { HooksIceCreamContainer } from './components/HooksIceCreamContainer';
import  IceCreamComponent  from './components/IceCreamComponent';
import NewCakeContainer from './components/NewCakeContainer';



function App() {

  return (
    <div className="App">
      <CakesComponent />
      <HooksCakeContainer />
      <IceCreamComponent />
      <HooksIceCreamContainer />
      <NewCakeContainer />
      
    </div>
  );
}

export default App;
