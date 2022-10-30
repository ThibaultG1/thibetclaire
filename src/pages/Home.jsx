import { Button, ButtonGroup, Container, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Timer from "../components/Timer";
import "./Home.css";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasReceivedInvitation, setHasReceivedInvitation] = useState(
    searchParams.get("r") == null ? "1" : searchParams.get("r")
  );
  const isFirstMount = useRef(true);
  const underBanner = useRef(null);

  const setR = (value) => {
    setHasReceivedInvitation(value);
    setSearchParams(createSearchParams({ r: value }));
  };

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    } else {
      underBanner.current.scrollIntoView({ behavior: "smooth" });
    }
    return isFirstMount.current;
  }, [hasReceivedInvitation]);

  return (
    <>
      <Header />
      <Box
        sx={{
          height: "100vh",
          maxHeight: "130vw",
          background: "url(./img/lavande-photo.jpg) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "60% 30%",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
          sx={{
            height: "100%",
            paddingBottom: 2,
          }}
        >
          <Timer endDate="2022-08-20T13:30:00+02:00" />
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
