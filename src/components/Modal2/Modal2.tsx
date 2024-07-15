import { StyledModal2 } from "./styles";
import { Modal2Props } from "./types";

function Modal2 ({open, onClose, children}:Modal2Props) {
    return (
        <StyledModal2 open ={open} onClose={onClose}>{children}</StyledModal2>
    )
}
export default Modal2;


