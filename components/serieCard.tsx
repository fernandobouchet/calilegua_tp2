import { Series } from "@/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import Image from "next/image";
import VoteAverageBar from "./voteAverageBar";

interface Props {
  serie: Series;
}

const SerieCard = async ({ serie }: Props) => {
  return (
    <Card className="w-full overflow-hidden flex flex-col h-auto">
      <div className="relative min-h-52 sm:min-w-80 lg:min-w-96">
        <Image
          src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
          alt={`${serie.name} the office poster.`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{serie.name}</CardTitle>
        <CardDescription>
          {`${serie.first_air_date.split("-", 1)}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-sm text-gray-400">Valoración:</span>
        <VoteAverageBar voteAverage={serie.vote_average} />
      </CardContent>
      <CardFooter>
        <p className="line-clamp-6">{serie.overview}</p>
      </CardFooter>
    </Card>
  );
};

export default SerieCard;
