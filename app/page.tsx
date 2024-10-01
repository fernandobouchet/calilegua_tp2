import getSeriesData from "@/lib/getSeriesData";

export default async function Home() {
  const data = await getSeriesData();
  return (
    <div>
      <h1>The Office Wiki</h1>

      {data.overview}
    </div>
  );
}
