import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {

  const [countrys, setCountrys] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        setCountrys(data);
        console.log(data);
        // const names = data.map(country => country.name.common)
        // console.log(names)
      })
  }, [])

  const handleAddCountry = country => {

    const newCart = [...cart, country];
    setCart(newCart);

  };

  return (
    <div className="App">
      <h1>Country loaded: {countrys.length}</h1>
      <h4>Country added: {cart.length}</h4>
      <Cart cart={cart}></Cart>

      {
        countrys.map(country => <Country country={country} key={country.name.common} handleAddCountry={handleAddCountry}></Country>)
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
