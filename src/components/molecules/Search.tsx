'use client';

import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import SearchIcon from '../atoms/SearchIcon';

const SearchForm: React.FC = () => {
  return (
    <form className="flex items-center max-w-3xl mx-auto">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon className="me-2" />
        </div>
        <Input type="text" id="voice-search" placeholder="Search Mockups, Logos, Design Templates..." required />
      </div>
      <Button
        type="submit"
        className="ms-2 text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <SearchIcon className="me-2" />
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
