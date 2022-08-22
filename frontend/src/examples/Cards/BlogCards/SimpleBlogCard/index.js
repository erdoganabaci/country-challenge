/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function SimpleBlogCard({ image, title, population, capital, action, dataTestId }) {
  return (
    <Card>
      <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
        <MDBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="relative"
          zIndex={1}
        />
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top="3%"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox p={3}>
        <MDTypography display="inline" variant="h3" textTransform="capitalize" fontWeight="bold">
          {title}
        </MDTypography>
        <MDBox mt={2} mb={3} display="flex" flexDirection="column">
          <MDBox mb={1} lineHeight={0}>
            <MDBox mb={1} lineHeight={0}>
              <MDTypography variant="body2" color="text">
                Population:&nbsp;&nbsp;&nbsp;
                <MDTypography variant="button" fontWeight="medium">
                  {population}
                </MDTypography>
              </MDTypography>
            </MDBox>

            <MDTypography variant="body2" color="text">
              Capital:&nbsp;&nbsp;&nbsp;
              <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                {capital}
              </MDTypography>
            </MDTypography>
            <MDTypography variant="body2" color="text">
              <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                ...
              </MDTypography>
            </MDTypography>
          </MDBox>
        </MDBox>
        {action && (
          <Link to={action.route}>
            <MDButton dataTestId={dataTestId} color={action.color ? action.color : "dark"}>
              {action.label}
            </MDButton>
          </Link>
        )}
      </MDBox>
    </Card>
  );
}

export default SimpleBlogCard;
