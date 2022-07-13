import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const bars = links.map((link) =>(
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return (
    <nav> {bars} </nav>
    )
}

export default NavBar;
