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
          <ChipInfo type="car" info="4" />
          <ChipInfo type="walk" info="22" />
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
          <ChipInfo type="car" info="6" />
          <p>
            85200 MERVENT
            <br />
            Le camping est géré par Marie-Andrée Normand, tante de Claire 😊
            <br />
            Merci de privilégier la réservation par téléphone ou email.
          </p>
          <WebsiteButton link="http://camping-jamoniere.com" />
          <PhoneButton num="02 51 00 26 29" />
          <EmailButton email="contact@camping-jamoniere.com" />
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
            <br />
            Merci de contacter Claire si vous souhaiter en bénéficier.
          </p>
          <PhoneButton num="06 29 34 69 09" />
          <MapsButton link="https://goo.gl/maps/tDx8p2mEstZzMDHFA" />
        </Collapsible>
        <Collapsible
          title="Camping de la grande perrure, Mervent"
          overview="Camping à la ferme : arriver avec sa tente"
          id="4"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="6" />
          <p>85200 MERVENT</p>
          <WebsiteButton link="https://facebook.com/campingperrure" />
          <PhoneButton num="06 75 14 13 08" />
          <EmailButton email="campingperrure85@gmail.com" />
          <MapsButton link="https://goo.gl/maps/MBziFsQPd5UDmDyJA" />
        </Collapsible>
        <Collapsible
          title="Camping La Joletiere"
          overview="Camping 3 étoiles avec piscine"
          id="5"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="2" />
          <ChipInfo type="walk" info="12" />
          <p>85200 MERVENT</p>
          <WebsiteButton link="https://www.campinglajoletiere.fr" />
          <PhoneButton num="02 51 00 26 87" />
          <EmailButton email="camping.la.joletiere@wanadoo.fr" />
          <MapsButton link="https://g.page/camping-la-joletiere?share" />
        </Collapsible>
        <Collapsible
          title="Auberge de la forêt"
          overview="Auberge simple et au calme dans la nature"
          id="6"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="5" />
          <ChipInfo type="walk" info="32" />
          <p>Lieu dit "les Essarts", 85200 Mervent</p>
          <PhoneButton num="02 53 72 93 11" />
          <PhoneButton num="06 34 95 10 59" />
          <MapsButton link="https://goo.gl/maps/cdzX8J5EeGbabXgr6" />
        </Collapsible>
        <Collapsible
          title="L’Auberge de Maitre Pannetier, Vouvant"
          overview="4 chambres d’hôtes dont 1 chambre pour 4 à 120€, 1 chambre pour 3  à 78/87€"
          id="7"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="13" />
          <p>8 Place du Corps de Garde, 85120 VOUVANT</p>
          <WebsiteButton link="https://www.maitrepannetier.com" />
          <PhoneButton num="02 51 00 80 12" />
          <EmailButton email="aubergedemaitrepannetier@gmail.com" />
          <MapsButton link="https://goo.gl/maps/c1TkNM14m5fqwuqd8" />
        </Collapsible>
        <Collapsible
          title="Les chambres de la Porte aux Moines, Vouvant"
          overview="2 chambres de 70€/nuit pour 2"
          id="8"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="13" />
          <p>7 Rue de la Porte aux Moines, 85120 Vouvant</p>
          <p>Marie-Line & Jean-Louis METAY</p>
          <WebsiteButton link="https://www.laporteauxmoines.com" />
          <PhoneButton num="02 53 72 01 37" />
          <MapsButton link="https://goo.gl/maps/Aqm51teJKDWs54gn6" />
        </Collapsible>
        {/* <Collapsible
          title=""
          overview=""
          id="9"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="" />
          <ChipInfo type="walk" info="" />
          <p></p>
          <WebsiteButton link="" />
          <PhoneButton num="" />
          <EmailButton email="" />
          <MapsButton link="" />
        </Collapsible>
        <Collapsible
          title=""
          overview=""
          id="10"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="" />
          <ChipInfo type="walk" info="" />
          <p></p>
          <WebsiteButton link="" />
          <PhoneButton num="" />
          <EmailButton email="" />
          <MapsButton link="" />
        </Collapsible>
        <Collapsible
          title=""
          overview=""
          id="11"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="" />
          <ChipInfo type="walk" info="" />
          <p></p>
          <WebsiteButton link="" />
          <PhoneButton num="" />
          <EmailButton email="" />
          <MapsButton link="" />
        </Collapsible> */}
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
