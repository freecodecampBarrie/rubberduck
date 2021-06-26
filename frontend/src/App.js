import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Duck from './Duck';

const store = createStore(
  alleducer, /* preloadedState, */
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const App = () => {
  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch('http://localhost:8080/');
      const data = await response.json();

      try {
        console.log(data);
        setLoading(false);
        setDuck(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const [duck, setDuck] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Fragment>

      <Link to="/"><h1>Duck Home</h1></Link>
      <Router>
        <div>
          {loading ? (
            <div>Loading</div>
          ) : (
            <div>
              {duck.map((data) => (
                <div key={data._id}>
                  <ul>
                    <li>
                      <h1>
                        <Link to={data._id}>{data.user}</Link>
                        {/* <a href={data._id}></a> */}
                      </h1>
                    </li>
                  </ul> 
                </div>
              ))}
            </div>
          )}
        </div>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/">
            <Duck />
          </Route>
        </Switch>
        
      </Router>
    </Fragment>
  );
};




export default App;