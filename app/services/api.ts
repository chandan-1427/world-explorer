export const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com/";

export const GET_COUNTRIES_QUERY = `
  query { 
    countries { 
      code 
      name 
      capital 
      continent { name } 
    } 
  }
`;

export async function fetchCountries() {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: GET_COUNTRIES_QUERY }),
  });
  
  if (!response.ok) throw new Error("Network response was not ok");
  
  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0].message || "GraphQL Error");
  }

  return json.data?.countries ?? [];
}