// src/components/Header/Header.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { useState } from "react";
import { CartIconWithCounter } from "../CartIconWithCounter";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

const navItems = [
  { label: "CURSOS Y PATRONES", value: "courses" },
  { label: "PRODUCTOS", value: "products" },
  { label: "BLOG", value: "blog" },
  { label: "AYUDA", value: "help" },
  { label: "INICIAR SESIÓN", value: "login" },
  { label: <CartIconWithCounter count={0} />, value: "cart" },
];

export const Default: Story = {
  render: () => {
    const DefaultHeader = () => {
      const [value, setValue] = useState("courses");

      return (
        <>
          <Header
            items={navItems}
            value={value}
            onChange={setValue}
            showCartIcon
            cartCount={0}
          />
        </>
      );
    };
    return <DefaultHeader />;
  },
};
