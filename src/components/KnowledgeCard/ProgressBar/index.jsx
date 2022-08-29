import { useContext } from "react";
import { ThemeContext } from "../../../utils/context";
import { ProgressBarStyled, ProgressBarWrapper } from "./ProgressBarElements";


function ProgressBar({ name, xp }) {
  const xpYears = 7;
  const progressBar = (xp / xpYears) * 100 + "%";
  const { theme } = useContext(ThemeContext)

  return (
    <ProgressBarWrapper>
      <li> {name} </li>
      <ProgressBarStyled style={{ width: progressBar }} isDarkMode = {theme==='dark'}/>
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
