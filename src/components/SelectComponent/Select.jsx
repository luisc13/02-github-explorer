import React from "react";
import Select from "react-select";
import { languageOptions } from "./data";

/* Componente React-select fiz em um componente separado para melhor organização de código, 
esse componente é renderizado na página inicial para selecionar e filtrar as linguagens para efetuar a busca.*/

export default function Selector({...rest}){
  return(
  <Select
    name="language"
    options={languageOptions}
    {...rest}
  />
  )
};
