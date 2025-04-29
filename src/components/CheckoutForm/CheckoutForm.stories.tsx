import { CheckoutForm } from './CheckoutForm';

export default {
  title: 'Ecommerce/CheckoutForm',
  component: CheckoutForm,
};

export const Default = {
  args: {
    onSubmit: (data: any) => alert(JSON.stringify(data)),
  },
};
