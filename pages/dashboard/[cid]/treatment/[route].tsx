import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getLayout } from "../../../../src/layouts/DashboardLayout";

import Interventions from "../../../../src/components/pages/interventions";
import Medications from "../../../../src/components/pages/medications";
import VitalSign from "../../../../src/components/pages/vital-sign";
import LinkTab from "../../../../src/components/LinkTab";

import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const routes = [
  {
    slug: "interventions",
    label: "Interventions",
    component: <Interventions />
  },
  {
    slug: "medications",
    label: "Medications",
    component: <Medications />
  },
  {
    slug: "vital-sign",
    label: "Vital Sign",
    component: <VitalSign />
  }
];

export default function TreatmentLayout() {
  const router = useRouter();

  const { route } = router.query;

  const [value, setValue] = useState(
    routes.findIndex((object) => {
      return object.slug === route;
    })
  );

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    router.push(`${route}/?page=${value}`, undefined, { shallow: true });
  };

  const handleNewPage = () => {
    setPages((pages) => pages + 1);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const findSlugMatchingCmp = () =>
    routes.find((cmp) => {
      return cmp.slug === route;
    });

  useEffect(() => {
    const foundComponent = findSlugMatchingCmp();
    if (route && foundComponent === null) router.push("/404");
  }, [router]);

  const cmp = findSlugMatchingCmp().component;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          aria-label="treatment tabs"
        >
          {routes.map((route) => (
            <LinkTab
              key={route.slug}
              label={route.label}
              href={`${route.slug}/?page=${page}`}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ p: 2, px: { xs: 1, md: 2 } }}>{cmp}</Box>
      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-end" }}
      >
        <Button size="small" variant="outlined" onClick={handleNewPage}>
          New
        </Button>
        <Pagination
          count={pages}
          siblingCount={0}
          boundaryCount={0}
          page={page}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          size="small"
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Box>
  );
}

TreatmentLayout.getLayout = getLayout;
