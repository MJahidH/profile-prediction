import { promiseHooks } from "v8";


const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};


interface Params {
  params: { name: string };
}

export default async function Home({ params }: Params) {
  const ageData = getPredictedAge(params.name)
  const getGender = getPredictedGender(params.name)
  const countryData = getPredictedNationality(params.name)

  const [age,gender,country] = await Promise.all([ageData,getGender,countryData])
  
  
  return <main>{params.name}</main>;
}
