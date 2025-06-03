import React from "react";

type SwitchCaseRenderProps<T extends string | number> = {
  value: T;
  children: Partial<Record<T | "default", React.ReactNode>>;
};

export function SwitchCaseRender<T extends string | number>({
  value,
  children,
}: SwitchCaseRenderProps<T>) {
  return <>{children[value] ?? children.default ?? null}</>;
}
