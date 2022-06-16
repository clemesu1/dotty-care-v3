import { useSession } from "next-auth/react";
import { useEffect } from "react";

import type { ReactNode } from "react";
import { useRouter } from "next/router";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { status } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [router, status]);

  if (status === "unauthenticated") return null;

  return <>{children}</>;
}
