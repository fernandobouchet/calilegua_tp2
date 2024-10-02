import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Episode } from "@/types";
import Image from "next/image";
import { Progress } from "./ui/progress";

interface Props {
  episode: Episode;
}

const EpisodeCard = ({ episode }: Props) => {
  return (
    <Card className="w-full overflow-hidden flex flex-col h-auto">
      <div className="relative min-h-52 sm:min-w-80 lg:min-w-96">
        <Image
          src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
          alt={`${episode.name} the office poster.`}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded">
          Episodio {episode.episode_number}
        </div>
      </div>
      <div>
        <CardHeader>
          <CardTitle>{episode.name}</CardTitle>
          <CardDescription>
            Episodio {episode.episode_number} • {episode.air_date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between"></div>
          <span className="text-sm text-gray-400">Valoración:</span>
          <div className="flex items-center gap-2">
            <Progress
              className="[&>*]:!bg-green-600 h-3"
              value={episode.vote_average * 10}
            />
            <span className="text-sm">{episode.vote_average * 10}%</span>
          </div>
        </CardContent>
        <CardFooter>
          <p>{episode.overview}</p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default EpisodeCard;
