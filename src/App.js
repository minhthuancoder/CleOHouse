import CleNavbar from "./pages/customer/components/navbar/CleNavbar";
import HomePage from "./pages/customer/home-page/HomePage";
import './App.css'
import CleFooter from "./pages/customer/components/footer/CleFooter";
function App() {
  return (
    <div className="App ">
        <CleNavbar/>
        <HomePage/>
        <CleFooter/>
    </div>
  );
}

export default App;