export const fetchNames = async () => {
  const response = await fetch(
    'https://mocki.io/v1/6e4f203f-4182-49a6-9a04-de84fc10b083'
  );
  return response.json();
};
