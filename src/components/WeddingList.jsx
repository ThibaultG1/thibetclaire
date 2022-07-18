import { Container } from "@mui/material";
import React from "react";
import WebsiteButton from "./buttons/WebsiteButton";

const WeddingList = () => (
  <Container sx={{ textAlign: "center", my: 3 }} id="liste-de-mariage">
    <h2>Liste de Mariage</h2>
    <p>
      Plusieurs d'entre vous nous ont demandé une liste de mariage. On a donc
      pris le temps de rassembler quelques idées de cadeaux.
      <br />
      Pour les cadeaux les plus onéreux, vous pouvez aussi participer via la
      cagnotte en précisant dans le message pour quel cadeau vous contribuez.
      <br />
      Si vous ne trouvez pas votre bonheur dans cette liste, ne vous inquiétez
      pas, le plus beau des cadeaux c'est votre présence avec nous pour notre
      mariage 😊
    </p>
    <p>
      <WebsiteButton link="https://www.milirose.com/liste-cadeaux-357433.html">
        Parcourir la liste de mariage
      </WebsiteButton>
    </p>
  </Container>
);

export default WeddingList;
