import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import { FooterContainer } from "./FooterElements";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterContainer isDarkMode={theme === "dark"}>
      <span> © 2022 by agbarry</span>

      <p>
        <q>Toujours voir mieux</q>
      </p>
    </FooterContainer>
  );
}

export default Footer;
