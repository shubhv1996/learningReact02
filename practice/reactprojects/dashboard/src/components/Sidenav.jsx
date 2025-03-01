

const Sidenav = ({toggle, isShown}) => {


  return (
    <div className="w-[25%] p-4 shadow-2xl h-screen hidden md:block">
      <div className="flex justify-between">
        <h1 className="">SideNav</h1>
        {isShown ? (
          <div
            className="border-1 h-5 flex items-center   mt-0.5 bg-blue-500 text-white rounded cursor-pointer py-1 px-2 hover:bg-blue-700 transition-normal"
            onClick={toggle}
          >
            <p></p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Sidenav
