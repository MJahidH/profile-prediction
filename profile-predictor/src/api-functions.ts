

export const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io?name=${name}`);
    return res.json();
  };
  
  export const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    return res.json();
  };
  
  export const getPredictedNationality = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io?name=${name}`);
    return res.json();
  };
  
  