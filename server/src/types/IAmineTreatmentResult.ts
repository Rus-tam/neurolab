export interface IAmineTreatmentResult {
  "sweet_gas temperature, C": number;
  "rich_amine temperature, C": number;
  "rich_amine mass flow, kg/h": number;
  "sweet_gas mass flow, kg/h": number;
  "feed_gas mol weight": number;
  "lean_amine mol weight": number;
  "rich_amine mol weight": number;
  "sweet_gas mol weight": number;
  "sweet_gas H2S ppm": number;
  "sweet_gas CO2 ppm": number;
  "rich_amine H2S mol frac": number;
  "rich_amine CO2 mol frac": number;
  "rich_amine H2O mol frac": number;
  "rich_amine MDEA mol frac": number;
}
