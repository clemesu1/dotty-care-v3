import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../../../utils/prisma";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const callTransaction = await prisma.callTransaction.findUnique({
    where: {
      id: String(params?.id)
    }
  });

  if (!callTransaction) {
    throw new Error("Call not found");
  }

  return {
    props: { callTransaction }
  };
};

export default function DashboardIndex({ callTransaction }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Authenticating ...</div>;
  }

  return <>{JSON.stringify(callTransaction)}</>;
}
