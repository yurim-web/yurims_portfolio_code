import { useState } from "react";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoHappySharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "../../css/Contact.css";

const Contact = () => {
  return (
    <article className="contact_detail">
      <h1 className="contact_title">Contact.</h1>
      <h1 className="contact_title_text">I HOPE YOU ENJOY MY PROJECT</h1>
      <div className="contact_text_container">
        <div className="contanct_icon_text_box">
          <div className="contact_text_box">
            <FaPhoneAlt />
            <span>010-4054-5152</span>
          </div>
          <div className="contact_text_box">
            <MdEmail />
            <span>lyl5152@naver.com</span>
          </div>
          <div className="contact_icon_box">
            <a href="https://github.com/yurim-web" target="_blank">
              <FaGithub color="white"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaSquareInstagram color="white"/>
            </a>
          </div>
        </div>

        <img className="contact_kakao_img" src="sns.jpg" alt="" />
      </div>

      <div className="contact_thank_box">
        <h1>Thank you </h1>
        <IoHappySharp />
      </div>
    </article>
  );
};

export default Contact;
