//predictionUtils.ts
//産卵予測ロジックユーティリティ群

export type GroupBy = "day" | "week" | "month"; 

export interface PredictionDataPoint {
  date: string; 
  predictedCount: number; 
  actualCount: number;
  cumulativePotential: number;
}

export const makeKey = (date: Date, mode: GroupBy): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");

  if (mode === "day") return `${y}-${m}-${d}`; 
  if (mode === "month") return `${y}-${m}`; 

  if (mode === "week") {
    const dayOfWeek = (date.getDay() + 6) % 7; // 月曜始まり
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - dayOfWeek);

    const sy = startOfWeek.getFullYear();
    const sm = String(startOfWeek.getMonth() + 1).padStart(2, "0");
    const sd = String(startOfWeek.getDate()).padStart(2, "0");
    return `${sy}-${sm}-${sd}`; 
  }
  return "";
};

export const keyToDate = (key: string, mode: GroupBy): Date => {
  if (mode === "day" || mode === "week") {
    return new Date(`${key}T00:00:00`);
  }
  if (mode === "month") {
    const [y, m] = key.split("-");
    return new Date(Number(y), Number(m) - 1, 1);
  }
  return new Date(1970, 0, 1);
};

export const formatKeyLabel = (key: string, mode: GroupBy): string => {
  if (mode === "day") return keyToDate(key, "day").toLocaleDateString();
  if (mode === "week") return keyToDate(key, "week").toLocaleDateString() + " (週)";
  if (mode === "month") {
    const [y, m] = key.split("-");
    return `${y}年${m}月`;
  }
  return "";
};