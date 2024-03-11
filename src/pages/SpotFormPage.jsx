import React from 'react'

import {useForm} from 'react-hook-form';
/*import {createTask, deleteTask} from '../api/tasks.api'*/
import {useNavigate, useParams} from 'react-router-dom'

export function SpotFormPage() {

  return (
    <>
        <div className='container mx-auto'>
            <form className='max-w-sm mx-auto p-5'>
                <div className='mb-5'>
                    <label htmlFor="text" className='block mb-2 text-white'>Nombre del Spot</label>
                    <input type="text" id="titleSpot" className='px-2 w-full rounded border border-gray-300' placeholder='Nombre del spot'/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="descriptionSpot" className='block mb-2 text-white'>Descripcion</label>
                    <textarea name="descriptionSpot" id="descriptionSpot" cols="30" rows="10" className='block p-2.5 w-full rounded border border-gray-300' placeholder='Ingresa una descripcion del spot, horarios, cosas a tener encuenta etc'></textarea>
                </div>


            </form>
        </div>
    
    </>
  )
}
