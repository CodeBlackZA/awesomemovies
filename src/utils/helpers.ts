import { theme } from "./theme";

export const getColor = (avg: number) => {
  if (avg === 0) return theme.palette.grey;
  if (avg < 50) return "red";
  if (avg >= 50 && avg < 70) return theme.palette.yellow;
  return theme.palette.green;
}