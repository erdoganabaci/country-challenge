// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import MDButton from "components/MDButton";

const testDataArr = [1, 2, 3, 4, 5, 6];

function Dashboard() {
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <h1>Welcome to dashboard</h1>
      <MDButton color="info">Generate Report</MDButton>

      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {testDataArr.map((arr, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <MDBox mb={3}>
                  <SimpleBlogCard
                    image="https://bit.ly/3Hlw1MQ"
                    title="Card title"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim impedit veritatis officiis."
                    action={{
                      type: "internal",
                      route: `/dashboardDetail/${index}`,
                      color: "info",
                      label: "More Information",
                    }}
                  />
                </MDBox>
              </Grid>
            ))}
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
