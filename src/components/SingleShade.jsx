import React, { useState } from 'react';
import toast from 'react-hot-toast';


const SingleShade = ({rgb,hex}) => {
    const [text, setText] = useState('');
  return (
    <>
      <div
      onClick={()=>{
        setText(`#${hex}`);
        navigator.clipboard.writeText(text);
        toast.success('Copied to Clipboard.')
      }}
       style={{backgroundColor : `#${hex}`}} className={`shadow-lg cursor-pointer w-48 flex items-center justify-center rounded-md h-48`}>
        <h1>#{hex}</h1>
      </div>
    </>
  );
}

export default SingleShade;
