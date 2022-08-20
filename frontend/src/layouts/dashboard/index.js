import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import MDButton from "components/MDButton";
import Footer from "examples/Footer";

const API_URL = `${process.env.REACT_APP_DEPLOYMENT_BASE_URL}/countries`;
function Dashboard() {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, []);

  const onExport = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(countryData);
    XLSX.utils.book_append_sheet(wb, ws, "CountrySheet1");
    XLSX.writeFile(wb, "CountryReport.xlsx");
  };

  return (
    <DashboardLayout>
      <a href="/dashboard" style={{ color: "white" }}>
        <h2>Country Information</h2>
      </a>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={2}>
          <MDButton onClick={onExport} color="info">
            Generate Report
          </MDButton>
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
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
