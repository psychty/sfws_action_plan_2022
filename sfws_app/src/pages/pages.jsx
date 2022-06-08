import React from 'react'
import Home from './home'
import Incomplete_actions from './incomplete_actions';
import Complete_actions from './complete_actions';
import HIC from './hic';
import {Route, Routes} from 'react-router-dom';


function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/incomplete_actions' element={<Incomplete_actions />} />
      <Route path='/complete_actions' element={<Complete_actions />} />
      <Route path='/hic/:hic_class' element={<HIC />} />
    </Routes>
  )
}

export default Pages