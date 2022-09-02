import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Update from './views/Update';
import AddAuthor from './views/addAuthor';

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
      <h1>Favoraite Author</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/new">
              <AddAuthor />
            </Route>
            {/* <Route exact path="/Authors/:id">
              <Detail />
            </Route> */}
            <Route path="/author/:id/edit">
              <Update />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
