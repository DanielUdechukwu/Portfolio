import React, { useState, useEffect } from "react";
const Footer = () => {
  let currentYear = new Date().getFullYear();
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(currentYear);
  }, []);

  return (
    <>
      <footer>
        <h4 class="copyright">
          @<span id="year">{year}</span>, Daniel Udechukwu.
        </h4>
      </footer>
    </>
  );
};

export default Footer;
