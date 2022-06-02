import { Container } from "@mui/material";
import React from "react";
import ExternalLink from "./ExternalLink";

const TouristAttractions = () => (
  <Container sx={{ textAlign: "center", my: 3 }}>
    <h2>Sites touristiques</h2>
    <p>
      De nombreuses activités et visites peuvent être réalisées à proximité du
      lieu des festivités si vous souhaitez prolonger votre séjour dans la
      région.
      <br />
      Nous serions d'ailleurs ravis de pouvoir partager des moments avec vous la
      semaine suivant le mariage. N'hésitez pas à nous proposer des sorties !
      <br />
      <br />
      Voici déjà quelques idées :
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li>
          <ExternalLink link="https://www.pierre-brune.com/fr">
            Parc de Pierre Brune
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.accueil-vendee.com/balades/au-pays-des-legendes">
            Forêt de Mervent
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="http://naturzoomervent.com/zoo-mervent-vendee">
            Zoo de Mervent
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.centreminier-vendee.fr">
            Mines de Faymoreau
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.fontenay-vendee-tourisme.com">
            Fontenay le Comte, ville Renaissance avec son château
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.vendee-tourisme.com/abbaye-de-nieul-sur-lautise/rives-dautise/pcupdl085v500wud">
            Abbaye de Nieul sur l’Autise
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.vendee-tourisme.com/abbaye-saint-pierre-de-maillezais/maillezais/pcupdl085v500wtg">
            Abbaye de Maillezais
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link="https://www.vendee-tourisme.com/detente-et-nature-en-vendee#path=zonetouristique/Sud+Vend%C3%A9e+et+Marais+poitevin/search_api_cluster_7/Au+fil+de+l'eau">
            Promenade en barque dans le marais poitevin: Damvix, Maillezais…
          </ExternalLink>
        </li>
        <li>
          <ExternalLink link=" https://www.puydufou.com">
            Puy du Fou
          </ExternalLink>
        </li>
      </ul>
    </p>
  </Container>
);

export default TouristAttractions;
