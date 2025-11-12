import React, { useContext } from 'react';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import ChatBubble from './components/ChatBubble';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChatAndShop from './pages/ChatAndShop';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartContext, CartProvider } from './context/CartContext';

// A simple router component
const AppRouter: React.FC = () => {
  const [page, setPage] = React.useState('home');
  const { cart } = useContext(CartContext);

  const navigate = (targetPage: string) => {
    setPage(targetPage);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (page) {
      case 'chat':
        return <ChatAndShop />;
      case 'cart':
        return <Cart onNavigate={navigate} />;
      case 'checkout':
        return <Checkout onNavigate={navigate} />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Header onNavigate={navigate} cartCount={cart.length} currentPage={page} />
      {page === 'home' && <NavigationBar />}
      {renderPage()}
      {page !== 'chat' && <Footer />}
      {page === 'home' && <ChatBubble onNavigate={navigate} />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;