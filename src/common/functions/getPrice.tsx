const BASE_URL = "https://api3.binance.com/api/v3/klines";

export default async function getPrice(
  symbol: string = "BTCUSDT",
  interval: string,
  limit: number,
  startTime?: number,
  endTime?: number,
): Promise<{ closes: number[]; times: string[] }> {
  let url = `${BASE_URL}?symbol=${symbol}&interval=${interval}&limit=${limit}`;

  if (startTime) {
    url += `&startTime=${startTime}`;
  }
  if (endTime) {
    url += `&endTime=${endTime}`;
  }

  const res = await fetch(url);
  const data = await res.json();
  const closes = data.map((candle: any) => parseFloat(candle[4]));
  const times = data.map((candle: any) =>
    new Date(candle[0]).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  );

  return { closes, times };
}
