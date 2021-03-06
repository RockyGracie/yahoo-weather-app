import { useState } from 'react';

import useSingleCity from './useSingleCity';
import CapitalMobile from './CapitalMobile';
import CapitalDeskLeft from './CapitalDeskLeft';
import CapitalDeskRight from './CapitalDeskRight';
import Spinner from './Spinner';

const CapitalsTemp = () => {

   const [isLoading, setIsLoading] = useState(true);

   setTimeout(() => {
      setIsLoading(false);
   }, 5000);

   const {  
         rio, saoPaulo, beloHorizonte, brasilia, belem, 
         salvador, curitiba, fortaleza, manaus, joaoPessoa 
         } = useSingleCity();

   const arrMobile = [
               rio, saoPaulo, beloHorizonte, brasilia, belem, 
               salvador, curitiba, fortaleza, manaus, joaoPessoa
               ]

   const arrDesktopLeft = [ rio, saoPaulo, beloHorizonte, brasilia, belem ];

   const arrDesktopRight = [ salvador, curitiba, fortaleza, manaus, joaoPessoa ];

   return (
      <div className="capitals pdd-left"> 
            <h2 className="capitals__title">Capitais</h2>
         {isLoading ? (
            <Spinner />
            ) : (
            <>
            <div className="capitals__grid" id="hide-for-desktop">
               <div className="capitals__items">
                  <div className="capitals__temp">
                     <span>Min</span>
                     <span>Máx</span>
                     <span></span>
                  </div>
                  {arrMobile && arrMobile.map(city => (
                     <CapitalMobile key={city.id} city={city} />
                  ))}
               </div>
            </div>
            
            <div className="capitals__grid" id="hide-for-mobile">
               <div className="capitals__items">
                  <div className="capitals__temp">
                     <span>Min</span>
                     <span>Máx</span>
                     <span></span>
                  </div>
                  {arrDesktopLeft && arrDesktopLeft.map(city => (
                     <CapitalDeskLeft key={city.id} city={city} />
                  ))}
               </div>
               <div className="capitals__items">
                  <div className="capitals__temp">
                     <span>Min</span>
                     <span>Máx</span>
                     <span></span>
                  </div>
                  {arrDesktopRight && arrDesktopRight.map(city => (
                     <CapitalDeskRight key={city.id} city={city} />
                  ))}
               </div>
            </div>
            </>
         )}
      </div>
   );
};

export default CapitalsTemp;


               