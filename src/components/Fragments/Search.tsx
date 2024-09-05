"use client";

import React from "react";
import { Input, Button } from "@nextui-org/react";
import {SearchIcon} from "@/components/Elements/Iconts";

const SearchForm: React.FC = () => {
  return (
    <form className="flex items-center max-w-3xl mx-auto" action="">
      <Input
        type="search"
        color="default"
        radius="none"
        className="rounded-l-lg"
        placeholder="Search Mockups, Logos, Design Templates..."
        startContent={<SearchIcon className="h-5" />}
      />
      <Button
        type="submit"
        radius="none"
        color="primary"
        className="rounded-r-lg"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
