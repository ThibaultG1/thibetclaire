import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import EmailButton from "./buttons/EmailButton";
import MapsButton from "./buttons/MapsButton";
import PhoneButton from "./buttons/PhoneButton";
import WebsiteButton from "./buttons/WebsiteButton";
import ChipInfo from "./ChipInfo";
import Collapsible from "./Collapsible";

const Accomodation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ textAlign: "center", my: 3 }}>
      <h2>Hébergement</h2>
      <p>
        Nous avons rassemblé différentes options d'hébergement à proximité des
        lieux des festivités. <br /> Du camping sauvage, à l'hôtel tout confort,
        en passant par de paisibles gîtes, il y en a pour tous les goûts et tous
        les budgets !
        <br />
        Certaines options ont déjà été réservées par nos soins, vous pourrez
        dans ce cas nous contacter directement si vous êtes intéressés.
      </p>
      <Box sx={{ textAlign: "left", px: 0 }}>
        <Collapsible
          title="Base de loisirs de Mervent"
          overview="36 couchages en lits supperposés, 4/chambre, 18.50€/pers"
          id="1"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="5" />
          <ChipInfo type="walk" info="15" />
          <p>
            85200 MERVENT
            <br />
            Nous avons réservé les 36 lits par anticipation. Merci de contacter
            Claire si vous souhaiter en bénéficier.
          </p>
          <PhoneButton num="06 29 34 69 09" />
          <WebsiteButton link="https://www.loisirs-sudvendee.fr/hébergement-restauration" />
          <MapsButton link="https://goo.gl/maps/8mjEms47StS8VAoE9" />
        </Collapsible>
        <Collapsible
          title="Camping de la Jamonière, Mervent"
          overview="Mobil-home, bungalow, emplacements tentes"
          id="2"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <p>
            85200 MERVENT
            <br />
            Le camping est géré par Marie-Andrée Normand, tante de Claire 😊
            <br />
            Merci de privilégier la réservation par téléphone ou email.
          </p>
          <PhoneButton num="02 51 00 26 29" />
          <EmailButton email="contact@camping-jamoniere.com" />
          <WebsiteButton link="http://camping-jamoniere.com" />
          <MapsButton link="https://goo.gl/maps/PM4ufXf1mKqwb2KW8" />
        </Collapsible>
        <Collapsible
          title="Camping (presque) sauvage!"
          overview="Terrain prêté pour ceux qui ont des tentes"
          id="3"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="walk" info="2" />
          <p>
            85200 MERVENT
            <br />
            Le terrain est généreusement prêté par Myriam Normand, cousine de
            Claire.
            <br />
            Il n'y a pas de sanitaire.
            <br />
            C'est assez grand, il y aura de la place pour tous!
          </p>
          <MapsButton link="https://goo.gl/maps/tDx8p2mEstZzMDHFA" />
        </Collapsible>
      </Box>
      <p>
        <strong>
          Nous actualisons ces jours-ci le site. Très prochainement d'autres
          hébergements seront listés. Merci de votre patience ! 🙂
        </strong>
      </p>
    </Container>
  );
};

export default Accomodation;
