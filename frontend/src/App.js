import React, { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Duck from './Duck';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/duck">
          <Duck />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  )
}

const Index = () => {
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
      <h1>Duck Home</h1>
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
                        <Link to="/duck">{data.user}</Link>
                        {/* <a href={data._id}></a> */}
                      </h1>
                    </li>
                  </ul> 
                </div>
              ))}
            </div>
          )}
        </div>

    </Fragment>
  );



};




export default App;