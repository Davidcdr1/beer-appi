import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import Beers from './components/Beers';
import store from "./redux/stores";
import RandoomBeers from "./components/RandoomBeers";

function App() {
  return (
    
    
    <Provider store={store}>
       <RandoomBeers/>
      
      <Beers/>
     
      <BrowserRouter>
          <Switch>
            <Route path="/beers" exact component={Beers} />
          </Switch>
      </BrowserRouter>
    
    </Provider>
    
  );
}

export default App;
