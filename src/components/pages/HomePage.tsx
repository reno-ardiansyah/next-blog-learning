"use client";

import SearchForm from "@/components/Fragments/Search";
import CardItem from "@/components/Layouts/CardItem";
import { Pagination } from "@nextui-org/pagination";
import { CategoryInterface } from "@/app/types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();

  console.log(session);
  console.log(status);

  const categories: CategoryInterface[] = [
    { title: "Tech", slug: "tech" },
    { title: "Health", slug: "health" },
    { title: "Travel", slug: "travel" },
    { title: "Education", slug: "education" },
    { title: "Food", slug: "food" },
    { title: "Lifestyle", slug: "lifestyle" },
    { title: "Business", slug: "business" },
    { title: "Entertainment", slug: "entertainment" },
    { title: "Sports", slug: "sports" },
    { title: "Science", slug: "science" },
    { title: "Art", slug: "art" },
    { title: "Music", slug: "music" },
    { title: "Fashion", slug: "fashion" },
    { title: "History", slug: "history" },
    { title: "Nature", slug: "nature" },
    { title: "Politics", slug: "politics" },
    { title: "Economics", slug: "economics" },
    { title: "Culture", slug: "culture" },
    { title: "Philosophy", slug: "philosophy" },
    { title: "Psychology", slug: "psychology" },
  ];
  return (
    <div className="w-full text-gray-500">
      <SearchForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          showControls
          total={10}
          initialPage={1}
          className="pagination-custom"
        />
      </div>
      <div className="flex flex-wrap gap-4 p-4 w-full justify-between mt-5">
        {categories.map((category) => (
          <Button
            as={Link}
            href={`/category/${category.slug}`}
            key={category.slug}
            color="primary"
            variant="ghost"
          >
            {category.title}
          </Button>
        ))}
      </div>
    </div>
  );
}
