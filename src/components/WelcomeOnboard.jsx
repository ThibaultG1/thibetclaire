import { Card, CardContent, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MapsButton from "./buttons/MapsButton";

const WelcomeOnboard = () => (
  <Container sx={{ textAlign: "center", my: 3 }}>
    <Card
      variant="outlined"
      sx={{
        bgcolor: "primary.light",
        borderRadius: 2,
        px: { xs: 0, sm: 3 },
      }}
    >
      <CardContent>
        <h1>Bienvenue à bord&nbsp;! 😀</h1>
        <p>
          Voici un petit rappel des informations pratiques pour le samedi 20
          août.
          <h2>Programme</h2>
          <Box sx={{ display: "inline-block", textAlign: "left" }}>
            <ul style={{ marginTop: 0 }}>
              <li>
                Embarquement à <strong>13h30</strong> : Mairie de{" "}
                <strong>Mervent</strong> (85200)
              </li>
              <li>
                Escale à <strong>14h30</strong> : Eglise de{" "}
                <strong>Foussais-Payré</strong> (85240)
              </li>
              <li>
                Escale à <strong>16h30</strong> : Parc de la Mairie de{" "}
                <strong>Mervent</strong>
              </li>
              <li>
                Amarrage à <strong>19h</strong> : Salle Jean Louis Ripaud de{" "}
                <strong>Mervent</strong>
              </li>
            </ul>
          </Box>
        </p>
        <Grid container>
          <Grid item sm sx={{ width: "inherit" }}>
            <h2>Mairie de Mervent</h2>
            <MapsButton link="https://goo.gl/maps/v6Ubegbh9DWAAPR66" />
          </Grid>
          <Grid item sm sx={{ width: "inherit" }}>
            <h2>Eglise de Foussais-Payré</h2>
            <MapsButton link="https://goo.gl/maps/F2rW8gH6HjgjLoJe7" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Container>
);

export default WelcomeOnboard;
