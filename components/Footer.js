import React from "react";

export default function Footer({theme}) {
  return (
    <footer className={`${theme === "light" ? "footer_bg_light" : "footer_bg"} mb-[60px] md:mb-4`}>
      <div className="">© {new Date().getFullYear()} Jahid Hasan</div>
    </footer>
  );
}
