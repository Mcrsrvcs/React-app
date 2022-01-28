import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js';

let str = "text"
function App() {

  return ( 
    <>
    <Header />
    <div className="main"><h1>{str}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius cupiditate debitis voluptates odit. Eveniet corporis, alias iure qui pariatur quam? Aut autem dolores explicabo ducimus laboriosam voluptatum sint iusto consequuntur a odit quam totam nemo maiores id eaque, corporis molestias repudiandae itaque rem inventore. Nulla nisi dignissimos maxime quia.</p>
    </div>
    <Footer/>
    </>
  );
}

export default App;
