import React, { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './componets/Home/Home'
import Datail from './componets/Datail/Datail';
import AbouteMeal from './componets/AbouteMeal/AbouteMeal';
import Header from './componets/Header/header';
import {getMealByNameApi} from './config/index'
import SearchOutput from './componets/SearchOutput/SearchOutput'
import Contact from './componets/Contact/Contact';





export default function App() {

  const [name, setName] = useState('')
  const [dataSearch, setDataSearch] = useState('')
  

  
 
  const getMealByName = async (event) => {
    event.preventDefault()
    let req = await fetch(getMealByNameApi + name)
    let resp = await req.json()
    console.log(resp);
    setDataSearch(resp.meals)
    setName('')
  }

 

  const SearchOutputFunc= function(props) {
    return (<SearchOutput {...props} data={dataSearch}  />);
};


  return (
    <>
      <Header
        name={name}
          changeName={setName}
          send={getMealByName}
       />
     
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categorieInfo/:categorieName" exact component={Datail} />
        <Route path="/abouteMeal/:abouteMeal" exact component={AbouteMeal} />
        <Route path="/searchOutput/"  render={SearchOutputFunc} />
        <Route path="/contact/"  render={Contact} />
      </Switch>
    </>
  )
}