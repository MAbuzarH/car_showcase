"use client";
import { SearchManifacturar } from "./";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClases }: { otherClases: string }) => (
  <button type="submit" className={`ml-3 z-10 ${otherClases}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
function SearchBar() {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manifecturer === " " && model === " ") {
      return alert("Please enter in search bar");
    }
    updateSearchParams(model.toLocaleLowerCase(),manifecturer.toLocaleLowerCase());
  };
  const updateSearchParams = (model: string, manifecturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    }else{
      searchParams.delete('model');
    }
    if (manifecturer) {
      searchParams.set("manifecturer", manifecturer);
    }else{
      searchParams.delete('manifecturer');
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push( newPathName);
  };
  const [manifecturer, setManifecturer] = useState("");
  const [model, setModel] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManifacturar
          manifecturer={manifecturer}
          setManifecturer={setManifecturer}
        />
      </div>
      <SearchButton otherClases="sm:hidden" />
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="img"
          className="absolute w-[20px] h-[20] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Trangel"
          className="searchbar__input"
        />
        <SearchButton otherClases="sm:hidden" />
      </div>
      <SearchButton otherClases="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
