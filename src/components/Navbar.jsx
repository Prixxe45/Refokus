import React from 'react'
import Button from './Button';

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex justify-between  items-center border-b-1 border-zinc-700  ">
      <div className="nleft flex items-center">
        <img
          className="w-30 h-9 object-cover rounded-full"
          src="https://i.pinimg.com/736x/14/b9/0b/14b90bb343e8fe8b928dece37985a832.jpg"
          alt=""
        />
        <div className="links flex gap-15 ml-32">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[1px] h-7 bg-zinc-600"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    key={index}
                    style={{ coxShadow: "0 0 0.25em #00ff19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
      