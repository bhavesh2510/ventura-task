import { Avatar, Box, Divider, Typography } from "@mui/material";
import { ipoList } from "./utils";
import { useNavigate } from "react-router-dom";

export const IpoList = () => {
  const navigate = useNavigate();
  const goToDetails = (id) => () => {
    navigate(`/details/${id}`);
  };
  return (
    <Box
      style={{
        width: "70%",
        margin: "100px auto",
        border: "1px solid #f1f1f1",
        borderRadius: "16px",
      }}
    >
      {ipoList.map((currentIpo, id) => {
        return (
          <>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              gap={5}
              key={id}
              onClick={goToDetails(currentIpo.route)}
              sx={{ cursor: "pointer" }}
            >
              <Box
                height={"80px"}
                width={"250px"}
                display={"flex"}
                alignItems={"center"}
                ml={2}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Avatar
                      src="https://asset.brandfetch.io/idSXt7tZEr/idfqohTZyK.jpeg?updated=1667566408518"
                      style={{ height: "30px", width: "30px" }}
                    />
                    <Typography fontWeight={"bold"} sx={{ fontFamily: "Sora" }}>
                      {currentIpo.name}
                    </Typography>
                  </Box>
                  <Typography
                    color={"GrayText"}
                    sx={{ fontFamily: "Sora" }}
                    ml={5}
                  >
                    {currentIpo.date}
                  </Typography>
                </Box>
              </Box>
              <Box
                height={"80px"}
                width={"100px"}
                display={"flex"}
                alignItems={"center"}
              >
                <Typography fontWeight={"bold"} sx={{ fontFamily: "Sora" }}>
                  {currentIpo.issueSize}
                </Typography>
              </Box>
              <Box
                height={"80px"}
                width={"100px"}
                display={"flex"}
                alignItems={"center"}
              >
                <Typography fontWeight={"bold"} sx={{ fontFamily: "Sora" }}>
                  {currentIpo.priceRange}
                </Typography>
              </Box>
              <Box
                height={"80px"}
                width={"200px"}
                display={"flex"}
                alignItems={"center"}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography fontWeight={"bold"} sx={{ fontFamily: "Sora" }}>
                    {currentIpo.minInvest}
                  </Typography>
                  <Typography color={"GrayText"} sx={{ fontFamily: "Sora" }}>
                    {currentIpo.noOfShares}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ width: "100%" }} />
          </>
        );
      })}
    </Box>
  );
};
