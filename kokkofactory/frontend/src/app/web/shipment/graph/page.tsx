"use client";
import React from 'react';
import LeftPullTab from "@components/LeftPullTab";
import { useShipment } from "@components/ShipmentContext";

export default function GraphPage() {
    const { shipments } = useShipment();

    return (
        <LeftPullTab>
            <div style={{ padding: "1rem" }}>
        <h1>グラフページ</h1>
        {shipments.length === 0 ? (
          <p>出荷情報がまだ Context にありません！</p>
        ) : (
          <>
            <p>出荷情報を Context から取得できています🎉</p>
            <ul>
              {shipments.map((s, i) => (
                <li key={i}>
                  {s.vendor} - {s.shippedCount} 個 ({new Date(s.shipmentDate).toLocaleDateString()})
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
        </LeftPullTab>
        
    );
}