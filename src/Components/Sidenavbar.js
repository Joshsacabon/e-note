import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import './../Css/SideNav.css'
import SideButtons from './SideButtons';
import { FaSearch } from 'react-icons/fa';
import model from '../Models/model';

function Sidenavbar({name,id}) {
  return (
    <>
         <nav className='sidenavbar'>
                <div className='SideTextsize  container-fluid'>
                    <div className='row mt-4 '>
                        <div className='col-2 px-2'>
                            <FaUserCircle className='FaIconSize ' />
                        </div>
                        <div className='col-10 Textdesign'>
                            {name} 
                        </div>
                    </div>
                </div>

                <div className='my-4'>
                    {model.map(item =>(
                        <SideButtons text={"Search"} path={`/menu/${item.name}`} icon={<FaSearch/>} />
                    ))}
                </div>

                <div className='SideTextsize '>
                Room
                </div>
                <div>
                <div class="roomsize mb-5 bg-dark">
                    {/* <Room/> */}
                </div>
                </div>
            <div class="sidefooter  row "> 
                <hr class="text-dark "/>

                <div className='my-1'>
                    <SideButtons text={"Join or Create"} path={"/menu/:id"} />
                </div>
                <div className='my-1'>
                    <SideButtons text={"Hello"} path={"/menu/signup"} />
                </div>
            </div>
        </nav>

    
    </>
  )
}

export default Sidenavbar