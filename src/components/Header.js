const Header = () => {
   return (
      <div className="header">
         <h1 className="pdd-left title">Previsão do tempo</h1>
         <form className="form">
            <input 
               type="text" 
               placeholder="Insira aqui o nome da cidade"
               className="form__input"   
            />
         </form>
      </div>
   );
};

export default Header;