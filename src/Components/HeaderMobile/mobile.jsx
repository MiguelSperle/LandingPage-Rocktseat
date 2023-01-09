import { useState } from "react"

function HeaderMobile() { // passando um componente com props (esse componente vem do HEADER)
 
const [open, setOpen] = useState(false)

    return (
      <>
        <MenuMobile setOpen={setOpen} open={open}/>
           <div className="container-menu-mobile">
             <img src="img/logo-mobile.svg" alt="" />
             <img  onClick={() => setOpen(!open)}  src={open ? '/img/menu-buguer-close.svg' : '/img/menu-buguer-open.svg'} alt="" />
          </div>
      </>
   
     
       
      
    )
  }

function MenuMobile({open, setOpen}) { 
   return (
     <>
        <div  className={open  ? 'menu-mobile' : 'menu-mobile off'}>
           <nav>
             <ul className='lista-menu-mobile'>
               <li>
                 <a onClick={() => setOpen(false)}  href="#">Home</a> {/*quando eu clicar no menu o setOpen que era positivo passa a ser negativo assim fechando o container*/ }
                
               </li>
               <li>
                 <a onClick={() => setOpen(false)}   href="#">Menu</a> {/*quando eu clicar no menu o setOpen que era positivo passa a ser negativo assim fechando o container*/ }
                  
               </li>
               <li>
                 <a onClick={() => setOpen(false)}   href="#">Recompensas</a> {/*quando eu clicar no menu o setOpen que era positivo passa a ser negativo assim fechando o container*/ }
               </li>
               <li>
                 <a  onClick={() => setOpen(false)}   href="#">Gift Cards</a> {/*quando eu clicar no menu o setOpen que era positivo passa a ser negativo assim fechando o container*/ }
               </li>
             </ul>
           </nav>
         </div>
     </>
   )
 }
export default HeaderMobile