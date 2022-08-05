import { ProgressBarStyled, ProgressBarWrapper } from "./ProgressBarElements";


function ProgressBar({ name, xp }) {
  const xpYears = 6;
  const progressBar = (xp / xpYears) * 100 + "%";

  return (
    <ProgressBarWrapper>
      <li> {name} </li>
      <ProgressBarStyled style={{ width: progressBar }}> </ProgressBarStyled>
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
