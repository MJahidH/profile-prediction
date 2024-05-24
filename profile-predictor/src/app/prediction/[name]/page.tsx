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
    <div
      className="
    min-h-screen
    flex items-center
    justify-center
    
    "
    >
      <div
        className="

                    border-8
                    border-indigo-500
                    rounded-2xl
                    px-24
                    py-20

      "
      >
        <div
          className="
                text-4xl
                font-semibold

                text-indigo-500
                mb-10


        "
        >
          Prediction :
        </div>
        <div className="text-3xl pb-1">Name : {params.name}</div>
        <div className="text-3xl pb-1">Age : {age?.age}</div>
        <div className="text-3xl pb-1">Gender : {gender?.gender}</div>

        {/* I got the first array because the first index is the one with the highest probability  */}
        <div className="text-3xl pb-1">
          Nationality : {country?.country[0].country_id}
        </div>
      </div>
    </div>
  );
}
