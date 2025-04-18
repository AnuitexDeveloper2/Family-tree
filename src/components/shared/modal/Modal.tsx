import { FC, ReactNode } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { CloseButton, ModalContent, ModalOverlay } from "./Modal.styles";

interface Props {
    isOpen: boolean;
    children: ReactNode;
    onClose: () => void;
}

const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
    return (
        <ModalOverlay isOpen={isOpen} onClick={onClose}>
            <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal