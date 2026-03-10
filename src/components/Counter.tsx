"use client";

import { useCounterStore } from "@/store/counterStore";

export default function Counter() {
  const { count, increase } = useCounterStore();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
    </div>
  );
}
