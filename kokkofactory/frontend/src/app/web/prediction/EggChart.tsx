// EggChart.tsx
//グラフ表示コンポーネント

"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  labels: string[];
  datasets: any[];
  options: any;
  isMounted: boolean;
};

export default function EggChart({ labels, datasets, options, isMounted }: Props) {
  if (!isMounted) return <p>データを読み込んでいます...</p>;

  return <Line data={{ labels, datasets }} options={options} />;
}