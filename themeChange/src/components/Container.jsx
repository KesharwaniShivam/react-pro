import React from 'react'
import { useState } from 'react';
import useTheme from '../context/ChangeThemeContext';
import { MdOutlineDarkMode } from "react-icons/md";

function Container() {
  const [btnClick, setBtnClick] = useState(false);
  const { lightMode, darkMode } = useTheme()

  // const handleInput = (e)=>{

  //    const modeStatus = e.currentTarget.checked

  //    if(modeStatus){
  //     darkMode();
  //    }else{
  //     lightMode();
  //    }
  //   }
  const handleBtn = () => {
    // (btnClick ? themeMode === "dark" : '')
    setBtnClick(!btnClick);
    (btnClick ? darkMode() : lightMode())
  }
  return (
    <>
      <div className='p-5 m-5 grid grid-cols-12 space-x-2' >
        {/* <div className='min-h-24 bg-zinc-800 col-span-4 dark:bg-slate-200'></div> */}
        <div className='min-h-[90vh] dark:bg-zinc-700 col-span-12 bg-slate-100 shadow-lg'>
          <div className='p-3 flex'>
            {/* <span className='text-lg' ><MdOutlineDarkMode/></span>  */}
            {/* <input 
        type="checkbox"
        value={""}
        onChange={handleInput}
        checked={themeMode==="dark"}
        /> */}



            <button className='border-[3px] p-1 border-black'
              
              onClick={handleBtn}
            >
            <span className='text-lg ' ><MdOutlineDarkMode /></span>
            </button>
          </div>
          <div className='h-[80%] flex justify-center items-center'>
            <h1 className='text-black dark:text-white  text-5xl text-center'>HELLO CLICK THE ABOVE BUTTON TO CHANGE THE THEME  </h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default Container