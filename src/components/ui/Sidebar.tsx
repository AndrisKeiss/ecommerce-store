import { 
  Laptop, 
  Smartphone, 
  Watch, 
  Headphones, 
  Camera, 
  GamepadIcon,
  MonitorIcon,
  ShirtIcon
} from "lucide-react"
import { Button } from "./button"

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  "All",
  "Computers",
  "Phones",
  "Audio",
  "Wearables",
  "Monitors",
  "Accessories"
];

export function Sidebar({ selectedCategory, onCategoryChange }: SidebarProps) {
  return (
    <div className="w-64 space-y-4">
      <div className="font-semibold text-lg">Categories</div>
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category === "All" ? "" : category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              (category === "All" ? !selectedCategory : category === selectedCategory)
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
} 