const Header = ({ city, setCity, submitHandler }) => {

   return (
      <form className="form" onSubmit={submitHandler}>
         <input 
            type="text" 
            placeholder="Insira aqui o nome da cidade"
            className="form__input"   
            value={city}
            onChange={(e) => setCity(e.target.value)}
         />
      </form>
);
};

export default Header;