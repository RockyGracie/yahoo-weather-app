import spinner from '../img/spinner.gif'

const Spinner = () => {
   return (
      <div className="spinner">
         <img src={spinner} alt="Loading Spinner" />
      </div>
   );
};

export default Spinner;