import React, { useState } from 'react';
import './Accordian.css';

const Accordion = ({ faqsData }) => {
  console.log(faqsData)
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderedItems = faqsData.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={item?.id} className={`accordion-item ${active}`}>
        <div
          className={`title`}
          onClick={() => onTitleClick(index)}
        >
          <i className={`acc_icon ${active ? 'close' : 'plus'}`}></i>
          <p className='text-[#121212]'>{item.title_es}</p>
        </div>
        <div className={`content`}>
          <p>{item.answer_es}</p>
        </div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
