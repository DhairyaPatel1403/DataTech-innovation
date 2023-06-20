import logo from './logo.svg';
import './App.css';
import { Link } from "react-scroll";
import logo_of_datatech_innovations from './logo_of_datatech_innovations.png';  
import { Welcome } from './Welcome';
import { Cards } from './Cards';
import { About } from './About';
import { Contact } from './Contact';
import './style.css';


function App() {

  const menuItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Services",
    },
    {
      id: 3,
      title: "Contact Us",
    },
    {
      id: 4,
      title: "About us",
    },
  ];


  return (
    <>
        <>
          <nav>
            <div className='logo'><img src={logo_of_datatech_innovations} alt="Logo" />DataTech Innovations</div>


            <div className='item-cont'>
              {menuItems.map((menu) => (
                <a>
                  <a
                    to={menu.title}
                    smooth={true}
                    offset={-430}
                    duration={500}
                  >
                    {menu.title}
                  </a>
                </a>
              ))}
            </div>
          </nav>
          <Welcome/>
          <div id="About us"><About/></div>
          <div id='Services'><Cards/></div>
          <div id="Contact Us"></div><Contact/>

        </>
    </>







  );
}

export default App;
