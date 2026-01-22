//dummyData.ts
//産卵予測用ダミーデータ生成

import { PredictionDataPoint } from "./predictionUtils";

export const generateDummyData = (days: number): PredictionDataPoint[] => {
  const data: PredictionDataPoint[] = [];
  const today = new Date("2025-12-10"); 
  let basePotential = 1000;

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() - (days - 1) + i);
    const dateStr = currentDate.toISOString().split("T")[0];

    const potentialChange =
      Math.sin(i / 5) * 50 + (Math.random() - 0.5) * 20;

    basePotential += potentialChange;

    const potential = Math.max(900, Math.min(1300, basePotential));
    const predicted = Math.round(500 + 0.5 * (potential - 1100));
    const actual = predicted + Math.round((Math.random() - 0.5) * 50);

    data.push({
      date: dateStr,
      predictedCount: Math.max(450, predicted),
      actualCount: Math.max(450, actual),
      cumulativePotential: Math.round(potential),
    });
  }
  return data;
};

export const DUMMY_PREDICTION_DATA = generateDummyData(60);