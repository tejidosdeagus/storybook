import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HamburgerMenu } from "./HamburgerMenu";
import { TabItem } from "../Tabs/Tabs";
import { Box } from "@mui/material";

const meta: Meta<typeof HamburgerMenu> = {
  title: "Components/HamburgerMenu",
  component: HamburgerMenu,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

const sampleItems: TabItem[] = [
  { label: "Inicio", value: "home" },
  { label: "Productos", value: "products" },
  { label: "Sobre mí", value: "about" },
  { label: "Contacto", value: "contact" },
];

export const Default: Story = {
  render: (args) => (
    <Box sx={{ backgroundColor: "#A8C3A3", padding: 2 }}>
      <HamburgerMenu {...args} />
    </Box>
  ),
  args: {
    items: sampleItems,
    onSelect: (value) => console.log("Selected:", value),
    onCartClick: () => alert("Ir al carrito"),
  },
};
