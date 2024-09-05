import React from "react";
import { BlogInterface, UserInterface } from "@/app/types";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { Link2Icon } from "@radix-ui/react-icons";

const CardItem: React.FC = () => {
  return (
    <Card className="py-4 relative group">
      <CardHeader className="pb-0 pt-1 px-4 flex-col items-start relative max-h-50 min-h-50">
        <div className="overflow-hidden rounded-md border border-gray-300">
          <Image
            alt="Card background"
            className="object-cover transition-transform duration-300 scale-105 group-hover:scale-110"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </div>
        <Button
          as={Link}
          href="/category"
          variant="solid"
          radius="sm"
          size="md"
          className="absolute top-5 left-7 text-tiny text-white bg-blue-500 z-10"
        >
          Category
        </Button>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-xl">Frontend Radio</h4>
        <small className="text-xs">By. Author</small>
        <hr className="w-20 my-1" />
        <p className="text-tiny">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dignissimos, atque dolorum dolores impedit vitae a quos odio iusto
          accusamus explicabo reprehenderit facilis vero porro maxime commodi
          nesciunt voluptates veniam....
        </p>
      </CardBody>
      <div className="z-10 absolute flex items-center justify-center inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          as={Link}
          href="#"
          color="primary"
          variant="solid"
          radius="sm"
          size="md"
          endContent={<Link2Icon />}
        >
          Show Detail
        </Button>
      </div>
    </Card>
  );
};

export default CardItem;
