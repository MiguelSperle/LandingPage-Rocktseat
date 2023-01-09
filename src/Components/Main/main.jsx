

function Main(props) {
    return (
       <div className="container-main">
          <input onClick={() => props.setLogin(true)}  className='inputHeaderMobile' type="submit" value={'PEGAR MEU CAFÉ'} />  
          <p className="ola">O café que fará seu código decolar no próximo nivel.</p>
          <h1>{props.NameCoffe}</h1>
          <img className="img-titleSombra" src="img/_.png" alt="" />
          <img className="img-main" src="img/rocket-coffee.png" alt="" /> 
       </div>
    )
  }
export default Main