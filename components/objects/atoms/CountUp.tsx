import { NextPage } from "next";
import { useEffect, useState } from "react";

type Props = {
  active: boolean;
  from: number;
  to: number;
  time: number;
};

const CountUp: NextPage<Props> = ({ active, from, to, time }: Props) => {
  const [count, setCount] = useState(from);
  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      if (count < to) {
        setCount(count + 1);
      }
    }, time / (to - from));
    return () => clearTimeout(timer);
  });
  return <span>{count}</span>;
};

export default CountUp;
