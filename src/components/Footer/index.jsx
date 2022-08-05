import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { FooterContainer } from "./FooterElements";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterContainer isDarkMode={theme === "dark"}>
      <span>copyright 2022 by agbarry</span>
    </FooterContainer>
  );
}

export default Footer;
