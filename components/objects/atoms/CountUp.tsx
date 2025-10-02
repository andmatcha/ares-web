"use client";
import { useEffect, useState } from "react";

type Props = {
  active: boolean;
  from?: number;
  to: number;
  time: number;
};

const CountUp = ({ active, from, to, time }: Props) => {
  const [count, setCount] = useState(from ?? 0);
  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      if (count < to) {
        setCount(count + 1);
      }
    }, time / (to - (from ?? 0)));
    return () => clearTimeout(timer);
  });
  return <span>{count.toLocaleString()}</span>;
};

export default CountUp;
