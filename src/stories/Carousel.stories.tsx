import { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "../components/Carousel";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: [img1, img2, img3, img4, img5],
    interval: 3000, // cambia de imágenes cada 3 segundos
  },
};
