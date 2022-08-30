import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Update from './views/Update';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Switch>
            <Route exact path="/Authors">
              <p>hello</p>
              <Main />
            </Route>
            {/* <Route exact path="/Authors/:id">
              <Detail />
            </Route> */}
            <Route path="/author/:id/edit">
            <p>hello</p>
              <Update />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
