import * as React from "react";
import type { ReactElement, ReactNode } from "react";

import { useRouter } from "next/router";

import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import LinkTab from "../components/LinkTab";

import DashboardLayout from "./DashboardLayout";
import AssessmentLayout from "./AssessmentLayout";

export default function ComplaintBasedLayout({
  children
}: {
  children: ReactNode;
}) {
  const { route, query } = useRouter();

  const { cid } = query;

  const routes = [
    `/dashboard/${cid}/assessment/complaint-based-assessment/respiratory`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/seizure`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/toxic-exposure`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/cardiac-arrest`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/chest-pain`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/neonatal`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/obstetric`,
    `/dashboard/${cid}/assessment/complaint-based-assessment/trauma/head`
  ];

  const [value, setValue] = React.useState<number>(
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
          aria-label="call details tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab label="Respiratory" href={routes[0]} />
          <LinkTab label="Seizure" href={routes[1]} />
          <LinkTab label="Toxic Exposure" href={routes[2]} />
          <LinkTab label="Cardiac Arrest" href={routes[3]} />
          <LinkTab label="Chest Pain" href={routes[4]} />
          <LinkTab label="Neonatal" href={routes[5]} />
          <LinkTab label="Obstetric" href={routes[6]} />
          <LinkTab label="Trauma" href={routes[7]} />
        </Tabs>
      </Box>
      <Box sx={{ py: 3 }}>{children}</Box>
    </Box>
  );
}

export const getLayout = (page: ReactElement) => (
  <DashboardLayout>
    <AssessmentLayout>
      <ComplaintBasedLayout>{page}</ComplaintBasedLayout>
    </AssessmentLayout>
  </DashboardLayout>
);
