
import { CarProps,FilterProps } from "@/types";

export async function fatchCars(filter:FilterProps){
  const {manufacturer,year,fuel,limit,model}= filter;
    const headers = {
        'X-RapidAPI-Key': 'f3d0dbb3bbmshf63c7b4209d2968p1e8907jsn7abe9220c223',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com' 
    }
    const response =fetch ( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fule_type=${fuel}`,{
        headers : headers
    });
 const result = (await response).json()
 return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


export  const  genrateCarImageUrl = (car:CarProps ,angle?:string)=>{
  const{make,year,model} = car;
const url = new URL( `http://cdn.imagin.studio/getImage`);

url.searchParams.append('customer', 'hrjavascript-mastery' || '');
url.searchParams.append('make',make)
url.searchParams.append('modelFamily ',model.split(' ')[0])
url.searchParams.append('zoomType','fullscreen')
url.searchParams.append('modelYear',`${year}`)
url.searchParams.append('angle',`${angle}`)
return `${url}`;
 }
export const UpdateSearchParams = (type:string,value:string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type,value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};