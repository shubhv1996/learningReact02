import React from 'react'

const Topnav = ({toggle, isShown}) => {
  return (
    <div className="flex w-full   border-1 h-[20%] ">
      {isShown ? (
        ""
      ) : (
        <div
          className="border-1 h-5 flex items-center mt-0.5 bg-blue-500 text-white rounded cursor-pointer py-1 px-2 hover:bg-blue-700 transition-normal"
          onClick={toggle}
        >
          <p></p>
        </div>
      )}
      <div className="font-bold text-2xl p-4">TopNav</div>
    </div>
  );
}

export default Topnav
