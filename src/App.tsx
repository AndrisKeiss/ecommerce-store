import { useState, useEffect } from "react"
import { Navbar } from "./components/ui/Navbar"
import { Sidebar } from "./components/ui/Sidebar"
import { ProductCard } from "./components/ui/ProductCard"
import { CartProvider } from "./contexts/CartContext"

// Sample products data
const products = [
  {
    id: 1,
    title: "Laptop Pro",
    price: 1299.99,
    category: "Computers",
    description: "High-performance laptop for professionals with 16GB RAM and 512GB SSD",
    image: "https://picsum.photos/seed/laptop/400/300"
  },
  {
    id: 2,
    title: "Smartphone X",
    price: 799.99,
    category: "Phones",
    description: "Latest smartphone with 5G and advanced camera system",
    image: "https://picsum.photos/seed/phone/400/300"
  },
  {
    id: 3,
    title: "Wireless Headphones",
    category: "Audio",
    price: 199.99,
    description: "Noise-cancelling headphones with 30-hour battery life",
    image: "https://picsum.photos/seed/headphones/400/300"
  },
  {
    id: 4,
    title: "Smartwatch Pro",
    category: "Wearables",
    price: 299.99,
    description: "Fitness tracking and notifications with 5-day battery life",
    image: "https://picsum.photos/seed/watch/400/300"
  },
  {
    id: 5,
    title: "4K Gaming Monitor",
    category: "Monitors",
    price: 499.99,
    description: "27-inch 4K display with 144Hz refresh rate",
    image: "https://picsum.photos/seed/monitor/400/300"
  },
  {
    id: 6,
    title: "Mechanical Keyboard",
    category: "Accessories",
    price: 129.99,
    description: "RGB mechanical keyboard with custom switches",
    image: "https://picsum.photos/seed/keyboard/400/300"
  },
  {
    id: 7,
    title: "Wireless Mouse",
    category: "Accessories",
    price: 79.99,
    description: "Ergonomic wireless mouse with precision tracking",
    image: "https://picsum.photos/seed/mouse/400/300"
  },
  {
    id: 8,
    title: "Gaming Console",
    category: "Accessories",
    price: 499.99,
    description: "Next-gen gaming console with 4K graphics",
    image: "https://picsum.photos/seed/console/400/300"
  },
  {
    id: 9,
    title: "Tablet Pro",
    category: "Computers",
    price: 649.99,
    description: "10.9-inch tablet with M1 chip and Apple Pencil support",
    image: "https://picsum.photos/seed/tablet/400/300"
  },
  {
    id: 10,
    title: "Wireless Earbuds",
    category: "Audio",
    price: 159.99,
    description: "True wireless earbuds with active noise cancellation",
    image: "https://picsum.photos/seed/earbuds/400/300"
  },
  {
    id: 11,
    title: "4K Webcam",
    category: "Accessories",
    price: 199.99,
    description: "Professional webcam for streaming and conferences",
    image: "https://picsum.photos/seed/webcam/400/300"
  },
  // Add more products as needed
]

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Update document class when dark mode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      !selectedCategory || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <CartProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Navbar 
          onSearch={setSearchQuery} 
          searchQuery={searchQuery}
          isDarkMode={isDarkMode}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        />
        <div className="container mx-auto flex gap-6 py-6">
          <Sidebar 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default App
