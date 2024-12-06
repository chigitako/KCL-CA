import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
if (!apiKey) {
    throw new Error('APIキーが設定されていません。環境変数を確認してください。');
}

const city = 'Fukuoka,JP'; // 福岡県飯塚市

export type WeatherData = {
    temperature: number;
    weather: string;
};

export const fetchWeather = async (date: Date): Promise<WeatherData> => {
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;
    console.log(url); // URLをコンソールに表示して、正しいか確認

    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;
    try {
        const response = await axios.get(url);
        console.log(response.data); // レスポンス内容を確認
        const data = response.data;
        return {
            temperature: data.main.temp,
            weather: data.weather[0].description,
        };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        if (axios.isAxiosError(error)) {
            // Axios エラーの場合、詳細な情報を表示
            console.error(error.response?.data); 
        }
        throw new Error('天気データの取得に失敗しました');
    }
};
