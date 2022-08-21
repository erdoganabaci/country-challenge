import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { useMaterialUIController } from "context";

function Detail() {
  const API_URL = `${process.env.REACT_APP_DEPLOYMENT_BASE_URL}/country/`;
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const { id: countryId } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(API_URL + countryId)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <Card id="detail-country">
      {country ? (
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
                      {country.countryName}
                    </MDTypography>

                    <MDBox mb={1} mt={3} lineHeight={0}>
                      <MDTypography variant="body2" color="text">
                        Calling Code:&nbsp;&nbsp;&nbsp;
                        <MDTypography
                          variant="button"
                          fontWeight="medium"
                          textTransform="capitalize"
                        >
                          {country.callingCode}
                        </MDTypography>
                      </MDTypography>
                    </MDBox>

                    <MDBox mb={1} lineHeight={0}>
                      <MDTypography variant="body2" color="text">
                        Capital:&nbsp;&nbsp;&nbsp;
                        <MDTypography
                          variant="button"
                          fontWeight="medium"
                          textTransform="capitalize"
                        >
                          {country.capital}
                        </MDTypography>
                      </MDTypography>
                    </MDBox>

                    <MDBox mb={1} lineHeight={0}>
                      <MDTypography variant="body2" color="text">
                        Population:&nbsp;&nbsp;&nbsp;
                        <MDTypography variant="button" fontWeight="medium">
                          {country.population}
                        </MDTypography>
                      </MDTypography>
                    </MDBox>
                    <MDBox mb={1} lineHeight={0}>
                      <MDTypography variant="body2" color="text">
                        Currency:&nbsp;&nbsp;&nbsp;
                        <MDTypography variant="button" fontWeight="medium">
                          {country.currency}
                        </MDTypography>
                      </MDTypography>
                    </MDBox>
                    <MDBox mb={1} lineHeight={0}>
                      <MDTypography variant="body2" color="text">
                        30 day Average of EUR/{country.currencyShortName}:&nbsp;&nbsp;&nbsp;
                        <MDTypography variant="button" fontWeight="medium">
                          {country.averageCurrency}
                        </MDTypography>
                      </MDTypography>
                    </MDBox>
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
                        src={`${country.flag}`}
                        alt={`${country.countryName} flag`}
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
                          backgroundImage: `url(${country.flag})`,
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
      ) : (
        <h1>Loading...</h1>
      )}
    </Card>
  );
}

export default Detail;
