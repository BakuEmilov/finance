import { HeroUIProvider } from "@heroui/react";
import { type ReactNode } from "react";

interface HeroUIProviderProps {
  children: ReactNode;
}

export default function HeroUIProviderWrapper({
  children,
}: HeroUIProviderProps) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
