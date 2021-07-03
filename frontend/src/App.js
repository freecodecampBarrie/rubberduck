import React, { Fragment, useEffect, useState } from 'react';
/* import Duck from './Duck'; */
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';




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

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <Fragment>
        <div>
          {loading ? (
            <div>Loading</div>
          ) : (
            
            <div>
              
              <h1>Counter {counter}</h1>
              <button onClick={() => dispatch(increment())}>+</button>
              <button onClick={() => dispatch(decrement())}>-</button>
              <hr />   
              
              {isLogged ? 
                <div><button onClick={() => dispatch(login())}>Logoff</button>
                  <h3>Valuable Information I should not see</h3></div> :
              <button onClick={() => dispatch(login())}>Login</button>}
              <hr />
              
              {duck.map((data) => (
                <div key={data._id}>
                  <ul>
                    <li>
                      <h1>
                        {/*   <Link to={data._id}>{data.user}</Link>    */}
                        <a href={data._id}>{data.user}</a>
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