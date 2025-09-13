import React from "react";
import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
  styled,
} from "@mui/material";

export interface PaginationProps extends Omit<MuiPaginationProps, "variant"> {
  /**
   * Current page number
   */
  page: number;
  /**
   * Total number of pages
   */
  count: number;
  /**
   * Callback fired when the page is changed
   */
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  /**
   * Optional additional className
   */
  className?: string;
  /**
   * Whether to show the first and last page buttons
   */
  showFirstButton?: boolean;
  /**
   * Whether to show the previous and next page buttons
   */
  showLastButton?: boolean;
  /**
   * The shape of the pagination items
   */
  shape?: "circular" | "rounded";
  /**
   * The size of the pagination component
   */
  size?: "small" | "medium" | "large";
  /**
   * The variant of the pagination component
   */
  variant?: "text" | "outlined";
}

const StyledPagination = styled(MuiPagination)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "4rem",
  gap: "1rem",
  fontSize: "1.1rem",
  "& .MuiPaginationItem-root": {
    color: "#5d5d5d",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#e8c3a9",
      color: "white",
    },
  },
  "& .Mui-selected": {
    fontWeight: "bold",
    backgroundColor: "#a8c3a3", // --verde-claro
    color: "white",
    "&:hover": {
      backgroundColor: "#a8c3a3", // --verde-claro
      color: "white",
    },
  },
  "& .MuiPaginationItem-previousNext": {
    "&:hover": {
      backgroundColor: "#e8c3a9",
      color: "white",
    },
  },
  "& .MuiPaginationItem-firstLast": {
    "&:hover": {
      backgroundColor: "#e8c3a9",
      color: "white",
    },
  },
});

/**
 * Pagination component for navigating through pages
 */
export const Pagination = ({
  page,
  count,
  onChange,
  className = "",
  showFirstButton = true,
  showLastButton = true,
  shape = "rounded",
  size = "medium",
  variant = "text",
  ...props
}: PaginationProps) => {
  return (
    <StyledPagination
      className={`pagination ${className}`}
      page={page}
      count={count}
      onChange={onChange}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      shape={shape}
      size={size}
      variant={variant}
      {...props}
    />
  );
};
