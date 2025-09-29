//出荷一覧の情報を保持する
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ShipmentDetails {
  vendor: string;
  address: string | null;
  phoneNumber: string | null;
  email: string | null;
  shipmentDate: string;
  shippedCount: number;
}

interface ShipmentContextType {
  shipments: ShipmentDetails[];
  setShipments: (data: ShipmentDetails[]) => void;
}

const ShipmentContext = createContext<ShipmentContextType | undefined>(undefined);

export const ShipmentProvider = ({ children }: { children: ReactNode }) => {
  const [shipments, setShipments] = useState<ShipmentDetails[]>([]);
  return (
    <ShipmentContext.Provider value={{ shipments, setShipments }}>
      {children}
    </ShipmentContext.Provider>
  );
};

export const useShipment = () => {
  const context = useContext(ShipmentContext);
  if (!context) throw new Error("useShipment must be used within ShipmentProvider");
  return context;
};
