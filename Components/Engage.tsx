import React, { useState } from "react";

function Engage() {
  const [engagee, setEngagee] = useState({
    name: "",
    companyName: "",
    email: "",
    address: "",
    purpose: "",
  });

  const handleFieldChange = (e) => {
    setEngagee({
      ...engagee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(engagee);

    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(engagee),
    });
  };
  return (
    <div className="max-w-7xl mx-auto p-5 mt-[220px] mb-[125px] ">
      <div className="flex">
        <h2 className=" font-TTFb text-[#0864B7] text-[27px] mb-[54px] ">
          Engage us today!
        </h2>
      </div>

      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className=" sm:flex sm:space-y-0 md:flex md:space-y-0 lg:flex lg:space-y-0 sm:space-x-[81px] space-y-10">
          {/* first flex */}
          <div className=" w-full .. space-y-10">
            <label className="block mb-5">
              <input
                className=" border-b-2 border-black placeholder:font-TTF placeholder:text-[20px] py-2  form-input w-full ring-[#0864B7] outline-none focus:ring text-[20px] font-TTF px-2"
                placeholder="Name"
                type="text"
                name="name"
                onChange={handleFieldChange}
                value={engagee.name}
              />
            </label>

            <label className="block mb-5">
              <input
                className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px] text-[20px] font-TTF px-2"
                placeholder="E-Mail"
                type="text"
                name="email"
                onChange={handleFieldChange}
                value={engagee.email}
              />
            </label>
          </div>

          {/* Second flex */}
          <div className="w-full . space-y-10">
            <label className="block mb-5">
              <input
                className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px]  text-[20px] font-TTF px-2"
                placeholder="Company Name"
                type="text"
                name="companyName"
                onChange={handleFieldChange}
                value={engagee.companyName}
              />
            </label>

            <label className="block mb-5">
              <input
                className=" border-b-2 border-black py-2 text-[20px] font-TTF px-2 form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px] "
                placeholder="Address"
                type="text"
                name="address"
                onChange={handleFieldChange}
                value={engagee.address}
              />
            </label>
          </div>
        </div>
        <label className="block mb-5">
          <input
            className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring text-[20px] font-TTF px-2 placeholder:font-TTF placeholder:text-[20px] "
            placeholder="Purpose"
            type="text"
            name="purpose"
            onChange={handleFieldChange}
          />
        </label>
        <div className="flex sm:justify-center md:justify-center lg:justify-center mt-10">
          <button className=" bg-[#0864B7] mt-[41px] text-white overflow-hidden py-5 px-5 font-TTF">
            ENGAGE US
          </button>
        </div>
      </form>
    </div>
  );
}

export default Engage;
