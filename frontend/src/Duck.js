import React, { Fragment, useEffect, useState } from 'react';


const Duck = () => {
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
  
  return (<div></div>);

};

export default Duck;