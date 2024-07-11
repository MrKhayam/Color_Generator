import React, { useState } from 'react';
import Values from 'values.js';
import Shades from './Shades';
import toast from 'react-hot-toast';

const Input = () => {
    const [color, setColor] = useState('')
    const [isEmpty, setIsEmpty] = useState(false);
    const [clrArr, setClrArr] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        if(!color){
          setIsEmpty(true);
          toast.error('Enter name of Color. . .')
        }else{
          setIsEmpty(false);
          try {
            const clr = new Values(color).all(10);
            setClrArr(clr);
          } catch (error) {
            setIsEmpty(true)
            toast.error('Enter a valid color. . .')
          }
        }
        setColor('')
    }



  return (
    <>
      <div className="w-[50%] gap-20 flex flex-col items-center h-[100%] p-5 mx-auto">
         <form

          className='w-[100%] flex items-center justify-center gap-4 h-auto'>
            
            <input
            value={color}
            onChange={(e)=>setColor(e.target.value)}
             type="text" className={`drop-shadow ${isEmpty ? 'ring-red-600 ring-2 ring-offset-4 ring-offset-white' : 'ring-0'} w-[500px] h-12 rounded-full shadow p-5 outline-none focus:ring focus:ring-offset-4 font-semibold ring-offset-white transition-all duration-200 ring-purple-800`} />
            
            <button
             onClick={handleClick}
             className='bg-purple-800 transition-all duration-200 hover:scale-[1.03] text-white shadow-lg font-semibold px-8 py-3 rounded-full'>Generate</button>
            </form>  
                <Shades arr={clrArr} />
      </div>
    </>
  );
}

export default Input;
