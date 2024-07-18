import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { ClientTemplateProps } from "./types";
import { PageWrapper, Description, ButtonControl } from "./styles";

function ClientTemplate({children}:ClientTemplateProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <PageWrapper>
      <Description>
        {children}
      </Description>
      <ButtonControl>
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>
    </PageWrapper>
  );
}
export default ClientTemplate;
