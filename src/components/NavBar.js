import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navigate = links.map((link) => (
  <a key={link} href={"#" + link}>
    {link}
  </a>
  ))

  return (
  <nav>
    {navigate}
  </nav>
  
  );
}

export default NavBar;
