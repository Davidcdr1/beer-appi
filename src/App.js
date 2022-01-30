import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/stores";
import RandoomBeers from "./components/RandoomBeers";
import HomeBeers from "./components/HomeBeers";
import CartList from "./components/CartList";
import SearchBeers from "./components/SearchBeers";
import BeerDetail from "./components/BeerDetail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeBeers} />
          <Route path="/beers" exact component={SearchBeers} />
          <Route path="/random" exact component={RandoomBeers} />
          <Route path="/cart" exact component={CartList} />
          <Route path="/detail" exact component={BeerDetail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
