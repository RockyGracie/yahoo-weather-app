const CapitalsTemp = () => {
   return (
      <div className="capitals pdd-left"> 
            <h2 className="capitals__title">Capitais</h2>
         <div className="capitals__grid">
            <div className="capitals__items">
               <div className="capitals__temp">
                  <span>Min</span>
                  <span>Máx</span>
                  <span></span>
               </div>
               <div className="capitals__capital">
                  <span>18º</span>
                  <span>27º</span>
                  <span>Rio de Janeiro</span>
               </div>
               <div className="capitals__capital">
                  <span>18º</span>
                  <span>27º</span>
                  <span>São Paulo</span>
               </div>

               <div className="capitals__capital">
                  <span>24º</span>
                  <span>35º</span>
                  <span>Belo Horizonte</span>
               </div>
               <div className="capitals__capital">
                  <span>22º</span>
                  <span>21º</span>
                  <span>Brasília</span>
               </div>
               <div className="capitals__capital">
                  <span>19º</span>
                  <span>25º</span>
                  <span>Belém</span>
               </div>
            </div>


            <div className="capitals__items">
               <div className="capitals__temp hide-for-mobile">
                  <span>Min</span>
                  <span>Máx</span>
                  <span></span>
               </div>
               <div className="capitals__capital">
                  <span>18º</span>
                  <span>27º</span>
                  <span>Salvador</span>
               </div>

               <div className="capitals__capital">
                  <span>18º</span>
                  <span>27º</span>
                  <span>Curitiba</span>
               </div>

               <div className="capitals__capital">
                  <span>18º</span>
                  <span>30º</span>
                  <span>Fortaleza</span>
               </div>

               <div className="capitals__capital">
                  <span>18º</span>
                  <span>27º</span>
                  <span>Manaus</span>
               </div>

               <div className="capitals__capital">
                  <span>18º</span>
                  <span>27º</span>
                  <span>João Pessoa</span>
               </div>
            </div>

         </div>
      </div>
   );
};

export default CapitalsTemp;