import React from "react";
import twitter from "../../assets/images/twitter.svg";
import insta from "../../assets/images/insta.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";
import copyright from "../../assets/images/copyright.svg";

const Footer = () => {
  return (
    <div className="bg-green pt-20 pb-10 px-10">
      <div className=" text-white grid grid-cols-2 grid-rows-2 gap-4">
        <div>
          <div className="font-semibold mb-3">My Account</div>
          <div>Log in</div>
          <div>Register</div>
          <div>Job Posts</div>
        </div>
        <div>
          <div className="font-semibold mb-3">Task Categories</div>
          <div>Categories</div>
          <div>Maids</div>
          <div>Task Workers</div>
        </div>
        <div>
          <div className="font-semibold mb-3">About</div>
          <div>How it works</div>
          <div>About us</div>
          <div>Contact us</div>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal Stuff</div>
          <div>Terms of use</div>
          <div>Privacy Policy</div>
          <div>Safety & Trust</div>
        </div>
      </div>
      <div className="flex flex-row mt-10 justify-center">
        <img className="pr-4" src={twitter} alt="twitter" />
        <img className="pr-4" src={facebook} alt="facebook" />
        <img className="pr-4" src={insta} alt="insta" />
        <img className="pr-4" src={linkedin} alt="linkedin" />
      </div>

      <div className="flex flex-row text-gray-dark mt-10">
        <img src={copyright} alt="copyright" />
        <p className="ml-2 text-[14px]">
          2022 Job Jumper Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
