import React, {useState} from "react";
const Navbar = () => {
    
  const [display , setDisplay] = useState('false') ; 
  const handleClick = ()=>{
      setDisplay(!display)
  }
  return (
    <div className="absolute w-full top-0">
      <div className="absolute w-full top-5">
        {" "}
        <img className="mx-auto" src="/imgs/nav.png" width="30%"></img>{" "}
      </div>
      <div className="absolute top-12 right-12 grid grid-cols-2">
        {" "}
        <div>
        <div className="grid grid-cols-2 cursor-pointer">
        <div className="mx-2 text-white">العربية</div>
          <img src="/imgs/dz.png" width="30px"></img>
        </div>
        <div className={`grid grid-cols-2 ${display?'hidden':'block'} cursor-pointer`}>
        <div className="mx-2 text-white">Eng</div>
          <img src="/imgs/usa.png" width="30px"></img>
        </div>
        </div>
        <div>
            <img src={`${display?'/imgs/down.png':'imgs/up.png'}`} width="30px" className="cursor-pointer" onClick={handleClick}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
