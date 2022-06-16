import * as React from "react";
import type { ReactElement, ReactNode } from "react";

import { useRouter } from "next/router";

import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import DashboardLayout from "./DashboardLayout";
import LinkTab from "../components/LinkTab";

export default function AssessmentLayout({
  children
}: {
  children: ReactNode;
}) {
  const { route, query } = useRouter();

  const { cid } = query;

  const routes: string[] = [
    `/dashboard/${cid}/assessment/patient-history/general`,
    `/dashboard/${cid}/assessment/general-assessment/neuro-response`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/respiratory`,
    `/dashboard/${cid}/assessment/mechanism-of-injury`
  ];
  const [value, setValue] = React.useState(
    routes.indexOf(route.replace("[cid]", cid as string))
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="assessment tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab label="Patient History" href={routes[0]} />
          <LinkTab label="General Assessment" href={routes[1]} />
          <LinkTab
            label="Complaint Based Assessment & History"
            href={routes[2]}
          />
          <LinkTab label="Mechanism of Injury" href={routes[3]} />
        </Tabs>
      </Box>
      <Box sx={{ py: 3, px: 2 }}>{children}</Box>
    </Box>
  );
}

export const getLayout = (page: ReactElement) => (
  <DashboardLayout>
    <AssessmentLayout>{page}</AssessmentLayout>
  </DashboardLayout>
);
