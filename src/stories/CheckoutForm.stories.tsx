import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckoutForm } from "../components/CheckoutForm";

const meta: Meta<typeof CheckoutForm> = {
  title: "Components/CheckoutForm",
  component: CheckoutForm,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CheckoutForm>;

export const Default: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      address: "",
      postalCode: "",
      city: "",
      country: "",
    });

    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Por favor ingrese un email válido");
        return;
      }
      setError("");
      alert("Formulario enviado correctamente");
    };

    const handlePostalCodeChange = (postalCode: string) => {
      if (postalCode === "1000") {
        setFormData((prev) => ({
          ...prev,
          city: "Buenos Aires",
          country: "Argentina",
        }));
      }
    };

    return (
      <CheckoutForm
        formData={formData}
        onChange={setFormData}
        onSubmit={handleSubmit}
        error={error}
        onPostalCodeChange={handlePostalCodeChange}
      />
    );
  },
};
