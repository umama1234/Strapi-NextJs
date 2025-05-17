"use client"

import React, { useEffect, useState } from "react";
import { use } from "react";
import DetailCard from "@/components/DetailCard";

export default function BookDetails({ params }) {
    const { slug } = use(params); 

    const [book, setBook] = useState(null); 

    useEffect(() => {
        const fetchBookDetails = async () => {
            const response = await fetch(`http://localhost:1337/api/books?filters[slug][$eq]=${slug}&populate=*`);
            const data = await response.json();
            setBook(data.data[0]); 
        };

        fetchBookDetails();
    }, [slug]);






    if (!book) return <p className="text-center mt-10">Loading book details...</p>; // optional loader





    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Book Details for {slug}</h1>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
                <DetailCard
                    title={book.title}
                    author={book.author}
                    image ={`http://localhost:1337${book.coverImage.formats.thumbnail.url}`}
                    language={book.language}
                    stock={book.stock}
                    price={book.price}
                    description={book.description}
                    category={book.category.name}
                    publisher={book.publisher}
                    publicationDate={book.publicationDate}
                />
            </div>
        </div>
    );
}
