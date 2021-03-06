import { useState, useEffect } from 'react';

const useSingleCity = () => {

   const key = '5f33c56080c167aafe91d31c4fafb7bf';

   const [rio, setRio] = useState([]);
   const [saoPaulo, setSaoPaulo] = useState([]);
   const [beloHorizonte, setBeloHorizonte] = useState([]);
   const [brasilia, setBrasilia] = useState([]);
   const [belem, setBelem] = useState([]);
   const [salvador, setSalvador] = useState([]);
   const [curitiba, setCuritiba] = useState([]);
   const [fortaleza, setFortaleza] = useState([]);
   const [manaus, setManaus] = useState([]);
   const [joaoPessoa, setJoaoPessoa] = useState([]);
 
   useEffect(() => {
      const awaitFetchData = async () => {
         setRio(await fetchData('rio de janeiro'));
         setSaoPaulo(await fetchData('sao paulo'));
         setBeloHorizonte(await fetchData('belo horizonte'));
         setBrasilia(await fetchData('brasilia'));
         setBelem(await fetchData('belem'));
         setSalvador(await fetchData('salvador'));
         setCuritiba(await fetchData('curitiba'));
         setFortaleza(await fetchData('fortaleza'));
         setManaus(await fetchData('manaus'));
         setJoaoPessoa(await fetchData('joao pessoa'));
      }

      awaitFetchData()
   }, [])

   

   const fetchData = async (city) => {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
      const data = await res.json();

      return data;
   }
   
   return { key, rio, saoPaulo, beloHorizonte, brasilia, belem, salvador, curitiba, fortaleza, manaus, joaoPessoa };
};

export default useSingleCity;



      // setSaoPaulo(fetchSingleData('sao paulo'));
      // setBeloHorizonte(fetchSingleData('belo horizonte'));
      // setBrasilia(fetchSingleData('brasilia'));
      // setBelem(fetchSingleData('belem'));
      // setSalvador(fetchSingleData('salvador'));
      // setCuritiba(fetchSingleData('curitiba'));
      // setFortaleza(fetchSingleData('fortaleza'));
      // setManaus(fetchSingleData('manaus'));
      // setJoaoPessoa(fetchSingleData('joao pessoa'));