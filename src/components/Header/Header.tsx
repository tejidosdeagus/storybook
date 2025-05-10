import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { Tabs, TabItem } from "../Tabs/Tabs";
import logoImage from "../../assets/logotejidos.png";

export interface HeaderProps {
  tabItems: TabItem[];
  value: string;
  onChange: (value: string) => void;
  logo?: React.ReactNode;
  showCartIcon?: boolean;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ tabItems, onChange, logo }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={{ backgroundColor: "#A8C3A3" }}>
      {isMobile ? (
        <HamburgerMenu
          items={tabItems}
          onSelect={onChange}
          onCartClick={() => console.log("Ir al carrito")}
          logo={logo}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px 10px",
            fontFamily: "Playfair Display",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Logo en escritorio */}
          <Box sx={{ width: "150px" }}>
            {logo || (
              <img
                src={logoImage}
                alt="Tejidos de Agus"
                style={{ maxHeight: "50px", cursor: "pointer" }}
                onClick={() => (window.location.href = "/")}
              />
            )}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Tabs items={tabItems} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
