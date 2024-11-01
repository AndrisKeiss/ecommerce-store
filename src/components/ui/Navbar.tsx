import { Search } from "lucide-react"
import { Input } from "./input"
import { CartDropdown } from "./CartDropdown"
import { Sun, Moon } from "lucide-react"
import { Button } from "./button"

interface NavbarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export function Navbar({ onSearch, searchQuery, isDarkMode, onThemeToggle }: NavbarProps) {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="text-xl font-bold">Store</div>
        <div className="flex-1 max-w-md mx-4">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md border bg-background"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={onThemeToggle}
            className="relative"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <CartDropdown />
        </div>
      </div>
    </nav>
  )
} 