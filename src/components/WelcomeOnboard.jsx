import DraftsIcon from "@mui/icons-material/Drafts";
import { Button, Card, CardContent, Container } from "@mui/material";
import React from "react";

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
          Vous trouverez sur ce site des informations utiles pour préparer le
          jour J&nbsp;!
          <br />
          Vous pouvez{" "}
          <strong>répondre à l'invitation avant le 20 juin 2022</strong>
          <br />
          par courrier (via le coupon d'enregistrement fourni avec le
          faire-part), par téléphone ou en ligne.
        </p>
        <Button
          variant="contained"
          size="large"
          startIcon={<DraftsIcon />}
          onClick={() =>
            window.open(
              "https://framaforms.org/repondre-en-ligne-a-linvitation-1652460119",
              "_self"
            )
          }
        >
          RÉPONDRE EN LIGNE
        </Button>
      </CardContent>
    </Card>
  </Container>
);

export default WelcomeOnboard;
