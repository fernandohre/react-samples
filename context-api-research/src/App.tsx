import ShoppingCart from './components/ShoppingCart';
import CartProvider from './providers/CartProvider';

const App: React.FC = () => {
  return (
    <CartProvider>
      <ShoppingCart />
    </CartProvider>
  );
};

export default App;