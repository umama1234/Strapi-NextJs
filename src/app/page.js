"use client";

import { useEffect, useState } from "react";
import MyCard from "@/components/MyCard";
import CategoryPopover from "@/components/CategoryPopover";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [books, setBooks] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const category = searchParams.get("category");
      const endpoint = category
        ? `http://localhost:1337/api/books?filters[category][name][$eq]=${category}&populate=*`
        : "http://localhost:1337/api/books?populate=*";

      const response = await fetch(endpoint);
      const data = await response.json();
      setBooks(data.data);
    };

    fetchData();
  }, [searchParams]);

  return (
    <>
      <div className="flex flex-row items-center justify-between mt-8 mx-20">
        <h1 className="text-left mt-8 mx-1 text-3xl font-bold">Featured Books</h1>
        <CategoryPopover /> 
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {books.map((book) => {
          return (
            <MyCard
              key={book.id}
              title={book.title}
              author={book.author}
              image={'http://localhost:1337' + book.coverImage.url}
              slug={book.slug}
            />
          );
        })}
      </div>
    </>
  );
}
