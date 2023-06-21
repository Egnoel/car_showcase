'use client';
import React, { useState } from 'react';
import { SearchManufacturer } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === '' && model === '') {
      alert('Please enter a manufacturer and model');
    }
    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const params = new URLSearchParams(window.location.search);
    if (model) {
      params.set('model', model);
    } else {
      params.delete('model');
    }
    if (manufacturer) {
      params.set('manufacturer', manufacturer);
    } else {
      params.delete('manufacturer');
    }
    const newPathname = `${window.location.pathname}?${params.toString()}`;
    router.push(newPathname);
  };

  const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses={'sm:hidden'} />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses={'sm:hidden'} />
      </div>
      <SearchButton otherClasses={'max-sm:hidden'} />
    </form>
  );
};

export default SearchBar;
