import React from "react";
import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionVariant = "default";

interface AccordionProps extends Omit<MuiAccordionProps, "title"> {
  customVariant?: AccordionVariant;
  title: string;
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

const Accordion: React.FC<AccordionProps> = ({
  customVariant = "default",
  title,
  children,
  ...props
}) => {
  return (
    <StyledAccordion customVariant={customVariant} {...props}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontFamily: "Poppins", fontSize: 22 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
