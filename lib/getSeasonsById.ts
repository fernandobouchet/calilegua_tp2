const getAllSeasons = async () => {
  const searchParams = new URLSearchParams({
    language: "es",
    api_key: process.env.API_KEY as string,
  });
  const response = await fetch(`${process.env.API_URL!}?${searchParams}`);

  return response.json();
};

export default getAllSeasons;
