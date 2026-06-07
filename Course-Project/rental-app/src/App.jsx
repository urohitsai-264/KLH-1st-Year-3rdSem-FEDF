import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';

import Login from './pages/Login';
import Signup from './pages/Signup';

import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import Admin from './pages/Admin';

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

  const [selectedItem, setSelectedItem] =
    useState(null);

  const [cart, setCart] = useState(null);

  const [deliveryData, setDeliveryData] =
    useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem(
      'currentUser'
    );

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const navigate = (
    pageName,
    data = null
  ) => {
    setPage(pageName);

    if (data) {
      setSelectedItem(data);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setPage('home');
  };

  return (
    <>
      <Navbar
        user={user}
        setUser={setUser}
        onNavClick={navigate}
      />

      {page === 'home' && (
        <Hero
          onShopClick={() =>
            navigate('items')
          }
        />
      )}

      {page === 'items' && (
        <ItemList
          onSelect={navigate}
        />
      )}

      {page === 'item' &&
        selectedItem && (
          <ItemDetail
            item={selectedItem}
            onAddCart={setCart}
            onCheckout={() =>
              navigate('checkout')
            }
          />
        )}

      {page === 'login' && (
        <Login
          onLogin={handleLogin}
          onToggle={() =>
            navigate('signup')
          }
        />
      )}

      {page === 'signup' && (
        <Signup
          onSignup={handleLogin}
          onToggle={() =>
            navigate('login')
          }
        />
      )}

      {page === 'checkout' &&
        cart && (
          <Checkout
            user={user}
            cart={cart}
            onBack={() =>
              navigate('items')
            }
            onProceedToPayment={(
              delivery
            ) => {
              setDeliveryData(
                delivery
              );

              navigate('payment');
            }}
          />
        )}

      {page === 'payment' &&
        cart &&
        deliveryData && (
          <Payment
            user={user}
            cart={cart}
            deliveryData={
              deliveryData
            }
            onBack={() =>
              navigate('checkout')
            }
            onPaymentSuccess={() =>
              navigate('orders')
            }
          />
        )}

      {page === 'orders' &&
        user && (
          <Orders
            user={user}
            onBack={() =>
              navigate('home')
            }
          />
        )}

      {page === 'admin' && (
        <Admin
          onBack={() =>
            navigate('home')
          }
        />
      )}

      <footer className="footer">
        © 2026 RentEase
      </footer>
    </>
  );
}