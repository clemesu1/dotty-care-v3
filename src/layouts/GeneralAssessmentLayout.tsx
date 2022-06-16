import * as React from "react";
import type { ReactElement, ReactNode } from "react";

import { useRouter } from "next/router";

import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import LinkTab from "../components/LinkTab";

import DashboardLayout from "./DashboardLayout";
import AssessmentLayout from "./AssessmentLayout";

export default function GeneralAssessmentLayout({
  children
}: {
  children: ReactNode;
}) {
  const { route, query } = useRouter();

  const { cid } = query;

  const routes = [
    `/dashboard/${cid}/assessment/general-assessment/neuro-response`,
    `/dashboard/${cid}/assessment/general-assessment/abcs`,
    `/dashboard/${cid}/assessment/general-assessment/assessment-findings`
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
          aria-label="call details tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab label="Neuro Response" href={routes[0]} />
          <LinkTab label="ABC's" href={routes[1]} />
          <LinkTab label="Assessment Findings" href={routes[2]} />
        </Tabs>
      </Box>
      <Box sx={{ py: 3, px: 2 }}>{children}</Box>
    </Box>
  );
}

export const getLayout = (page: ReactElement) => (
  <DashboardLayout>
    <AssessmentLayout>
      <GeneralAssessmentLayout>{page}</GeneralAssessmentLayout>
    </AssessmentLayout>
  </DashboardLayout>
);
