import React from 'react'

const Button = ({name, icon}) => {
  return (
    <div>
      <button className="bg-black text-white rounded p-2 flex items-center whitespace-nowrap min-w-60 w-full justify-center cursor-pointer hover:bg-sky-300 hover:text-black hover:border">{icon}{name}</button>
    </div>
  );
}

export default Button
