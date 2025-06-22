import React, { useEffect, useState } from "react";
import {
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  keyframes,
  styled,
} from "@mui/material";

const progressAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

export interface AlertProps extends Omit<MuiAlertProps, "variant"> {
  variant?: "outlined" | "filled";
  timeLapse?: number;
  onClose?: () => void;
}

const pastelColors = {
  success: { main: "#C5E1A5", contrast: "#8BC34A" },
  info: { main: "#B3E5FC", contrast: "#29B6F6" },
  warning: { main: "#FFCC80", contrast: "#FFA726" },
  error: { main: "#FFCDD2", contrast: "#EF5350" },
};

const StyledAlert = styled(MuiAlert, {
  shouldForwardProp: (prop) => prop !== "timeLapse",
})<AlertProps>(({ theme, severity = "success", variant = "outlined" }) => ({
  position: "relative",
  ...(variant === "outlined"
    ? {
        color: theme.palette[severity].main,
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette[severity].main}`,
        "& .MuiAlert-icon": {
          color: theme.palette[severity].main,
        },
      }
    : {
        color: "#fff",
        backgroundColor: pastelColors[severity].main,
        border: "none",
        "& .MuiAlert-icon": {
          color: "#fff",
        },
      }),
}));

const ProgressBar = styled("div", {
  shouldForwardProp: (prop) => prop !== "timeLapse",
})<{
  timeLapse?: number;
  severity?: "success" | "info" | "warning" | "error";
  variant?: "outlined" | "filled";
}>(
  ({
    theme,
    timeLapse = 5000,
    severity = "success",
    variant = "outlined",
  }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "4px",
    backgroundColor:
      variant === "outlined"
        ? theme.palette[severity].main
        : pastelColors[severity].contrast,
    animation: `${progressAnimation} ${timeLapse / 1000}s linear forwards`,
  })
);

export const Alert: React.FC<AlertProps> = ({
  children,
  onClose,
  timeLapse = 5000,
  variant = "outlined",
  severity,
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, timeLapse);

    return () => clearTimeout(timer);
  }, [timeLapse, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <StyledAlert severity={severity} variant={variant} {...props}>
      {children}
      <ProgressBar
        timeLapse={timeLapse}
        severity={severity}
        variant={variant}
      />
    </StyledAlert>
  );
};
