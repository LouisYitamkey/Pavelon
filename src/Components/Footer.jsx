import styles from "../style";

import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im";


import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  md:px-36 bg-white flex-col`}>
    <div className={`${styles.flexStart} px-6 md:px-20 md:flex-row flex-col mb-8  w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
      <h1 className="font-bold md:pb-3 text-text-[#093554] text-3xl"> Logo</h1>

        

        <p className={`${styles.paragraph} text-slate-500 mt-4 max-w-[312px]`}>
        Introducing loan terms that offer easy, reliable, and secure payment options.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-[#093554]">
              {footerlink.title}
            </h4>
            <ul className="list-none text-slate-500 mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full md:px-16 flex justify-between items-center md:flex-row flex-col pt-6 md:border-t-[1px]  md:border-t-slate-400">
      <p className="font-poppins md:pl-3 font-normal text-center text-[10px] md:text-[14px] leading-[27px] text-slate-500">
        Copyright &#169;. 2023 Jipa. All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        <div className="bg-slate-200  hover:bg-slate-300 px-3 mx-2 py-3 rounded-md">  
        <ImFacebook color='#080357 ' className="" size={20}/> 

        </div>
        <div className="bg-slate-200 hover:bg-slate-300 px-3 py-3  mx-2 rounded-md">
        <ImTwitter color='#080357' size={20}/>

        </div>
        <div className="bg-slate-200 hover:bg-slate-300 px-3 py-3 mx-2 rounded-md">

        <ImWhatsapp color='#080357' size={20}/>

        </div>
   

      </div>
      
 
      
    </div>
  </section>
);

export default Footer;