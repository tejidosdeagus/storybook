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
