"use client";

import { useState, useRef } from "react";

import styles from "@/app/aiChat/page.module.css";

export default function AIChat() {
  const [items, setItems] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const ClickEvent = () => {
    let count = 0;

    // 기존 interval 있으면 제거 (중복 방지)
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      count++;

      setItems((prev) => [...prev, Date.now()]);

      if (count === 3) {
        clearInterval(intervalRef.current!);
      }
    }, 1000);
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <div className={styles.thread}>
          <section className={styles.thread_core}>
            {items.map((item) => (
              <div key={item} className={styles.box}></div>
            ))}
          </section>
          <section className={styles.thread_controller} onClick={ClickEvent}>
            클릭
          </section>
        </div>
      </main>
    </div>
  );
}
