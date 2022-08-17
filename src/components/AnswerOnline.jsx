import DraftsIcon from "@mui/icons-material/Drafts";
import { Button, Container } from "@mui/material";
import React from "react";

const AnswerOnline = () => (
  <Container sx={{ textAlign: "center", my: 3 }} id="repondre-invitation">
    <h2>Répondre à l'invitation</h2>
    <p>
      Vous pouvez <strong>répondre à l'invitation avant le 20 juin 2022</strong>
      <br />
      par courrier (via le coupon d'enregistrement fourni avec le faire-part),
      par téléphone ou en ligne.
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
  </Container>
);

export default AnswerOnline;
