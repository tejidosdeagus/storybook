import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard, ProductCardProps } from "../components/Card";
import { Box } from "@mui/material";

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

const products: ProductCardProps[] = [
  {
    title: "Chaleco 1",
    price: "$5000",
    image: "https://via.placeholder.com/324",
  },
  {
    title: "Chaleco 2",
    price: "$5500",
    image: "https://via.placeholder.com/324",
  },
  {
    title: "Chaleco 3",
    price: "$4800",
    image: "https://via.placeholder.com/324",
  },
  {
    title: "Chaleco 4",
    price: "$6000",
    image: "https://via.placeholder.com/324",
  },
  {
    title: "Chaleco 5",
    price: "$5200",
    image: "https://via.placeholder.com/324",
  },
];

export const WithEditButton: Story = {
  args: {
    ...products[0],
    onEdit: () => alert("Edit button clicked!"),
  },
};

export const WithEditAndDeleteButtons: Story = {
  args: {
    ...products[0],
    onEdit: () => alert("Edit button clicked!"),
    onDelete: () => alert("Delete button clicked!"),
  },
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Box
      sx={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        "@media (min-width: 600px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media (min-width: 900px)": {
          gridTemplateColumns: "repeat(4, 1fr)",
        },
        "@media (min-width: 1200px)": {
          gridTemplateColumns: "repeat(5, 1fr)",
        },
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </Box>
  ),
};
