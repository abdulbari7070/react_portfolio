import HeaderComponent from "./components/header/HeaderComponent";
import Main from "./components/page-content/Main"
import About from "./components/page-content/About"
import './App.css';

function App() {
  return (
    <>
    <HeaderComponent />    
    <div class="page-content">
      <div id="content">
        <Main />
        <About />
      </div>
    </div>
      
    </>
    
  );
}

export default App;
