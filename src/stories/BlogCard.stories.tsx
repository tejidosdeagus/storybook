import type { Meta, StoryObj } from "@storybook/react";
import { BlogCard } from "../components/BlogCard/BlogCard";

const meta: Meta<typeof BlogCard> = {
  title: "Components/BlogCard",
  component: BlogCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    image: "https://via.placeholder.com/354x200.png?text=Imagen+Blog",
    date: "08 de febrero, 2025",
    title: "Bolso red: tutorial gratuito",
    summary: `Este verano decidí regalarle algo especial a mi comunidad: un patrón gratuito para que más personas puedan disfrutar del tejido tanto como yo. La inspiración vino de una bolsa que había tejido hace un tiempo para una tienda de bikinis. Me preguntaron tantas veces por el patrón que supe que tenía que compartirlo.`,
    onReadMore: () => alert("Seguir leyendo..."),
  },
};
