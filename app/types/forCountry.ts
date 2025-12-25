export type CountryDetail = {
  code: string;
  name: string;
  capital: string | null;
  emoji: string;
  currency: string;
  continent: { name: string };
  languages: { name: string }[];
  states: { name: string }[];
};

export type ExternalCountryData = {
  flags: { svg: string; alt: string };
  population: number;
  region: string;
  subregion: string;
  maps: { googleMaps: string };
  timezones: string[];
};
