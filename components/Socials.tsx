import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

type Props = {
  containerStyles?: string;
  iconStyles?: string;
};
const Socials = ({ containerStyles, iconStyles }: Props) => {
  const socials = [
    {
      icon: <FaGithub />,
      link: "",
    },
    {
      icon: <FaLinkedin />,
      link: "",
    },
    {
      icon: <FaInstagram />,
      link: "",
    },
    {
      icon: <FaFacebook />,
      link: "",
    },
  ];
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.link} key={index} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
