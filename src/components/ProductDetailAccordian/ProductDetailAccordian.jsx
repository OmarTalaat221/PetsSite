import { useState } from 'react';
import './style.css';

export default function ProductDetailAccordian({getData}) {
  console.log(getData.faqs);
  
    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  
  

    return (
        <>
        {getData.faqs && getData.faqs.length >0 ?(
 
        getData?.faqs?.map((data , index) => <div className="product_accordion-item" key={index}  
 onClick={() => toggleAccordion(index)}>
     <div className="product_accordion-title" onClick={toggleAccordion}>
         <h3>{data.ques_es}</h3>
     </div>
     { (index == openIndex) && <div className="product_accordion-content" dangerouslySetInnerHTML={{__html:data?.ans_es}}></div>}
 </div>)

        ):(
          "no FAQs"
        )}
           
        </>
    );
}
