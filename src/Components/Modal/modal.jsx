

function Modal({setLogin}) { // passando um componente com props (esse componente vem do HEADER)
    return (
      <div className="center-modal">
          <div className="container-modal">
          <span onClick={() => setLogin(false)} className="Close">X</span> {/* se eu clicar no X, o estado do modal vai para FALSE assim fehcando ele */}
          <p className="msg-ganhou">Ei vocé ganhou uma PROMOÇÃO DE 25% OFF</p>
          <p className="msg-codigo">pegue seu código! <span className="codigo-promo"> <u>FWTZ2F15</u> </span></p>
        </div>
      </div> 
    )
  }
export default Modal 