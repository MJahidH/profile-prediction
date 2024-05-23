interface Params {
  param: { name: string };
}

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
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


export default function Home({ params }: any) {
  return <main>{params.name}</main>;
}
