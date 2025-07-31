import React, { useEffect, useState } from "react";
import { fetchWeather, WeatherData } from './WeatherApi';

type DashbordProps = {
    selectedDate: Date | null;
};

const Dashbord: React.FC<DashbordProps> = ({ selectedDate }) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedDate) {
            const fetchWeatherData = async () => {
                setLoading(true);
                setError(null);
                try {
                    const weatherData = await fetchWeather(selectedDate);
                    setWeather(weatherData);
                } catch (error) {
                    setError('天気データの取得に失敗しました。');
                    setWeather(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchWeatherData();
        }
    }, [selectedDate]);

    return (
        <div style={{ textAlign: 'center', width: 'calc(100% - 100px)' }}>
            <h2>ダッシュボード</h2>
            <div
                style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: '400px',
                    backgroundColor: '#fff',
                    padding: '20px',
                    margin: '0 auto',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                }}
            >
                <p>
                    {selectedDate
                        ? `選択された日付: ${selectedDate.toLocaleDateString()}`
                        : '日付が選択されていません'}
                </p>
                {loading ? (
                    <p>天気情報を取得中...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : weather ? (
                    <div>
                        <p>気温: {weather.temperature}°C</p>
                        <p>天気: {weather.weather}</p>
                    </div>
                ) : (
                    <p>天気データが見つかりませんでした。</p>
                )}
            </div>
        </div>
    );
};

export default Dashbord;
