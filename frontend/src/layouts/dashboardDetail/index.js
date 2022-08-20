// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Detail from "layouts/dashboardDetail/detailComponent/";

import Breadcrumbs from "examples/Breadcrumbs";

function DashboardDetail() {
  return (
    <DashboardLayout>
      <Breadcrumbs
        icon="home"
        title="Detail Country Information"
        route={["dashboards", "detail"]}
      />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} />
            <Grid item xs={12} md={6}>
              <Detail />
            </Grid>
            <Grid item xs={12} md={2} />
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default DashboardDetail;
