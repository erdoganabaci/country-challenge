// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// import Icon from "@mui/material/Icon";

import { useMaterialUIController } from "context";

function Detail() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card id="delete-account">
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <MDBox
            component="li"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            bgColor={darkMode ? "transparent" : "grey-100"}
            borderRadius="lg"
            p={3}
            mb={1}
            mt={2}
          >
            <MDBox width="100%" display="flex" flexDirection="column">
              <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexDirection={{ xs: "column", sm: "row" }}
                mb={2}
              >
                <MDBox width="100%" display="flex" flexDirection="column">
                  <MDTypography variant="h3" fontWeight="medium" textTransform="capitalize">
                    Turkey
                  </MDTypography>
                  <MDBox mb={1} mt={3} lineHeight={0}>
                    <MDTypography variant="body2" color="text">
                      Company Name:&nbsp;&nbsp;&nbsp;
                      <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
                        test company
                      </MDTypography>
                    </MDTypography>
                  </MDBox>

                  <MDBox mb={1} lineHeight={0}>
                    <MDTypography variant="body2" color="text">
                      Email Address:&nbsp;&nbsp;&nbsp;
                      <MDTypography variant="button" fontWeight="medium">
                        dsadsa@dsa.com
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                  <MDTypography variant="body2" color="text">
                    VAT Number:&nbsp;&nbsp;&nbsp;
                    <MDTypography variant="button" fontWeight="medium">
                      123456
                    </MDTypography>
                  </MDTypography>
                </MDBox>

                <MDBox
                  display="flex"
                  alignItems="center"
                  mt={{ xs: 2, sm: 0 }}
                  ml={{ xs: -1.5, sm: 0 }}
                >
                  <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
                    <MDBox
                      component="img"
                      // eslint-disable-next-line react/jsx-curly-brace-presence
                      src={`https://flagcdn.com/w320/tr.png`}
                      // eslint-disable-next-line react/jsx-curly-brace-presence
                      alt={`Turkish flag`}
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
                        backgroundImage: `url(${"https://flagcdn.com/w320/tr.png"})`,
                        transform: "scale(0.94)",
                        filter: "blur(12px)",
                        backgroundSize: "cover",
                      }}
                    />
                  </MDBox>
                </MDBox>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Detail;
