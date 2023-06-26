import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constat";
import { HomeProps } from "@/types";
import { fatchCars } from "@/utils";

import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fatchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  // console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl text-extrabold">Car Catalog</h1>
          <p>Explor the cars you might like!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container"></div>
          <CustomFilter title="fule" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper p-10 md:p-20 ">
            {allCars?.map((car) => (
              <CarCard car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </section>
      ) : (
        <div className="home__eror-container">
          <h2 className="text-bold text-xl text-black"> Opps, no result</h2>
          <p>{allCars?.massage}</p>
        </div>
      )}
    </main>
  );
}
