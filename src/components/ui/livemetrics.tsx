import React, { useState, useEffect, useRef } from "react";

type Metrics = {
  slippage?: number;
  fee?: number;
  marketImpact?: number;
  netCost?: number;
  makerRatio?: number;
  takerRatio?: number;
  latency?: number;
};

export default function LiveMetrics() {
  const socketRef = useRef<WebSocket | null>(null);
  const [metrics, setMetrics] = useState<Metrics>({});

  useEffect(() => {
    // Open the WebSocket connection
    const socket = new WebSocket("ws://localhost:8000/ws/metrics");
    socketRef.current = socket;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMetrics({slippage: data.expected_slippage,
    fee: data.expected_fee,
    marketImpact: data.market_impact,
    netCost: data.net_cost,
    makerRatio: data.maker_ratio,
    takerRatio: data.taker_ratio,
    latency: data.latency_ms,});
    };

    socket.onclose = () => console.log("WebSocket closed");

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <div><strong>Slippage:</strong> {metrics.slippage ?? "Calculating..."}</div>
      <div><strong>Fee:</strong> {metrics.fee ?? "Calculating..."}</div>
      <div><strong>Market Impact:</strong> {metrics.marketImpact ?? "Calculating..."}</div>
      <div><strong>Net Cost:</strong> {metrics.netCost ?? "Calculating..."}</div>
      <div><strong>Maker Ratio:</strong> {metrics.makerRatio ?? "Calculating..."}</div>
      <div><strong>Taker Ratio:</strong> {metrics.takerRatio ?? "Calculating..."}</div>
      <div><strong>Latency:</strong> {metrics.latency ?? "Calculating..."}</div>
    </div>
  );
}
