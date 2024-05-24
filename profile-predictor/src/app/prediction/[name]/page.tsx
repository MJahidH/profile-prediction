import {
  getPredictedAge,
  getPredictedGender,
  getPredictedNationality,
} from "../../../api-functions";

interface Params {
  params: { name: string };
}

export default async function Home({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedNationality(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <div>
      <div>
        <div>Prediction∆</div>
        <div>Name : {params.name}</div>
        <div>Age : {age?.age}</div>
        <div>Gender : {gender?.gender}</div>

        {/* I got the first array because the first index is the one with the highest probability  */}
        <div>Nationality : {country?.country[0].country_id}</div>
      </div>
    </div>
  );
}
