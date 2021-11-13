import './App.css';
import img from './12-22.png';
import Header from './Header';
import RandomQuote from './RandomQuote';
import RandomUser from './RandomUser';
import CryptoPrice from './CryptoPrice';


function App() {

  return (
    <div className="App">
      <Header />
        <div className='items'>
          <div className=" child Left">
            <img className='image' src={img} alt=""/>
          </div>
          <div className="child Right">
            <RandomQuote />
            <RandomUser />
            <CryptoPrice />
            <div>bottom right</div>
         
          </div>
        </div>
       
    </div>
  );
}

export default App;
