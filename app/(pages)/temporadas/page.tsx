import getSeriesData from "@/lib/getSeriesData";
import { seasons } from "@/types";
import Image from "next/image";

const Page = async () => {
  const data: seasons = await getSeriesData();
  return (
    <div>
      {data.seasons.map((season) => (
        <div key={season.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
            alt={`${season.name} the office poster.`}
            width={500}
            height={500}
          />
          <p>{season.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
