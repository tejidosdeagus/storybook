import { CartIconWithCounter } from './CartIconWithCounter';
import { useState } from 'react';
import { Button } from '../Button';

const meta = {
  title: 'Components/CartIconWithCounter',
  component: CartIconWithCounter,
};

export default meta;

export const Default = {
  args: {
    count: 3,
  },
};

export const InteractiveExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <CartIconWithCounter count={count} />
      <Button onClick={() => setCount(count + 1)}>Agregar al carrito</Button>
    </div>
  );
};



