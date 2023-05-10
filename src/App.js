import Navigation from './components/Navigation';
import Gallery from './components/Gallery';
import Details from './components/Details';

import { useState } from 'react';

import Row from 'react-bootstrap/Row';



import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pendingCartItems, setPendingCartItems] = useState(0);

  const [currentCartItems, setCurrentCartItems] = useState(0);

  const handleCounterAdd = () => {
    setPendingCartItems(pendingCartItems + 1);
  }

  const handleCounterSub = () => {
    if(pendingCartItems > 0) {
      setPendingCartItems(pendingCartItems - 1);
    }
  }

  const handleCartAdd = () => {
    setCurrentCartItems(currentCartItems + pendingCartItems);
    setPendingCartItems(0);
  }

  const handleDeleteCart = () => {
    setCurrentCartItems(0);
  }

  return (
    <div className="App">
      <Navigation
        cartItems={currentCartItems}
        onCartDelete={handleDeleteCart}
      />
      <main className="product_section">
        <Row>
          <Gallery />
          <Details
            pendingItems={pendingCartItems}
            onCounterAdd={handleCounterAdd}
            onCounterSub={handleCounterSub}
            onCartAdd={handleCartAdd}
          />
        </Row>
      </main>
    </div>
  );
}

export default App;
