import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  Step,
  Stepper,
  StepLabel,
  useMediaQuery,
  useTheme,
  StepContent,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { ipoList } from "./utils";

export const IpoDetails = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("sm"));

  const routeId = useParams();
  const goBack = () => {
    navigate("/");
  };

  const detailsById = useMemo(() => {
    return ipoList.find((current) => current.route === routeId.id).details;
  }, [routeId]);

  const ResponsiveStepper = () => {
    if (isMobileSize) {
      return (
        <Stepper
          activeStep={6}
          orientation="vertical"
          sx={{ marginLeft: "20px" }}
        >
          {detailsById.ipoTimeLine.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography
                  sx={{ fontFamily: "Sora", whiteSpace: "nowrap" }}
                  fontWeight={"bold"}
                >
                  {step.label}
                </Typography>
                <Typography sx={{ fontFamily: "Sora" }} color="GrayText">
                  {step.date}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      );
    }
    return (
      <Stepper activeStep={6} alternativeLabel sx={{ padding: "20px" }}>
        {detailsById.ipoTimeLine.map((label) => (
          <Step key={label} or>
            <StepLabel>
              <Typography
                sx={{ fontFamily: "Sora", whiteSpace: "nowrap" }}
                fontWeight={"bold"}
              >
                {label.label}
              </Typography>
              <Typography sx={{ fontFamily: "Sora" }} color="GrayText">
                {label.date}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    );
  };

  return (
    <Box
      style={{
        width: `${isMobileSize ? "100%" : "70%"}`,
        margin: `${isMobileSize ? "0" : "100px auto"}`,
        border: "1px solid #f1f1f1",
        borderRadius: "16px",
      }}
    >
      <Box display={"flex"} alignItems={"center"} ml={2}>
        <Box display={"flex"} flexDirection={"column"} mt={2}>
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              onClick={goBack}
              sx={{
                border: "1px solid #f1f1f1",
                height: "40px",
                width: "40px",
                borderRadius: "8px",
                display: `${isMobileSize ? "none" : "block"}`,
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <Box display={"flex"} ml={isMobileSize ? 0 : 3}>
              <Avatar
                src="https://asset.brandfetch.io/idSXt7tZEr/idfqohTZyK.jpeg?updated=1667566408518"
                style={{ height: "40px", width: "40px" }}
              />
              <Typography
                fontSize="1.4rem"
                fontWeight={"bold"}
                sx={{ fontFamily: "Sora" }}
                ml={1}
              >
                {detailsById.companyName}
              </Typography>
            </Box>
          </Box>
          <Typography
            color={"GrayText"}
            sx={{ fontFamily: "Sora" }}
            ml={isMobileSize ? 6.5 : 14}
          >
            {detailsById.companyFullName}
          </Typography>
        </Box>
        <Box ml={"auto"} mr={2} display={isMobileSize ? "none" : "block"}>
          <IconButton
            sx={{
              border: "1px solid #f1f1f1",
              height: "40px",
              width: "40px",
              borderRadius: "8px",
              marginRight: "10px",
            }}
          >
            <DownloadIcon />
          </IconButton>
          <Button variant="contained" sx={{ bgcolor: "darkblue" }}>
            Apply now
          </Button>
        </Box>
      </Box>

      <Box border="1px solid #f1f1f1" borderRadius={"12px"} m={2}>
        <Typography
          fontSize="1.4rem"
          fontWeight={"bold"}
          sx={{ fontFamily: "Sora" }}
          ml={1}
          textAlign={"left"}
          m={2}
        >
          IPO Details
        </Typography>
        <Box border="1px solid #f1f1f1" m={2} borderRadius={"12px"}>
          <Box display={"flex"} flexWrap={"wrap"} m={2} gap={3}>
            {detailsById.ipoDetails.map((label) => (
              <Box
                flex={isMobileSize ? "1 1 35%" : "1 1 21%"}
                flexDirection={"column"}
                display={"flex"}
              >
                <Box>
                  <Typography
                    sx={{ fontFamily: "Sora" }}
                    textAlign={"left"}
                    color="GrayText"
                  >
                    {label.label}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{ fontFamily: "Sora" }}
                    textAlign={"left"}
                    fontWeight="bold"
                  >
                    {label.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box border="1px solid #f1f1f1" borderRadius={"12px"} m={2}>
        <Typography
          fontSize="1.4rem"
          fontWeight={"bold"}
          sx={{ fontFamily: "Sora" }}
          ml={1}
          textAlign={"left"}
          m={2}
        >
          IPO Timeline
        </Typography>
        <Box border="1px solid #f1f1f1" m={2} borderRadius={"12px"}>
          <ResponsiveStepper />
        </Box>
      </Box>

      <Box border="1px solid #f1f1f1" borderRadius={"12px"} m={2}>
        <Typography
          fontSize="1.4rem"
          fontWeight={"bold"}
          sx={{ fontFamily: "Sora" }}
          ml={1}
          textAlign={"left"}
          m={2}
        >
          About the company
        </Typography>
        <Box m={2}>
          <Typography sx={{ fontFamily: "Sora" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
