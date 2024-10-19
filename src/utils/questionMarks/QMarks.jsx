


import React from 'react'
import { QMark, Stars_4 } from '../../assets/svgIcons'
import "./style.css"

const QMarks = ({color}) => {
  return (
    <div className='q_marks-container' style={{color:color || '#fff'}}>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='stars_mark stars_1'>
            {Stars_4}
        </div>
        <div className='stars_mark stars_2'>
            {Stars_4}
        </div>
        <div className='stars_mark stars_3'>
            {Stars_4}
        </div>
        {/* 
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div>
        <div className='q_mark'>
            {QMark}
        </div> */}
    </div>
  )
}

export default QMarks
