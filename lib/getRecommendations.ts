const getRecommendations = async () => {
  try {
    const searchParams = new URLSearchParams({
      language: "es",
      api_key: process.env.API_KEY as string,
    });
    const response = await fetch(
      `${process.env.API_URL!}/recommendations?${searchParams}`
    );
    const data = await response.json();
    const filteredData = data.results.slice(0, 8);
    return filteredData;
  } catch (error) {
    console.log(error);
  }
};

export default getRecommendations;
