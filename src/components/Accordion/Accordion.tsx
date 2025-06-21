import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";

type AccordionVariant = "default";

export interface AccordionProps extends Omit<MuiAccordionProps, "title"> {
  customVariant?: AccordionVariant;
  title: string;
  onEdit?: () => void;
}

const StyledAccordion = styled(MuiAccordion, {
  shouldForwardProp: (prop) => prop !== "customVariant",
})<Pick<AccordionProps, "customVariant">>(({ customVariant }) => ({
  width: "100%",
  ...(customVariant === "default" && {
    borderColor: "#8C6A5D",
    color: "#4A4A4A",
    backgroundColor: "#D4AF80",
    border: `1px solid #8C6A5D`,
    "& .MuiAccordionSummary-root": {
      color: "#4A4A4A",
    },
    "& .MuiAccordionDetails-root": {
      color: "#4A4A4A",
    },
    "& .MuiSvgIcon-root": {
      color: "#4A4A4A",
    },
  }),
}));

export const Accordion: React.FC<AccordionProps> = ({
  customVariant = "default",
  title,
  children,
  onEdit,
  ...props
}) => {
  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onEdit?.();
  };

  return (
    <StyledAccordion customVariant={customVariant} {...props}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Typography sx={{ fontFamily: "Poppins", fontSize: 22, flexGrow: 1 }}>
            {title}
          </Typography>
          {onEdit && (
            <IconButton
              aria-label="edit"
              onClick={handleEditClick}
              sx={{ color: "#4A4A4A" }}
            >
              <EditIcon />
            </IconButton>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};
