import Button from "components/Button/Button";

import { FeedbackProps } from "./types";
import {
  FeedbackWrapper,
  FeedbackControlContainer,
  StyledButtonWIthCount,
  CountView,
} from "./styles";

function Feedback({
  like,
  onLike,
  dislike,
  onDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControlContainer>
        <StyledButtonWIthCount>
          <Button name="Like" onClick={onLike} />
          <CountView>{like}</CountView>
        </StyledButtonWIthCount>
        <StyledButtonWIthCount>
          <Button name="Dislike" onClick={onDislike} />
          <CountView>{dislike}</CountView>
        </StyledButtonWIthCount>
      </FeedbackControlContainer>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
