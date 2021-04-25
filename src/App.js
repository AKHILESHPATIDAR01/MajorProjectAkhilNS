import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Mainpage from './Components/Mainpage';
import Footer from './Components/Footer';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import ProductList from './Components/ProductList';
import ProductSingle from './Components/ProductSingle';
import ProductContextProvider from './Global/productContext';
import CartContextProvider from './Global/cartContext';
import Cart from './Components/Cart';



function App() {
  return (
    <div className="App">
    <ProductContextProvider >
        <CartContextProvider >   
          <BrowserRouter>
            <Header />
              <Switch>
                  <Route path="/" exact>
                    <Mainpage />
                  </Route> 
            

            
                  <Route path="/productList/:catagory_name" exact>
                    <ProductList />
                  </Route> 
              

              
                  <Route path="/productSingle/:id" exact>
                    <ProductSingle />
                  </Route>

                  <Route path="/cart" exact>
                    <Cart />
                  </Route>

              </Switch>



            <Footer />
          </BrowserRouter>
        </CartContextProvider>
        </ProductContextProvider>
    </div>
  );
}

export default App;
