

import React from 'react'
import "./style.css"
import Typo from '../../../utils/Typo/Typo'
import b_letter_image from "../../../assets/images/BLetter.png"
import Checkbox2 from './../../checkbox2/checkbox2';
const CreditCard = ({getData,setGetData}) => {
  console.log(getData);
  
  return (
    <div className='credit_card_container'>
          <div className='credit_card_header'>
              <Typo variant={"h6"}>Credit card</Typo>
              <img width={"50"} src={b_letter_image} alt="" />
          </div>
          <div className="credit_card_content">

          <div className='credit_card_inputs'>
            <div className='credit_card_input input_1'>
              <input type="number" placeholder='Card number'
              onChange={(e)=>{
                setGetData(
                  {
                    ...getData,
                    credit_card:e.target.value
                  }
                )
              }}
              />
            </div>
            <div className='credit_card_input input_2'>
              <input type="text" placeholder='Epiration date (MM / YY)'
               onChange={(e)=>{
                setGetData(
                  {
                    ...getData,
                    expire_date:e.target.value
                  }
                )
              }}
              />
            </div>
            <div className='credit_card_input input_3'>
              <input type="number" placeholder='Security code '
              onChange={(e)=>{
                setGetData(
                  {
                    ...getData,
                    security_code:e.target.value
                  }
                )
              }}
              />
            </div>
            <div className='credit_card_input input_4'>
              <input type="text" placeholder='Name on card'
                 onChange={(e)=>{
                  setGetData(
                    {
                      ...getData,
                      name_on_card:e.target.value
                    }
                  )
                }}
              />
            </div>
          </div>

          <div className="d-flex align-items-center my-3 gap-3" >
            <Checkbox2 id="address" checked={true} />
             <Typo variant={"sm"}>
                Use shipping address as billing address
             </Typo>
          </div>


          </div>
    
    </div>
  )
}

export default CreditCard
