import React from 'react'
import Home from './home'
import Incomplete_actions from './incomplete_actions';
import Complete_actions from './complete_actions';
import HIC from './hic_page';
import Action from './action';
import {Route, Routes} from 'react-router-dom';


function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/incomplete_actions' element={<Incomplete_actions />} />
      <Route path='/complete_actions' element={<Complete_actions />} />
      <Route path='/hic/:hic_class' element={<HIC />} />
      <Route path='/action/:ap_number' element={<Action />} />
    </Routes>
  )
}

export default Pages