// src/app/(after ai cam)/complex/cart/page.tsx
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

export default function Complex() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>주문리스트</span>를 <br />확인해 주세요
      </div>

      <div className={styles.main}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            <button className={styles.closeButton}  onClick={() => removeItem(index)}>×</button>
            <div className={styles.itemDetails}>
              <div>{item.name}</div>
              {item.options.map((option, idx) => (
                <div className={styles.itemDetails2} key={idx}>{option}</div>
              ))}
            </div>
            <div className={styles.itemControls}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className={styles.price}>{item.price}원</div>
          </div>
        ))}

        <div className={styles.orderSummary}>
          <div>총 수량: {items.length}</div>
          <div>주문금액: {items.reduce((total, item) => total + item.price, 0)}원</div>
        </div>

        <div className={styles.orderActions}>
          <Link href="/complex/menu/recommend">추가 주문 하기</Link>
          <Link href="/complex/pay" className={styles.primary}>결제 하기</Link>
        </div>
      </div>
    </div>
  );
}
