import { QuantitySelector } from "../components/QuantitySelector";

export default {
  title: "Ecommerce/QuantitySelector",
  component: QuantitySelector,
};

export const Default = {
  args: {
    quantity: 1,
    onIncrease: () => alert("Aumentar"),
    onDecrease: () => alert("Disminuir"),
  },
};
