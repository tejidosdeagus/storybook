import React from "react";
import { styled } from "@mui/material";
import { TabItem } from "../Tabs/Tabs";

export interface SidebarProps {
  items: TabItem[];
  open: boolean;
  onClose?: () => void;
  width?: number | string;
  className?: string;
}

const SidebarContainer = styled("div")<{
  open: boolean;
  width: number | string;
}>(({ open, width }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: typeof width === "number" ? `${width}px` : width,
  background: "#fff",
  boxShadow: open ? "2px 0 8px rgba(0,0,0,0.15)" : "none",
  transform: open ? "translateX(0)" : "translateX(-100%)",
  transition:
    "transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1)",
  zIndex: 1300,
  display: "flex",
  flexDirection: "column",
  padding: "24px 0",
  pointerEvents: open ? "auto" : "none",
}));

const Overlay = styled("div")<{ open: boolean }>(({ open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.2)",
  opacity: open ? 1 : 0,
  pointerEvents: open ? "auto" : "none",
  transition: "opacity 0.3s cubic-bezier(.4,0,.2,1)",
  zIndex: 1299,
}));

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  open,
  onClose,
  width = 280,
  className = "",
}) => {
  if (!open) return null;
  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <SidebarContainer open={open} width={width} className={className}>
        {items.map((item) => (
          <button
            key={item.id}
            style={{
              background: "none",
              border: "none",
              textAlign: "left",
              padding: "16px 32px",
              fontSize: "18px",
              width: "100%",
              cursor: "pointer",
              color: "#4A4A4A",
              fontWeight: 600,
              outline: "none",
            }}
            onClick={() => item.onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </SidebarContainer>
    </>
  );
};
