// src/components/CardsScroller.tsx
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CardsScroller: FC<Props> = ({ children }) => {
  return <div className="flex gap-4 overflow-x-auto px-4 py-2">{children}</div>;
};
