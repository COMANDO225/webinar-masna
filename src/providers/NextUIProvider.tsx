import { NextUIProvider as UIProvider } from "@nextui-org/react";

export function NextUIProvider({ children }: { children: React.ReactNode }) {
	return <UIProvider>{children}</UIProvider>;
}
