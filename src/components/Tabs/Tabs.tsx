import React from "react";
import { Tabs as MuiTabs, Tab as MuiTab, styled } from "@mui/material";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  onChange: (id: string) => void;
}

export interface TabsProps {
  items: TabItem[];
  className?: string;
  selected: string;
  onChange: (id: string) => void;
}

const StyledTabs = styled(MuiTabs)({
  minHeight: "auto",
  gap: "16px",
  padding: "5px 16px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

const StyledTab = styled(MuiTab)({
  color: "#4A4A4A",
  fontSize: "18px",
  fontWeight: 600,
  textTransform: "uppercase",
  //padding: '0px 0px',
  minHeight: "auto",
  minWidth: 0,
  "&.Mui-selected": {
    color: "#4A4A4A",
    fontWeight: "bold",
    textShadow: "1px 1px 3px rgba(0,0,0,0.25)",
  },
  "&:hover": {
    textShadow: "1px 1px 3px rgba(0,0,0,0.25)",
  },
});

/**
 * Navigation tabs component
 */
export const Tabs = ({
  items,
  className = "",
  selected,
  onChange,
}: TabsProps) => {
  return (
    <StyledTabs
      value={selected}
      className={className}
      variant="scrollable"
      scrollButtons="auto"
    >
      {items.map((item) => (
        <StyledTab
          key={item.id}
          value={item.id}
          label={item.label}
          onClick={() => {
            onChange(item.id);
            item.onChange(item.id);
          }}
          disableRipple
        />
      ))}
    </StyledTabs>
  );
};
