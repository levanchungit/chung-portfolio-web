"use client";
import React, { createContext, useContext, useState } from "react";

interface CounterContextProps {
  count: number;
  increaseCount: () => void;
}

const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

export function useCounter(): CounterContextProps {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increaseCount }}>
      {children}
    </CounterContext.Provider>
  );
}
