import React, { useState } from "react";
import {
  Tabs as MuiTabs,
  Tab as MuiTab,
  styled,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";

export interface SubMenuItem {
  id: string;
  name: string;
  onClick: () => void;
}

export interface TabItem {
  id: string;
  label: React.ReactNode;
  onChange: (id: string) => void;
  children?: SubMenuItem[]; // New property for dropdown items
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

const StyledMenuItem = styled(MenuItem)({
  fontSize: "16px",
  fontWeight: 500,
  color: "#4A4A4A",
  "&:hover": {
    backgroundColor: "#8BAE8A",
  },
});

/**
 * Navigation tabs component with dropdown support
 */
export const Tabs = ({
  items,
  className = "",
  selected,
  onChange,
}: TabsProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined);

  const handleTabClick = (
    event: React.MouseEvent<HTMLElement>,
    item: TabItem
  ) => {
    if (item.children && item.children.length > 0) {
      setAnchorEl(event.currentTarget);
      setActiveTabId(item.id);
      setMenuWidth(event.currentTarget.offsetWidth);
    } else {
      onChange(item.id);
      item.onChange(item.id);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveTabId(null);
    setMenuWidth(undefined);
  };

  const handleMenuItemClick = (subItem: SubMenuItem) => {
    subItem.onClick();
    handleMenuClose();
  };

  const open = Boolean(anchorEl);

  // Validate that the selected value exists in items
  const validSelectedValue = items.some(item => item.id === selected) ? selected : items[0]?.id || false;

  return (
    <Box>
      <StyledTabs
        value={validSelectedValue}
        className={className}
        variant="scrollable"
        scrollButtons="auto"
      >
        {items.map((item) => (
          <StyledTab
            key={item.id}
            value={item.id}
            label={item.label}
            onClick={(event) => handleTabClick(event, item)}
            disableRipple
          />
        ))}
      </StyledTabs>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: menuWidth,
            width: menuWidth,
            boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.15)",
            borderRadius: 2,
            backgroundColor: "#A8C3A3",
          },
        }}
        disableScrollLock={true}
      >
        {activeTabId &&
          items
            .find((item) => item.id === activeTabId)
            ?.children?.map((subItem) => (
              <StyledMenuItem
                key={subItem.id}
                onClick={() => handleMenuItemClick(subItem)}
              >
                {subItem.name}
              </StyledMenuItem>
            ))}
      </Menu>
    </Box>
  );
};
