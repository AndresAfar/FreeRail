import React from 'react'
import axios from 'axios'

import data from './spots.json';
import { SpotsList } from './SpotsList';

const SpotCard = (props) => {

  return (
    <div className='spots__section flex mt-6'>
        {props.children}
    </div>
  )
}
export {SpotCard}

