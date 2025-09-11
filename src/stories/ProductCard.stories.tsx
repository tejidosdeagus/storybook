import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard, ProductCardProps } from "../components/ProductCard";
import { Box, Typography, Paper } from "@mui/material";
import { useArgs } from "@storybook/preview-api";
import { useState } from "react";

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

export const WithQuantitySelector = (args: ProductCardProps) => {
  const [{ quantity = 0, maxQuantity = 5 }, updateArgs] = useArgs();
  return (
    <ProductCard
      {...args}
      quantity={quantity}
      maxQuantity={maxQuantity}
      priceWithDiscount="$75.00"
      onClick={() => console.log("Card clicked!")}
      onAddToCart={() => updateArgs({ quantity: 1 })}
      onQuantityChange={(newQuantity) => updateArgs({ quantity: newQuantity })}
      onDeleteSelection={() => updateArgs({ quantity: 0 })}
    />
  );
};
WithQuantitySelector.args = {
  title: "Chaleco 1 - Guía de tejido",
  price: "$5000",
  image: "https://via.placeholder.com/324",
  quantity: 0,
  maxQuantity: 5,
};

// Nueva story que muestra productos en el carrito
export const ProductsInCart: Story = {
  render: () => {
    const [cartItems, setCartItems] = useState([
      { id: 1, title: "Chaleco 1", price: "$5000", image: "https://via.placeholder.com/324", quantity: 2 },
      { id: 2, title: "Chaleco 2", price: "$5500", image: "https://via.placeholder.com/324", quantity: 1 },
      { id: 3, title: "Chaleco 3", price: "$4800", image: "https://via.placeholder.com/324", quantity: 3 },
    ]);

    const updateQuantity = (id: number, newQuantity: number) => {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    const removeFromCart = (id: number) => {
      setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => {
      const price = parseInt(item.price.replace('$', ''));
      return sum + (price * item.quantity);
    }, 0);

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}>
          Carrito de Compras ({totalItems} items)
        </Typography>
        
        <Box sx={{ display: "grid", gap: 2, mb: 3 }}>
          {cartItems.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
              maxQuantity={10}
              onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
              onDeleteSelection={() => removeFromCart(item.id)}
            />
          ))}
        </Box>

        <Paper sx={{ p: 3, backgroundColor: "#F3E5D8" }}>
          <Typography variant="h5" sx={{ mb: 2, fontFamily: "Poppins, sans-serif" }}>
            Resumen del Carrito
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Total de items: {totalItems}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total: ${totalPrice.toLocaleString()}
          </Typography>
        </Paper>
      </Box>
    );
  },
};

// Story que muestra el proceso de agregar al carrito
export const AddToCartProcess: Story = {
  render: () => {
    const [cartState, setCartState] = useState<'empty' | 'adding' | 'added'>('empty');
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
      setCartState('adding');
      setTimeout(() => {
        setCartState('added');
        setQuantity(1);
      }, 500);
    };

    const handleQuantityChange = (newQuantity: number) => {
      setQuantity(newQuantity);
    };

    const handleDeleteSelection = () => {
      setQuantity(0);
      setCartState('empty');
    };

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}>
          Proceso: Agregar al Carrito
        </Typography>
        
        <ProductCard
          title="Chaleco Premium - Guía Completa"
          price="$7500"
          priceWithDiscount="$6500"
          image="https://via.placeholder.com/324"
          quantity={quantity}
          maxQuantity={5}
          onAddToCart={handleAddToCart}
          onQuantityChange={handleQuantityChange}
          onDeleteSelection={handleDeleteSelection}
        />

        <Box sx={{ mt: 3, p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Estado del Carrito:
          </Typography>
          <Typography variant="body2" sx={{ 
            color: cartState === 'empty' ? '#666' : 
                   cartState === 'adding' ? '#f57c00' : '#4caf50',
            fontWeight: 'bold'
          }}>
            {cartState === 'empty' && '🛒 Carrito vacío - Haz clic en "Agregar al carrito"'}
            {cartState === 'adding' && '⏳ Agregando al carrito...'}
            {cartState === 'added' && `✅ Producto agregado (Cantidad: ${quantity})`}
          </Typography>
        </Box>
      </Box>
    );
  },
};

// Nueva story que muestra productos con controles de cantidad deshabilitados
export const SingleQuantityProducts: Story = {
  render: () => {
    const [products, setProducts] = useState([
      { id: 1, title: "E-book: Patrones Básicos", price: "$2500", image: "https://via.placeholder.com/324", quantity: 0, disableControls: true },
      { id: 2, title: "Curso Online: Tejido", price: "$8000", image: "https://via.placeholder.com/324", quantity: 0, disableControls: true },
      { id: 3, title: "Kit de Herramientas", price: "$3500", image: "https://via.placeholder.com/324", quantity: 0, disableControls: false },
    ]);

    const handleAddToCart = (id: number) => {
      setProducts(prev => 
        prev.map(product => 
          product.id === id ? { ...product, quantity: 1 } : product
        )
      );
    };

    const handleQuantityChange = (id: number, newQuantity: number) => {
      setProducts(prev => 
        prev.map(product => 
          product.id === id ? { ...product, quantity: newQuantity } : product
        )
      );
    };

    const handleDeleteSelection = (id: number) => {
      setProducts(prev => 
        prev.map(product => 
          product.id === id ? { ...product, quantity: 0 } : product
        )
      );
    };

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}>
          Productos con Controles de Cantidad Deshabilitados
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
          Los productos digitales (e-books, cursos) solo permiten agregar 1 unidad. 
          Los productos físicos permiten cambiar cantidades.
        </Typography>

        <Box sx={{ display: "grid", gap: 3 }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              quantity={product.quantity}
              maxQuantity={product.disableControls ? 1 : 5}
              disableQuantityControls={product.disableControls}
              onAddToCart={() => handleAddToCart(product.id)}
              onQuantityChange={(newQuantity) => handleQuantityChange(product.id, newQuantity)}
              onDeleteSelection={() => handleDeleteSelection(product.id)}
            />
          ))}
        </Box>

        <Box sx={{ mt: 3, p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Notas:
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            🔒 <strong>E-book y Curso:</strong> Solo 1 unidad permitida (controles deshabilitados)
          </Typography>
          <Typography variant="body2">
            🛠️ <strong>Kit de Herramientas:</strong> Múltiples unidades permitidas (controles habilitados)
          </Typography>
        </Box>
      </Box>
    );
  },
};

// Nueva story que muestra productos comprados
export const PurchasedCourse: Story = {
  args: {
    title: "Curso de Tejido Avanzado",
    price: "$8000",
    priceWithDiscount: "$7200",
    image: "https://via.placeholder.com/324",
    isPurchased: true,
    // purchasedProgress: 65,
    onViewCourse: () => alert("Navegando al visor de cursos..."),
  },
};

// Story que muestra diferentes estados de progreso en cursos comprados
export const PurchasedCoursesWithProgress: Story = {
  render: () => {
    const purchasedCourses = [
      {
        id: 1,
        title: "Curso Básico de Tejido",
        price: "$5000",
        image: "https://via.placeholder.com/324",
        progress: 100,
        onViewCourse: () => alert("Curso completado - Navegando al visor..."),
      },
      {
        id: 2,
        title: "Patrones Intermedios",
        price: "$6500",
        image: "https://via.placeholder.com/324",
        progress: 75,
        onViewCourse: () => alert("Curso en progreso - Navegando al visor..."),
      },
      {
        id: 3,
        title: "Técnicas Avanzadas",
        price: "$8000",
        image: "https://via.placeholder.com/324",
        progress: 30,
        onViewCourse: () => alert("Curso recién iniciado - Navegando al visor..."),
      },
      {
        id: 4,
        title: "Diseño de Amigurumis",
        price: "$9000",
        image: "https://via.placeholder.com/324",
        progress: 0,
        onViewCourse: () => alert("Curso sin iniciar - Navegando al visor..."),
      },
    ];

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}>
          Mis Cursos Comprados
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
          Estos son los cursos que ya has comprado. Puedes ver tu progreso y continuar aprendiendo.
        </Typography>

        <Box sx={{ 
          display: "grid", 
          gap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
        }}>
          {purchasedCourses.map((course) => (
            <ProductCard
              key={course.id}
              title={course.title}
              price={course.price}
              image={course.image}
              isPurchased={true}
              // purchasedProgress={course.progress}
              onViewCourse={course.onViewCourse}
            />
          ))}
        </Box>

        <Box sx={{ mt: 3, p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Estados de Progreso:
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ <strong>100%:</strong> Curso completado
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            🔄 <strong>75%:</strong> Curso en progreso avanzado
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            📚 <strong>30%:</strong> Curso recién iniciado
          </Typography>
          <Typography variant="body2">
            🆕 <strong>0%:</strong> Curso sin iniciar
          </Typography>
        </Box>
      </Box>
    );
  },
};

// Story que compara curso disponible vs comprado
export const AvailableVsPurchased: Story = {
  render: () => {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}>
          Comparación: Curso Disponible vs Comprado
        </Typography>
        
        <Box sx={{ 
          display: "grid", 
          gap: 4,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
        }}>
          {/* Curso Disponible */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: "#4A4A4A" }}>
              Curso Disponible para Comprar
            </Typography>
            <ProductCard
              title="Curso de Tejido Premium"
              price="$10000"
              priceWithDiscount="$8500"
              image="https://via.placeholder.com/324"
              onAddToCart={() => alert("Agregando al carrito...")}
            />
          </Box>

          {/* Curso Comprado */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: "#4A4A4A" }}>
              Curso Ya Comprado
            </Typography>
            <ProductCard
              title="Curso de Tejido Premium"
              price="$10000"
              priceWithDiscount="$8500"
              image="https://via.placeholder.com/324"
              isPurchased={true}
              // purchasedProgress={45}
              onViewCourse={() => alert("Navegando al visor de cursos...")}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 3, p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Diferencias Visuales:
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            🆕 <strong>Disponible:</strong> Botón "Agregar al carrito" (verde)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✅ <strong>Comprado:</strong> Chip "Comprado" + Barra de progreso + Botón "Ir a mi curso" (marrón)
          </Typography>
          <Typography variant="body2">
            🚫 <strong>Protección:</strong> Los cursos comprados no se pueden agregar al carrito nuevamente
          </Typography>
        </Box>
      </Box>
    );
  },
};

// Story que muestra títulos largos para probar el truncado
export const LongTitles: Story = {
  render: () => {
    const longTitleProducts = [
      {
        id: 1,
        title: "Curso Básico de Tejido",
        price: "$5000",
        image: "https://via.placeholder.com/324",
      },
      {
        id: 2,
        title: "Curso Avanzado de Técnicas de Tejido a Crochet y Agujas para Principiantes",
        price: "$8000",
        image: "https://via.placeholder.com/324",
      },
      {
        id: 3,
        title: "Sweater Calden nuevo cambio 100mb",
        price: "$9999",
        image: "https://via.placeholder.com/324",
      },
      {
        id: 4,
        title: "Guía Completa de Patrones de Amigurumis para Principiantes y Avanzados",
        price: "$12000",
        image: "https://via.placeholder.com/324",
      },
    ];

    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 3, fontFamily: "Poppins, sans-serif" }}>
          Títulos Largos - Layout Consistente
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
          Los títulos largos se truncan automáticamente para mantener el layout consistente de las tarjetas.
        </Typography>

        <Box sx={{ 
          display: "grid", 
          gap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
        }}>
          {longTitleProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              onAddToCart={() => alert(`Agregando "${product.title}" al carrito...`)}
            />
          ))}
        </Box>

        <Box sx={{ mt: 3, p: 2, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Características del Layout:
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            📏 <strong>Altura fija:</strong> Títulos limitados a 2 líneas máximo
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ✂️ <strong>Truncado:</strong> Texto largo se corta con "..." 
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            📐 <strong>Consistencia:</strong> Botones siempre en la misma posición
          </Typography>
          <Typography variant="body2">
            🎨 <strong>Tamaño reducido:</strong> Fuente más pequeña para mejor ajuste
          </Typography>
        </Box>
      </Box>
    );
  },
};