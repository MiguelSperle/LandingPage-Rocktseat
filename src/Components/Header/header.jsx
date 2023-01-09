
import { useState } from 'react';
import Modal from '../Modal/modal'



function Header({login, setLogin}) {
 return (
  <>
    {login && < Modal setLogin={setLogin}/>}
     <div id='container-header'>
        <img src="img/logo-desktop.svg" alt="" />
        <nav className='navbar-header'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Recompensas</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Lojas</a></li>
            </ul>
        </nav>
        <input onClick={ () => setLogin(!login)} className='inputHeader' type="submit" value={'PEGAR MEU CAFÉ'} /> 
        {/* Cliquei no inputHEADER e passei o estado dele pra diferente de false no caso (verdadeiro) */}
    
        {
        /* esse (setLogin) vou passar ele (COMO PROPS NO COMPONENTE MODAL!) */
        /* e esse parte faz com que eu abra tal coisa e apareça na tela */
        }
     </div>
   </> 
  )
}
export default Header