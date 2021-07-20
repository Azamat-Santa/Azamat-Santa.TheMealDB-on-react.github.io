import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './componets/Home/Home'
import Datail from './componets/Datail/Datail';
import Ingridients from './componets/Ingridents/ingridients';






export default function App() {


  return (
    <>

    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cocktaiInfo/:id" exact component={Datail} />
        <Route path="/ingridient/:ingridients" exact component={Ingridients} />
      </Switch>

    </>
  )
      }