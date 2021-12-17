import React from "react";

const Home = () => {
  return (
      <div className="homeContainer">
        <div className="relative h-screen pt-60 Container">
          <div className="w-9/12 mx-auto grid grid-cols-3 my-auto">
            <div className="userType w-7/12 mx-auto py-8">
              <img src="/imgs/praying.png" width="30%" className="mx-auto"></img>
              <div className="text-center text-white mt-5 cursor-pointer" >Prayer</div>
            </div>
            <div className="userType w-7/12 mx-auto py-8">
              <img src="/imgs/visitor.png" width="30%" className="mx-auto"></img>
              <div className="text-center text-white mt-5 cursor-pointer" >Visitor</div>
            </div>
            <div className="userType w-7/12 mx-auto py-8">
              <img src="/imgs/reading-book.png" width="30%" className="mx-auto"></img>
              <div className="text-center text-white mt-5 cursor-pointer" >Student/Researcher</div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full" >
            <img className="mx-auto" src='/imgs/logo.png' width="30%"></img>
          </div>
        </div>
      </div>
   
  );
};

export default Home;
