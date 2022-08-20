import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import MDButton from "components/MDButton";

const API_URL = `${process.env.REACT_APP_BASE_URL}/countries`;

function Dashboard() {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, []);
  return (
    <DashboardLayout>
      <a href="/dashboard" style={{ color: "white" }}>
        <h2>Country Information</h2>
      </a>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={2}>
          <MDButton color="info">Generate Report</MDButton>
        </Grid>
      </Grid>
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {countryData ? (
              countryData.map((country) => (
                <Grid item xs={12} md={6} lg={4} key={country.id}>
                  <MDBox mb={3}>
                    <SimpleBlogCard
                      image={country.flag}
                      title={country.countryName}
                      population={country.population}
                      capital={country.capital}
                      action={{
                        type: "internal",
                        route: `/dashboardDetail/${country.id}`,
                        color: "info",
                        label: "More Information",
                      }}
                    />
                  </MDBox>
                </Grid>
              ))
            ) : (
              <h1>Loading</h1>
            )}
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
