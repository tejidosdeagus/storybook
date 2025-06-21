import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "¿Cuáles son los medios de pago?",
    children: "This is the content of the accordion.",
    customVariant: "default",
  },
};
