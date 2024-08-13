"use client";

import React from "react";
import Card from "../Fragments/Card/CardContainer";
import CardHeader from "../Fragments/Card/CardHeader";
import CardContent from "../Fragments/Card/CardContent";
import CardFooter from "../Fragments/Card/CardFooter";
import { BlogInterface, UserInterface } from "@/app/types";

const author: UserInterface = {
  avatar: "/path/to/avatar.jpg",
  fullname: "Sutiono S.Kom., M.Kom ., M.T.I",
  nickname: "Sutiono",
  dob: new Date("1980-01-01"),
  email: "sutiono@example.com",
  password: "password123",
};

const blog: BlogInterface = {
  title: "Noteworthy technology acquisitions 2021",
  description:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order...",
  imageUrl: "/docs/images/blog/image-1.jpg",
};

const CardItem: React.FC = () => {
  return (
    <Card className="mb-10">
      <CardHeader imageSrc={blog.imageUrl} imageAlt={blog.title} />
      <CardContent
        title={blog.title}
        author={author}
        description={blog.description}
      />
      <div className="p-5">
        <CardFooter slug="#" />
      </div>
    </Card>
  );
};

export default CardItem;
