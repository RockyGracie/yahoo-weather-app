const CityInfo = ({ data }) => {

   const { main, name, sys, weather, wind } = data;

   return (
      <div className="cityinfo">
         <h3 className="cityinfo__title pdd-left">
            Previsão do tempo
         </h3>
         <div className="cityinfo__container">
            <div className="cityinfo__city">
               <button className="cityinfo__city--close">
                  <i className="fas fa-times icon" />
               </button>

               <div className="cityinfo__city--name">
                  {name}, {sys.country}
               </div>

               <div className="cityinfo__city--temp">
                  {Math.round(main.temp)}ºC {weather[0].description}
               </div>

               <div className="cityinfo__city--grid">
                  <div className="cityinfo__city--grid grid-info min-max">
                     <div className="cityinfo__city--grid min-max__min">
                        <i className="fas fa-arrow-up icon" />
                        {Math.round(main.temp_min)}º
                     </div>
                     <div className="cityinfo__city--grid min-max__min">
                        <i className="fas fa-arrow-down icon" />
                        {Math.round(main.temp_max)}º
                     </div>
                  </div>
                  <div className="cityinfo__city--grid grid-info sense">
                     <span>Sensação</span> {Math.round(main.feels_like)}º
                  </div>
                  <div className="cityinfo__city--grid grid-info wind">
                     <span>Vento</span> {Math.round(wind.speed)}km/h
                  </div>
                  <div className="cityinfo__city--grid grid-info humidity">
                     <span>Umidade</span> {Math.round(main.humidity)}%
                  </div>
               </div>
            </div>
            <div className="cityinfo__next">
               <div className="cityinfo__next--day">
                  <div className="cityinfo__day">Terça</div>
                  <div className="cityinfo__temp">
                     <span className="cityinfo__temp--min">18º</span>
                     <span className="cityinfo__temp--max">26º</span>
                  </div>
               </div>
               <div className="cityinfo__next--day">
                  <div className="cityinfo__day">Quarta</div>
                  <div className="cityinfo__temp">
                     <span className="cityinfo__temp--min">18º</span>
                     <span className="cityinfo__temp--max">28º</span>
                  </div>
               </div>
               <div className="cityinfo__next--day">
                  <div className="cityinfo__day">Quinta</div>
                  <div className="cityinfo__temp">
                     <span className="cityinfo__temp--min">19º</span>
                     <span className="cityinfo__temp--max">30º</span>
                  </div>
               </div>
               <div className="cityinfo__next--day">
                  <div className="cityinfo__day">Sexta</div>
                  <div className="cityinfo__temp">
                     <span className="cityinfo__temp--min">23º</span>
                     <span className="cityinfo__temp--max">35º</span>
                  </div>
               </div>
               <div className="cityinfo__next--day hide-for-mobile">
                  <div className="cityinfo__day">Sábado</div>
                  <div className="cityinfo__temp">
                     <span className="cityinfo__temp--min">23º</span>
                     <span className="cityinfo__temp--max">35º</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CityInfo;