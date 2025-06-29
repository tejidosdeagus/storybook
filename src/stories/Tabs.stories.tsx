import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../components/Tabs";
import { CartIconWithCounter } from "../components/CartIconWithCounter/CartIconWithCounter";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 1000, backgroundColor: "#A8C3A3", padding: 20 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

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
        children: [
          {
            id: "profile",
            name: "Mi perfil",
            onClick: () => console.log("Mi perfil clicked"),
          },
          {
            id: "my-courses",
            name: "Mis cursos",
            onClick: () => console.log("Mis cursos clicked"),
          },
          {
            id: "logout",
            name: "Cerrar sesión",
            onClick: () => console.log("Cerrar sesión clicked"),
          },
        ],
      },
      {
        id: "cart",
        label: <CartIconWithCounter count={0} />,
        onChange: () => console.log("Carrito"),
      },
    ];

    return <Tabs items={items} selected="" onChange={() => console.log()} />;
  },
};

export const WithDropdown: Story = {
  render: () => {
    const items = [
      {
        id: "home",
        label: "INICIO",
        onChange: () => console.log("Inicio"),
      },
      {
        id: "account",
        label: "MI CUENTA",
        onChange: () => console.log("Mi cuenta"),
        children: [
          {
            id: "profile",
            name: "Mi perfil",
            onClick: () => console.log("Mi perfil clicked"),
          },
          {
            id: "settings",
            name: "Configuración",
            onClick: () => console.log("Configuración clicked"),
          },
          {
            id: "orders",
            name: "Mis pedidos",
            onClick: () => console.log("Mis pedidos clicked"),
          },
          {
            id: "logout",
            name: "Cerrar sesión",
            onClick: () => console.log("Cerrar sesión clicked"),
          },
        ],
      },
      {
        id: "cart",
        label: <CartIconWithCounter count={3} />,
        onChange: () => console.log("Carrito"),
      },
    ];

    return <Tabs items={items} selected="" onChange={() => console.log()} />;
  },
};
