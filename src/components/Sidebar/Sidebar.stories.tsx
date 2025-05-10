/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { CartIconWithCounter } from "../CartIconWithCounter/CartIconWithCounter";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          height: 500,
          width: 400,
          backgroundColor: "#A8C3A3",
          padding: 20,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => {
    const items = [
      {
        id: "courses",
        label: "CURSOS Y PATRONES",
        onChange: () => console.log("Cursos"),
      },
      {
        id: "products",
        label: "PRODUCTOS",
        onChange: () => console.log("Productos"),
      },
      { id: "blog", label: "BLOG", onChange: () => console.log("Blog") },
      { id: "help", label: "AYUDA", onChange: () => console.log("Ayuda") },
      {
        id: "login",
        label: "INICIAR SESIÓN",
        onChange: () => console.log("Iniciar sesión"),
      },
      {
        id: "cart",
        label: <CartIconWithCounter count={0} />,
        onChange: () => console.log("Carrito"),
      },
    ];
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          style={{
            margin: 16,
            padding: 12,
            border: "none",
            background: "#D4AF80",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 24,
            fontWeight: "bold",
            color: "#4A4A4A",
          }}
          aria-label="Open sidebar"
        >
          &#9776; {/* Unicode hamburger icon */}
        </button>
        <Sidebar items={items} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
};
