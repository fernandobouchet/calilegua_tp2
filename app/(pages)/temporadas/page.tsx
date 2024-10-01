import SeasonCard from "@/components/seasonCard";
import getSeriesData from "@/lib/getSeriesData";
import { seasons } from "@/types";

const Page = async () => {
  const data: seasons = await getSeriesData();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Temporadas de The Office</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {data.seasons.slice(1).map((season) => (
          <SeasonCard key={season.season_number} season={season} />
        ))}
      </div>
    </div>
  );
};

export default Page;
