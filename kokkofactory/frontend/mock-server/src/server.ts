import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
// Next.jsのデフォルト(3000)と被らないポートを使用
const PORT = 4000; 

// センサーデータの型定義
interface SensorData {
    timestamp: string;
    deviceId: string;
    airTemperature: number;
    humidity: number;
    waterTemperature: number;
}

// 連続的な変動のための初期値
let currentValues = {
    temp: 25.0,
    humidity: 60.0,
    waterTemp: 15.0,
};

// 値を微小変動させる関数
function generateNextValue(current: number, min: number, max: number, delta: number): number {
    const change = (Math.random() * delta * 2) - delta;
    let next = current + change;
    if (next < min) next = min;
    if (next > max) next = max;
    return parseFloat(next.toFixed(1));
}

app.use(cors({
    origin: 'http://localhost:3000', // Next.jsの開発サーバーのオリジンを明示的に許可
}));


// APIエンドポイントのパスを /api/v1/data と定義
app.get('/api/v1/data', (req: Request, res: Response<SensorData>) => {
    // 各センサー値を更新
    currentValues.temp = generateNextValue(currentValues.temp, 15, 35, 0.5);
    currentValues.humidity = generateNextValue(currentValues.humidity, 40, 80, 0.8);
    currentValues.waterTemp = generateNextValue(currentValues.waterTemp, 5, 25, 0.1);

    const mockData: SensorData = {
        timestamp: new Date().toISOString(),
        deviceId: "TS-MOCK-001",
        airTemperature: currentValues.temp,
        humidity: currentValues.humidity,
        waterTemperature: currentValues.waterTemp,
    };

    // 200 OKとしてJSONレスポンスを返す
    res.status(200).json(mockData);
});


// サーバー起動
app.listen(PORT, '0.0.0.0',() => {
    console.log(`✅ Mock Sensor API is running at http://localhost:${PORT}`);
});