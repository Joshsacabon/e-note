import React from 'react';
import './../../App.css';
import './../../Css/Content.css'
import Sidenavbar from '../../Components/Sidenavbar';
import Sample from '../../Components/Sample';
import { useParams } from 'react-router-dom';
import MenuCreate from './Content';



export default function Menu() {

    const { id } = useParams()

  return (
  <div className='menu'>
     <Sidenavbar name={"Joshua Sacabon"}/>
    
        <div>
            {/* <Sample id={id}/> */}
            <MenuCreate/>
        </div>
   
    </div>
  )
}
