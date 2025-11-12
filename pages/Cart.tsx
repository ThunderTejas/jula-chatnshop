import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';

interface CartProps {
  onNavigate: (page: string) => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
        let price = 0;
        if (item.price.type === 'normal' || item.price.type === 'from') {
            price = parseFloat(item.price.value.replace(/,-|[^0-9.]/g, ''));
        } else if (item.price.type === 'sale' || item.price.type === 'julaClubSale') {
            price = parseFloat(item.price.current.replace(/,-|[^0-9.]/g, ''));
        }
        return total + price;
    }, 0).toFixed(2);
  };

  const handleCheckout = () => {
    clearCart();
    onNavigate('checkout');
  };

  return (
    <main className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-black mb-6 border-b pb-4">Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty.</p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-[#d41f26] text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="relative">
                   <ProductCard product={item} />
                   <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-2 right-2 bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-black z-10"
                    aria-label="Remove item"
                   >
                    X
                   </button>
                </div>
              ))}
            </div>
            <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h2 className="text-2xl font-bold text-black">
                Total: <span className="text-[#d41f26]">{getTotalPrice()} NOK</span>
              </h2>
              <div className="flex gap-4">
                 <button
                    onClick={() => onNavigate('home')}
                    className="bg-gray-200 text-black font-bold py-3 px-6 rounded-md hover:bg-gray-300 transition-colors"
                >
                    Continue Shopping
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-[#d41f26] text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
