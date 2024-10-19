import React, {useEffect, useRef, useState} from "react";
import "./style.css";
import { arrow_down_eva } from "../../assets/svgIcons";

const CustomSelect = ({inRow, label, data , onChange, required, ...props}) => {
  console.log(data);
  const select_ref = useRef(null);

  const [openList, setOpenList] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleFocus = () => {
    console.log("focus");
    setOpenList(true);
    document.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.id == "select_input") {
        setOpenList(true);
      }
    });
  };
  const handleClickOutside = (event) => {
    if (select_ref.current && !select_ref.current.contains(event.target)) {
      setOpenList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(()=>{
    
  //   document.addEventListener("click", (e) => {
  //     console.log(e.target);
  //     if (e.target.id == "item_list") {
  //       setTimeout(() => {
  //         setOpenList(false);
  //       }, 200);
  //     } else {
  //       setOpenList(false);
  //     }
  //   });

    

  // },[])



  return (
    <div className={`custom_select ${inRow ? "inRow" : ""}`} ref={select_ref}>
      {label && (
        <label>
          {label || ""}
          {required && <span>(*)</span>}
        </label>
      )}

      <div className='select_input_container'>
        <input
          id='select_input'
          value={selectedValue}
          // onFocus={handleFocus}
          onClick={()=>setOpenList(!openList)}
          style={{
            cursor:'pointer'
          }}
          
          readOnly
          {...props}
        />
        <div className={`select_icon ${openList? "active" : ""}`}>{arrow_down_eva}</div>
        {openList && (
          <div className='custom_select_list'>
            {data && data.length >= 1 && Array.isArray(data) ? (
              data?.map((item, index) => {
                return (
                  <div
                  key={item?.id}
                    onClick={() => {
                      setSelectedValue( item?.title_es);
                      onChange(item?.id)
                      setOpenList(false)
                    }}
                    id='item_list'
                    className={`custom_select_item ${
                      item.label == selectedValue ? "active" : ""
                    }`}
                  >
                    {item?.title_es}
                  </div>
                );
              })
            ) : (
              <div className=''>No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
