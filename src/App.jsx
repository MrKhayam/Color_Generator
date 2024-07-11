import React from 'react';
import Input from './components/Input';
import Shades from './components/Shades';
import  { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <>
      <div className="w-full h-[100%] pt-14">
      <Input />
      <Toaster />
      </div>
    </>
  );
}

export default App;
