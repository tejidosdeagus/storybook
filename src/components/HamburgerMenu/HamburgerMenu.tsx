import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CartIconWithCounter } from "../CartIconWithCounter";
import { TabItem } from "../Tabs/Tabs";
import logoImage from "../../assets/logotejidos.png";

export interface HamburgerMenuProps {
  items: TabItem[];
  onSelect: (value: string) => void;
  onCartClick?: () => void;
  logo?: React.ReactNode;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  items,
  onCartClick,
  onSelect,
  logo,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 10px",
        maxHeight: "56px",
      }}
    >
      <IconButton onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "#4A4A4A" }} />
      </IconButton>

      <Box sx={{ width: "94px" }}>
        {logo || (
          <img
            src={logoImage}
            alt="Tejidos de Agus"
            style={{ maxHeight: "40px" }}
            onClick={() => (window.location.href = "/")}
          />
        )}
      </Box>

      <IconButton onClick={onCartClick}>
        <CartIconWithCounter count={0} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <List sx={{ width: 250, fontFamily: "Playfair Display" }}>
          {items.map((item) => (
            <ListItem
              component="button"
              key={item.value}
              onClick={() => {
                onSelect(item.value);
                toggleDrawer();
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
