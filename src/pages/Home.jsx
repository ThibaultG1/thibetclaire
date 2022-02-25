import React from "react";
import { Button, Card, CardContent, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import Header from "../components/Header";
import "./Home.css";
import Timer from "../components/Timer";
import FileSaver from "file-saver";
import Footer from "../components/Footer";

function Home() {
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
          <Timer endDate="2022-08-20T14:00:00+01:00" />
        </Grid>
      </Box>
      <Container sx={{ textAlign: "center", my: 3 }}>
        <Card
          variant="outlined"
          sx={{
            backgroundColor: "#E1F0FF",
            borderRadius: 2,
            px: { xs: 0, sm: 3 },
          }}
        >
          <CardContent>
            <h1>
              Save the date&nbsp;! 🥳
              <br />
              Samedi 20 août 2022 en&nbsp;Vendée
            </h1>
            <p>
              Vous l’avez compris,{" "}
              <strong>✨ nous allons nous marier ✨</strong> et nous comptons
              sur vous&nbsp;!
              <br />
              Un faire-part vous sera adressé prochainement.
              <br />
              Nous mettrons ce site à jour au fur et à mesure de l’avancée des
              préparatifs.
            </p>
          </CardContent>
        </Card>
        <br />
        <Grid container spacing={2}>
          <Grid item sm>
            <h2>1. Notez la date dans vos agendas ✍️</h2>
            <p>
              20 août 2022, 20 août 2022, 20 août 2022.
              <br />
              C'est bon vous avez retenu ? Dans le doute, à vos agendas&nbsp;!
              <br />
              Si vous êtes super high techs / aventuriers, vous pouvez vous
              risquer à cliquer sur le bouton et ouvrir l'événement avec votre
              calendrier en ligne (Google, Outlook, iCloud, etc.). 😉
            </p>
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
          </Grid>
          <Grid item sm>
            <h2>2. Envoyez-nous vos coordonnées 🎯</h2>
            <p>
              Grâce à un formulaire simple et sécurisé, vous allez nous aider
              grandement en prévision de l'envoi des faire-part et pour
              faciliter l'organisation&nbsp;! ✉️
            </p>
            <Button
              variant="contained"
              size="large"
              startIcon={<ContactPageIcon />}
              onClick={() =>
                window.open(
                  "https://framaforms.org/mariage-de-claire-et-thibault-1645703062",
                  "_self"
                )
              }
            >
              ENVOYER SES COORDONNÉES
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
