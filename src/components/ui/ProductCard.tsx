import { Button } from "./button"
import { Card, CardContent, CardFooter, CardHeader } from "./card"
import { useCart } from "@/contexts/CartContext"

interface ProductCardProps {
  id: number
  title: string
  price: number
  description: string
  image: string
}

export function ProductCard({ id, title, price, description, image }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto flex items-center justify-between">
        <span className="font-semibold text-lg">
          ${price.toFixed(2)}
        </span>
        <Button onClick={() => addItem({ id, title, price, image })}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
} 