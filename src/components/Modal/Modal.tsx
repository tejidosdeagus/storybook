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
  open?: boolean;
  variant?: ModalVariant;
  title?: string;
  message?: string;
  children?: React.ReactNode; // Allow custom content
  textCancel?: string;
  onCancel?: () => void;
  onClose?: () => void; // Alias for onCancel
  textAccept?: string;
  onAccept?: () => void;
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
  fontSize: "24px",
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

export const Modal = ({
  open,
  variant = "default",
  title,
  message,
  children,
  textCancel,
  onCancel,
  onClose,
  textAccept,
  onAccept,
}: ModalProps & { children?: React.ReactNode }): React.ReactElement => {
  const modalOpen = open !== undefined ? open : false;
  // Support both onCancel and onClose props
  const handleClose = onClose || onCancel || onAccept;

  // Determine if we should show default buttons or custom content
  const hasDefaultContent = title || message;
  const hasCustomContent = children;
  const hasDefaultButtons = textCancel || textAccept;

  return (
    <StyledModal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby={message ? "modal-message" : undefined}
    >
      <ModalContent variant={variant}>
        {title && <ModalTitle id="modal-title">{title}</ModalTitle>}
        {message && <ModalMessage id="modal-message">{message}</ModalMessage>}
        {hasCustomContent && <Box>{children}</Box>}
        {hasDefaultButtons && (
          <ButtonContainer>
            {textCancel && (onCancel || onClose) && (
              <CancelButton onClick={onCancel || onClose}>{textCancel}</CancelButton>
            )}
            {textAccept && onAccept && (
              <AcceptButton onClick={onAccept}>{textAccept}</AcceptButton>
            )}
          </ButtonContainer>
        )}
      </ModalContent>
    </StyledModal>
  );
};
