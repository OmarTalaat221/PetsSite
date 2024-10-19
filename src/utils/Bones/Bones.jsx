

import React from 'react'
import { BoneIcon } from '../../assets/svgIcons'
import "./style.css"

const Bones = ({color, extraClassName}) => {
  return (
    <div className={`bonesIcons ${extraClassName ? extraClassName : "" }`} style={{
      color:color || '#222'
      
    }}>
        <div className='boneIcon bone-1'>
            {BoneIcon}
        </div>
        
         <div className='boneIcon bone-2'>
            {BoneIcon}
        </div>
        <div className='boneIcon bone-3'>
            {BoneIcon}
        </div>
        
    </div> 
  )
}

export default Bones
