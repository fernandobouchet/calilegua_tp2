import SeasonCard from "@/components/seasonCard";
import getSeriesData from "@/lib/getSeriesData";
import { Seasons } from "@/types";

const Page = async () => {
  const data: Seasons = await getSeriesData();
  return (
    <section className="container mx-auto px-4 py-8 xl:max-w-screen-xl">
      <h1 className="text-3xl font-bold pt-4 pb-8 text-center">
        Temporadas de The Office
      </h1>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:items-stretch">
        {data.seasons.slice(1).map((season) => (
          <SeasonCard key={season.season_number} season={season} />
        ))}
      </div>
    </section>
  );
};

export default Page;
