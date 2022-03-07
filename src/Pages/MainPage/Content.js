import React from 'react';
import TextArea from '../../Components/TextArea';
import Uploader from '../../Components/Uploader';
import './../../App.css';


export default function MenuCreate() {
  return (
  <div className='dashboard yoverflow '> 
    <div className='maincontent container'> 
      <div className="row ">
          <div>
          <TextArea css={'heading'} placeholder={'Your Title'} lineheight={'54'}/>
          </div>
          <div class="pt-2">
          <TextArea css={'description'} placeholder={'Enter Decription'} lineheight={'24'}/>
          </div>
          <div class="pt-4">
            <Uploader />
          </div>  
          
      </div>
    </div>

  </div>
    )
}
