import React from 'react'
import Home from './home'
import Progress_summary from './progress_page';
import HIC from './hic_page';
import Action from './action_page';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/progress/:status' element={<Progress_summary />} />
      <Route path='/hic/:hic_class' element={<HIC />} />
      <Route path='/action/:ap_number' element={<Action />} />
    </Routes>
  )
}

export default Pages