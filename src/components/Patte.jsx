import React from 'react'
import Patta from './Patta'

function Patte() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Patta width={"basis-1/3"} start={false} para={true} />
        <Patta
          width={"basis-2/3"}
          start={true}
          para={false}
          hover="true"
        />
      </div>
    </div>
  );
}

export default Patte