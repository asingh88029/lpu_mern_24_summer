import './App.css'
import Cart from './components/Practice/Cart';

function App() {
  return (
    <div style={{display: 'flex', gap:10}}>
      <Cart name="I Phone 14 Cover" price="499"/>
      <Cart name="Toothpaste" price="99"/>
      <Cart name="Bag Pack" price="999"/>
      <Cart name="I Phone 14" price="99499"/>
    </div>
  );
}
export default App;


