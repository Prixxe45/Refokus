import React from 'react'

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2 ">
          <h1 className="text-[11rem] font-medium leading-none tracking-tighter">
            Refokus.
          </h1>
        </div>
        <div className="basis1/2 flex gap-5">
          <div>
            <h4 className="mb-10 text-zinc-400">Socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4 className="mb-10 text-zinc-400">Nice TO Meet You</h4>
            {["WorkFlow", "Cokkies", "BYE BYE"].map((item, index) => (
              <a key={index} className="gap-5 flex mt-2 font-semibold capitalize text-zinc-600">
                {item}
              </a>
            ))}
          </div>
          <div>
            <p className="w-1/2 ml-24">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology
            </p>
            <img
              className="w-69 h-9 object-cover  ml-35 mt-10 "
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer