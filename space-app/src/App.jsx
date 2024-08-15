import './App.css';
import Astros from './components/astros/Astros.jsx';
import Navbar from './components/navbar/Navbar.jsx';


function App() {
  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/astros", text: "Astros" },
    { id: 3, href: "/apod", text: "APOD" },
  ];
  return (
    <>
      <Navbar links={links}/>
      <h1>Space-App</h1>
      <Astros />
    </>
  )
}

export default App;
