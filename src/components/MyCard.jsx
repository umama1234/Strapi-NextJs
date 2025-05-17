import React from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const MyCard = ({ title, author, image, slug }) => {
  return (
    <Card className="w-[350px]">
      <CardContent>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover rounded-t-md"
          />
        )}
        <div className="flex justify-between items-center mt-4">
          <div className="text-left">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{author}</CardDescription>
          </div>
          <button className="px-3 py-1 bg-blue-500 cursor-pointer text-white rounded-md text-sm" onClick={() => window.location.href = `/slug/${slug}`}>
            View Details
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyCard;
