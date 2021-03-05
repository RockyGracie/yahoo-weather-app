const CityInfo = () => {
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
                  Niterói, RJ - Brasil
               </div>

               <div className="cityinfo__city--temp">
                  20ºC Nublado
               </div>

               <div className="cityinfo__city--grid">
                  <div className="cityinfo__city--grid grid-info min-max">
                     <div className="cityinfo__city--grid min-max__min">
                        <i className="fas fa-arrow-up icon" />
                        16º
                     </div>
                     <div className="cityinfo__city--grid min-max__min">
                        <i className="fas fa-arrow-down icon" />
                        25º
                     </div>
                  </div>
                  <div className="cityinfo__city--grid grid-info sense">
                     <span>Sensação</span> 19º
                  </div>
                  <div className="cityinfo__city--grid grid-info wind">
                     <span>Vento</span> 18km/h
                  </div>
                  <div className="cityinfo__city--grid grid-info humidity">
                     <span>Umidade</span> 89%
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
            </div>
         </div>
      </div>
   );
};

export default CityInfo;