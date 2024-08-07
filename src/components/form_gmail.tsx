import React from "react";

type Props = {};

const Form_gmail = (props: Props) => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-white to-green-100 p-8 rounded-lg shadow-md mx-auto">
        <div className="ml-[200px]">
          <h2 className="text-3xl font-bold text-foreground mb-2 text-[#505F4E]">
            Etwas abonnieren
            <span className="text-primary text-[#000000]">*</span>
          </h2>
          <h3 className="text-3xl font-bold text-foreground mb-4 text-[#505F4E]">
            <span className="text-[#000000]">_</span>Unser Newsletter
          </h3>
          <p className="text-muted-foreground mb-6">
            Get weekly update about our product on your email, no spam
            guaranteed we promise ✌️
          </p>
          <form className="flex items-center space-x-2 w-full">
            <div className="flex items-center bg-white border border-border rounded-lg shadow-sm p-2">
              <img
                aria-hidden="true"
                alt="email-icon"
                src="https://openui.fly.dev/openui/24x24.svg?text=📧"
                className="mr-2"
              />
              <input
                type="email"
                placeholder="youremail123@gmail.com"
                className="bg-transparent focus:outline-none text-foreground"
              />
            </div>
            <button className=" mr-[350px] w-[150px] rounded bg-[#656C66] py-2">
              ABONNIEREN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form_gmail;
