import type { CountryDetail, ExternalCountryData } from "~/types/forCountry";

const GQL_ENDPOINT = "https://countries.trevorblades.com/";

export async function fetchCountryDetail(code: string): Promise<CountryDetail> {
  const res = await fetch(GQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query ($code: ID!) { 
        country(code: $code) { code name capital emoji currency continent { name } languages { name } states { name } } 
      }`,
      variables: { code },
    }),
  });

  if (!res.ok) {
    throw new Error("Network Error");
  }
  
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  if (!json.data?.country) throw new Error("Country not found");
  if (!json.data?.country) {
    const error = new Error("Country not found");
    (error as any).status = 404; 
    throw error;
  }
  return json.data.country;
}

export async function fetchExternalCountryData(code: string): Promise<ExternalCountryData> {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!res.ok) throw new Error("External API failure");
  
  const json = await res.json();
  if (!Array.isArray(json) || json.length === 0) throw new Error("No external data");
  
  return json[0];
}