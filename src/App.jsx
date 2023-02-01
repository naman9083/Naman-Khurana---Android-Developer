import About from './about/About';
import './App.css';
import './components/intro/Intro'
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222":"white",color: darkMode && "white"}}>
      <Toggle/>
      <Intro/> 
      <About />
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
