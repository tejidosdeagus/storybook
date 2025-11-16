import React from "react";
import {
  Modal as MuiModal,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";

type ModalVariant = "default";

export interface ModalProps {
  open: boolean;
  variant?: ModalVariant;
  title: string;
  message: string;
  textCancel?: string;
  onCancel?: () => void;
  textAccept: string;
  onAccept: () => void;
  textAlternative?: string;
  onAlternative?: () => void;
}

const StyledModal = styled(MuiModal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ModalContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant",
})<Pick<ModalProps, "variant">>(({ variant }) => ({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "24px",
  maxWidth: "400px",
  width: "90%",
  outline: "none",
  ...(variant === "default" && {
    border: "2px solid #8C6A5D",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  }),
}));

const ModalTitle = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "20px",
  fontWeight: 600,
  color: "#4A4A4A",
  marginBottom: "16px",
});

const ModalMessage = styled(Typography)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  color: "#4A4A4A",
  marginBottom: "24px",
  lineHeight: 1.5,
});

const ButtonContainer = styled(Box)({
  display: "flex",
  gap: "12px",
  justifyContent: "flex-end",
});

const CancelButton = styled(Button)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  padding: "8px 16px",
  border: "1px solid #8C6A5D",
  color: "#8C6A5D",
  "&:hover": {
    backgroundColor: "rgba(140, 106, 93, 0.1)",
    border: "1px solid #8C6A5D",
  },
});

const AcceptButton = styled(Button)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  padding: "8px 16px",
  backgroundColor: "#8C6A5D",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#7A5A4E",
  },
});

const AlternativeButton = styled(Button)({
  fontFamily: "Poppins, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  textTransform: "none",
  padding: "8px 16px",
  border: "1px solid #8C6A5D",
  color: "#8C6A5D",
  "&:hover": {
    backgroundColor: "rgba(140, 106, 93, 0.1)",
    border: "1px solid #8C6A5D",
  },
});

export const Modal: React.FC<ModalProps> = ({
  open,
  variant = "default",
  title,
  message,
  textCancel,
  onCancel,
  textAccept,
  onAccept,
  textAlternative,
  onAlternative,
}) => {
  return (
    <StyledModal
      open={open}
      onClose={onCancel || onAccept}
      aria-labelledby="modal-title"
      aria-describedby="modal-message"
    >
      <ModalContent variant={variant}>
        <ModalTitle id="modal-title">{title}</ModalTitle>
        <ModalMessage id="modal-message">{message}</ModalMessage>
        <ButtonContainer>
          {!textAlternative ? (
            <>
              {textCancel && onCancel && (
                <CancelButton onClick={onCancel}>{textCancel}</CancelButton>
              )}
              <AcceptButton onClick={onAccept}>{textAccept}</AcceptButton>
            </>
          ) : (
            <>
              <AcceptButton onClick={onAccept}>{textAccept}</AcceptButton>
              {textAlternative && onAlternative && (
                <AlternativeButton onClick={onAlternative}>{textAlternative}</AlternativeButton>
              )}
              {textCancel && onCancel && (
                <CancelButton onClick={onCancel}>{textCancel}</CancelButton>
              )}
            </>
          )}
        </ButtonContainer>
      </ModalContent>
    </StyledModal>
  );
};