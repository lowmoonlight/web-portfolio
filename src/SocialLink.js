import React from "react";

const SocialLink = () => {
  const links = [
    {
      key: "1",
      platform: "email",
      url: "mailto:kimberlyanneblott@gmail.com",
    },
    {
      key: "2",
      platform: "LinkedIn",
      url: "http://www.linkedin.com/in/kimberly-blott-199478121",
    },
    { key: "3", platform: "GitHub", url: "https://github.com/lowmoonlight/" },
  ];

  return (
    <div className="links">
      {links.map((link) => (
        <div key={link.key} className="link-box">
          <a href={link.url}>{link.platform}</a>
        </div>
      ))}
    </div>
  );
};

export default SocialLink;
