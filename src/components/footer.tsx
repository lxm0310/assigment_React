import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
        <div className="footer-top h-[282px] bg-[#053D29] flex justify-between">
          <div className=" text-white mr-[80px] ml-[100px] mt-[60px]">
            <p className=" text-white mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className=" text-white mr-[10px] ml-[80px] mt-[60px]">
            <h3 className=" text-white mb-[10px]">Um</h3>
            <ul>
              <li>Kontaktiere uns</li>
              <li>uns</li>
              <li>Karriere</li>
              <li>Unternehmensinformationen</li>
            </ul>
          </div>
          <div className=" text-white  ml-[50px] mt-[60px]">
            <h3 className=" text-white mb-[10px]">Hilfe</h3>
            <ul>
              <li>Kontaktiere uns</li>
              <li>Über uns</li>
              <li>Karriere</li>
              <li>Unternehmensinformationen</li>
            </ul>
          </div>
          <div className=" text-white  ml-[70px] mt-[60px]">
            <h3 className=" text-white mb-[10px]">pOLITIK</h3>
            <ul>
              <li>Kontaktiere uns</li>
              <li>Über uns</li>
              <li>Karriere</li>
              <li>Unternehmensinformationen</li>
            </ul>
          </div>
        </div>
        <div className=" text-white h-[43.5px] bg-[#062F21] mt-[2px]"></div>
      </footer>
  )
}

export default Footer