import SeasonCard from "@/components/seasonCard";
import getSeriesData from "@/lib/getSeriesData";
import { Seasons } from "@/types";

const Page = async () => {
  const data: Seasons = await getSeriesData();
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold pt-4 pb-8 text-center">
        Temporadas de The Office
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {data.seasons.slice(1).map((season) => (
          <SeasonCard key={season.season_number} season={season} />
        ))}
      </div>
    </section>
  );
};

export default Page;
