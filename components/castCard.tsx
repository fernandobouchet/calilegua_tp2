import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Cast } from "@/types";

interface Props {
  cast: Cast;
}

const CastCard = ({ cast }: Props) => {
  return (
    <Card className="overflow-hidden w-40">
      <CardContent className="p-0">
        <div className="relative aspect-square rounded-full">
          <Image
            src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            alt={cast.name}
            width={200}
            height={200}
            className="fill cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center p-4">
        <p className="text-lg font-semibold text-center">{cast.name}</p>
        <p className="text-sm text-gray-500 text-center">
          {cast.roles[0].character}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CastCard;
