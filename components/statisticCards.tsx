import { Series } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface Props {
  data: Series;
}

const StatisticCards = ({ data }: Props) => {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
      <Card className="flex flex-col items-center">
        <CardHeader className="pt-4 pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Temporadas</CardTitle>
        </CardHeader>
        <CardContent className="pb-3 pt-1">
          <div className="text-2xl lg:text-3xl font-bold">
            {data.number_of_seasons}
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center">
        <CardHeader className="pt-4 pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Episodios</CardTitle>
        </CardHeader>
        <CardContent className="pb-3 pt-1">
          <div className="text-2xl lg:text-3xl font-bold">
            {data.number_of_episodes}
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center">
        <CardHeader className="pt-4 pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">En emisión</CardTitle>
        </CardHeader>
        <CardContent className="pb-3 pt-1">
          <div className="text-2xl lg:text-3xl font-bold text-nowrap">
            {`${data.first_air_date.split("-", 1)} • ${data.last_air_date.split(
              "-",
              1
            )}`}
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col items-center">
        <CardHeader className="pt-4 pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Calificación</CardTitle>
        </CardHeader>
        <CardContent className="pb-3 pt-1">
          <div className="text-2xl lg:text-3xl font-bold">
            {`${(data.vote_average * 10).toFixed(2)}%`}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticCards;
