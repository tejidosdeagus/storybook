import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "../components/Card";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    title: "Chaleco 1 - Guía de tejido",
    price: "$5000",
    image: "https://via.placeholder.com/324",
    //onAddToCart: () => alert('Producto agregado al carrito'),
  },
};
