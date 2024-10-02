import EpisodeCard from "@/components/episodeCard";
import getSeasonsById from "@/lib/getSeasonsById";
import { Season } from "@/types";

const Page = async ({ params }: { params: { temporadaId: number } }) => {
  const data: Season = await getSeasonsById(params.temporadaId.toString());
  return (
    <section className="container mx-auto px-4 py-8 xl:max-w-screen-xl">
      <div className="pt-4 pb-8 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Temporada {params.temporadaId}
        </h1>
        <p>{data.overview}</p>
      </div>
      <div className="flex flex-col items-stretch sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.episodes!.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
};

export default Page;
