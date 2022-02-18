import React from "react";
import { Button, Card, CardContent, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

import Header from "../components/Header";
import "./Home.css";
import Timer from "../components/Timer";
import FileSaver from "file-saver";

function Home() {
  return (
    <div>
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
            height: "inherit",
            paddingBottom: 2,
          }}
        >
          <Timer endDate="2022-08-20T14:00:00+01:00" />
        </Grid>
      </Box>
      <Container sx={{ textAlign: "center", my: 3 }}>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#E1F0FF",
            borderRadius: 2,
            px: 3,
          }}
        >
          <CardContent>
            <h1>
              Save the date !<br />
              Samedi 20 août 2022 en Vendée
            </h1>
            <p>
              Vous l’avez compris, <strong>nous allons nous marier</strong> et
              nous comptons sur vous !
              <br />
              Un faire-part vous sera addressé prochainement.
              <br />
              Nous mettrons ce site à jour au fur et à mesure de l’avancée des
              préparatifs.
            </p>
          </CardContent>
        </Card>
        <br />
        <Button
          variant="contained"
          size="large"
          startIcon={<InsertInvitationIcon />}
          onClick={() => {
            FileSaver.saveAs(
              "./mariage-thibetclaire.ics",
              "mariage-thibetclaire.ics"
            );
          }}
        >
          AJOUTER AU CALENDRIER
        </Button>
      </Container>
    </div>
  );
}

export default Home;
