import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },

    fullWidth: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "BLOG",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "VER MAS PRODUCTOS",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Botón deshabilitado",
  },
};
