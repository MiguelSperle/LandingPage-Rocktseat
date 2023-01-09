import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import Header from './Components/Header/header'
import Main from './Components/Main/main'
import HeaderMobile from './Components/HeaderMobile/mobile'
import ScrollReveal from 'scrollreveal'
import './index.css'

function App() {

  const [login, setLogin] = useState(false) // passando um estado como false (esse estado é onde vai abrir o modal ai clicar no input HEADER)
 
  useEffect( () => {
    ScrollReveal().reveal('#container-header', {
      duration: 1000,
      delay: 400,
      easing: "ease-in-out",
      reset: false,
      origin: "top",
      distance: "70px",
  });

  ScrollReveal().reveal('.o', {
    duration: 1000,
    delay: 400,
    easing: "ease-in-out",
    reset: false,
    origin: "top",
    distance: "70px",
});

  


  ScrollReveal().reveal('.container-main', {
    duration: 1000,
    delay: 400,
    easing: "ease-in-out",
    reset: false,
    origin: "left",
    distance: "70px",
});
   },[])
  

  return (
   <>
     < Header login={login} setLogin={setLogin}/>
     < HeaderMobile />
     < Main NameCoffe = 'Great Coffee' setLogin={setLogin} />
   </>
  )
}

export default App
