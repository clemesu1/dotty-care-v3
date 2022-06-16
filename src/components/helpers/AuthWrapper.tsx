import { useSession } from "next-auth/react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { useRouter } from "next/router";
import ProtectedRoute from "./ProtectedRoute";
const authRoutes = ["/dashboard"];

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading")
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      {authRoutes.includes(router.pathname) ? (
        <ProtectedRoute>{children}</ProtectedRoute>
      ) : (
        children
      )}
    </>
  );
}
