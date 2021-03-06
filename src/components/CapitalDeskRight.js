const CapitalDeskRight = ({ city }) => {
   console.log(city)
   
   return (
      <>
      {city.main && (
      <div className="capitals__capital">
         <span>{Math.round(city.main.temp_min)}º</span>
         <span>{Math.round(city.main.temp_max)}º</span>
         <span>{city.name}</span>
      </div>
      )}
      </>
   );
};

export default CapitalDeskRight;