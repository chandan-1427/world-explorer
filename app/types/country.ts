export type ContinentName = 
  | "Africa" | "Asia" | "Europe" 
  | "North America" | "South America" 
  | "Oceania" | "Antarctica" | "All";

export interface Country {
  code: string;
  name: string;
  capital: string | null;
  continent: { name: Exclude<ContinentName, "All"> };
}