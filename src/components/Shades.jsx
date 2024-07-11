import React from 'react';
import SingleShade from './SingleShade';

const Shades = ({arr}) => {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-wrap gap-3 mx-auto items-center justify-center">
        {
            arr.map((item,index)=> <SingleShade key={index} hex={item.hex} {...item} />)
        }
      </div>
    </>
  );
}

export default Shades;
