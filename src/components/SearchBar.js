const SearchBar = () => {
   return (
      <form className="form">
         <input 
            type="text" 
            placeholder="Insira aqui o nome da cidade"
            className="form__input"   
         />
      </form>
   );
};

export default SearchBar;