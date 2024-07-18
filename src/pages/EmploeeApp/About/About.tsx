import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "./styles";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      Info about Company
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
      <ButtonControl>
        <Button name="Go to Home page" onClick={goToHomePage} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default About;
