"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type EntranceContextValue = {
  headerReady: boolean;
  onHeaderComplete: () => void;
};

const EntranceContext = createContext<EntranceContextValue>({
  headerReady: true,
  onHeaderComplete: () => {},
});

export function EntranceProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [headerReady, setHeaderReady] = useState(false);

  useEffect(() => {
    setHeaderReady(false);
  }, [pathname]);

  const onHeaderComplete = useCallback(() => setHeaderReady(true), []);

  return (
    <EntranceContext.Provider value={{ headerReady, onHeaderComplete }}>
      {children}
    </EntranceContext.Provider>
  );
}

export function useEntrance() {
  return useContext(EntranceContext);
}
