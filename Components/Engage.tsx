import React, { useState } from "react";
import { motion } from "framer-motion";

function Engage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    address: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    let data = formData;
    console.log(data);

    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
        setFormData({
          name: "",
          companyName: "",
          address: "",
          email: "",
          message: "",
        });
        setSubmitted(true);
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-5 mt-[220px] mb-[125px] " id="engage">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <div className="flex">
          <h2 className=" font-TTFb text-[#0864B7] text-[27px] mb-[54px] ">
            Engage us today!
          </h2>
        </div>

        <form className="space-y-10" onSubmit={handleSubmit}>
          {!submitted ? (
            <>
              <div className=" sm:flex sm:space-y-0 md:flex md:space-y-0 lg:flex lg:space-y-0 sm:space-x-[81px] space-y-10">
                {/* first flex */}
                <div className=" w-full .. space-y-10">
                  <label className="block mb-5">
                    <input
                      className=" border-b-2 border-black placeholder:font-TTF placeholder:text-[20px] py-2  form-input w-full ring-[#0864B7] outline-none focus:ring text-[20px] font-TTF px-2"
                      placeholder="Name"
                      name="name"
                      type="name"
                      required
                      onChange={handleFieldChange}
                      value={formData.name}
                    />
                  </label>

                  <label className="block mb-5">
                    <input
                      className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px] text-[20px] font-TTF px-2"
                      placeholder="E-Mail"
                      name="email"
                      type="email"
                      id="email"
                      onChange={handleFieldChange}
                      required
                      value={formData.email}
                    />
                  </label>
                </div>

                {/* Second flex */}
                <div className="w-full . space-y-10">
                  <label className="block mb-5">
                    <input
                      className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px]  text-[20px] font-TTF px-2"
                      placeholder="Company Name"
                      onChange={handleFieldChange}
                      required
                      value={formData.companyName}
                      type="text"
                    />
                  </label>

                  <label className="block mb-5">
                    <input
                      className=" border-b-2 border-black py-2 text-[20px] font-TTF px-2 form-input w-full ring-[#0864B7] outline-none focus:ring placeholder:font-TTF placeholder:text-[20px] "
                      placeholder="Address"
                      onChange={handleFieldChange}
                      required
                      value={formData.address}
                      type="address"
                    />
                  </label>
                </div>
              </div>
              <label className="block mb-5">
                <input
                  className=" border-b-2 border-black py-2  form-input w-full ring-[#0864B7] outline-none focus:ring text-[20px] font-TTF px-2 placeholder:font-TTF placeholder:text-[20px] "
                  placeholder="Purpose"
                  type="text"
                  onChange={handleFieldChange}
                  required
                  value={formData.message}
                />
              </label>
              <div className="flex sm:justify-center md:justify-center lg:justify-center mt-10">
                <button className="bg-[#0864B7] hover:text-dark-blue hover:text-[14px] border-[1.6px] hover:bg-white hover:border-dark-blue text-[14px] sm:text-[16x] md:text-[16px] lg:text-[16px] mt-[41px] text-white overflow-hidden py-5 px-5 font-TTF">
                  ENGAGE US
                </button>
              </div>
            </>
          ) : (
            <div className="m-auto alignitems-center font-medium mt-6 text-xl">
              Your Message has been successfully send. we will contact you very
              soon
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
}

export default Engage;
