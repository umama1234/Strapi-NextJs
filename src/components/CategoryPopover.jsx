import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getCategoriesBook } from "@/app/Lib/category";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryPopover() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/categories");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (catName) => {
    router.push(`/?category=${catName}`);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Categories</Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleCategorySelect(cat.name)}
              >
                <Button variant="ghost" className="w-full text-left">{cat.name}</Button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}
