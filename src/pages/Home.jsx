import { Button, ButtonGroup, Container, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

import Accomodation from "../components/Accomodation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SaveTheDate from "../components/SaveTheDate";
import TableOfContents from "../components/TableOfContents";
import Timer from "../components/Timer";
import TouristAttractions from "../components/TouristAttractions";
import WeddingList from "../components/WeddingList";
import WelcomeOnboard from "../components/WelcomeOnboard";
import "./Home.css";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hasReceivedInvitation, setHasReceivedInvitation] = useState(
    searchParams.get("r")
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
          <Timer endDate="2022-08-20T13:30:00+01:00" />
        </Grid>
      </Box>
      <div ref={underBanner}></div>
      {!["0", "1"].includes(hasReceivedInvitation) ? (
        <Container sx={{ textAlign: "center", my: 3 }}>
          <h1>Avez-vous reçu un faire&#8209;part&nbsp;?</h1>
          <ButtonGroup
            variant="contained"
            size="large"
            aria-label="large button group"
            sx={{ mb: 2 }}
          >
            <Button onClick={() => setR("1")}>OUI</Button>
            <Button onClick={() => setR("0")}>NON</Button>
          </ButtonGroup>
        </Container>
      ) : (
        <>
          {hasReceivedInvitation === "0" && <SaveTheDate />}
          {hasReceivedInvitation === "1" && <WelcomeOnboard />}
          <TableOfContents />
          <Accomodation />
          <TouristAttractions />
          <WeddingList />
          <Divider />
          <Container sx={{ textAlign: "center" }}>
            {hasReceivedInvitation === "0" ? (
              <p>
                Vous avez déjà reçu un faire-part ?{" "}
                <Button variant="text" onClick={() => setR("1")}>
                  Cliquez ici
                </Button>
              </p>
            ) : (
              <p>
                Vous n'avez pas reçu de faire-part ?{" "}
                <Button variant="text" onClick={() => setR("0")}>
                  Cliquez ici
                </Button>
              </p>
            )}
          </Container>
        </>
      )}
      <Footer />
    </>
  );
}

export default Home;
