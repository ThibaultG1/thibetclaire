import { Alert, AlertTitle, Box, Container } from "@mui/material";
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
    <Container sx={{ textAlign: "center", my: 3 }} id="hebergement">
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
            Il n'y a pas de sanitaire sur le terrain mais nous avons accès à des
            toilettes à proximité.
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
        <Collapsible
          title="Relais de la Grande Rue, Vouvant"
          overview="Location 3 nuits minimum, 4-6 pers (2 chambres + clic clac),  210€ en tout"
          id="9"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="12" />
          <p>26 Grande Rue, 85120 Vouvant</p>
          <WebsiteButton link="https://www.lerelaisdelagranderue.fr" />
          <PhoneButton num="02 44 57 55 53" />
          <EmailButton email="contact@lerelaisdelagranderue.fr" />
          <MapsButton link="https://goo.gl/maps/6nwWcUZ7mvZpqhHq5" />
        </Collapsible>
        <Collapsible
          title="Hotel le Rabelais, Fontenay-le-Comte"
          overview="À partir de 99€/nuit"
          id="10"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="13" />
          <p>19 rue de l'Ouillette, 85200 FONTENAY-LE-COMTE</p>
          <WebsiteButton link="http://www.le-rabelais.com" />
          <PhoneButton num="02 51 69 86 20" />
          <EmailButton email="accueil@le-rabelais.com" />
          <MapsButton link="https://g.page/HotelLeRabelais?share" />
        </Collapsible>
        <Collapsible
          title="Hôtel Le Fontarabie, Fontenay-le-Comte"
          overview="À partir de 89€/nuit"
          id="11"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="14" />
          <p>57 Rue de la République, 85200 Fontenay-le-Comte</p>
          <WebsiteButton link="https://www.hotel-fontarabie.com" />
          <PhoneButton num="02 51 69 17 24" />
          <MapsButton link="https://goo.gl/maps/ih1FkFyTXCBHYegn6" />
        </Collapsible>
        <Collapsible
          title="Parfum Du Sud, CHAMBRE 'NEPTUNE'"
          overview="65€ Maison du 17ème siècle, entièrement rénovée, au coeur de la ville Renaissance."
          id="12"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="12" />
          <p>
            4 Rue Benjamin Fillon, 85200 Fontenay-le-Comte
            <br />
            Chambre au RDC
          </p>
          <WebsiteButton link="https://parfum-du-sud.business.site" />
          <PhoneButton num="02 51 69 85 75" />
          <PhoneButton num="06 09 38 13 10" />
          <MapsButton link="https://g.page/parfum-du-sud?share" />
        </Collapsible>
        <Collapsible
          title="Chambres d'hôtes 'Le Pré Sec'"
          overview="Chambre avec 1 lit 120 et 1 lit 140"
          id="13"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="17" />
          <p>90 Rte de Sainte-Hermine, 85570 Pouillé</p>
          <WebsiteButton link="http://www.lepresec.com" />
          <PhoneButton num="02 51 37 87 87" />
          <PhoneButton num="06 88 34 73 89" />
          <MapsButton link="https://goo.gl/maps/YXMZmF3ZqdJ1ebYw7" />
        </Collapsible>
        <Collapsible
          title="Chambres d'hôtes 'La Maison Neuve' "
          overview="40€, 2 chambres, jolie maison"
          id="14"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="18" />
          <p>
            96 Chem. du Puits de la Charrière, 85570 Pouille
            <br />
            Chez Mr et Mme HERBRETEAU
          </p>
          <WebsiteButton link="https://www.vendee-tourisme.com/chambres-dhotes-en-vendee/chambres-dhotes-la-maison-neuve/pouille/hlopdl049v5057oc" />
          <PhoneButton num="02 51 00 14 86" />
          <PhoneButton num="06 88 90 90 82" />
          <MapsButton link="https://goo.gl/maps/KRU1okmomuRPb5da6" />
        </Collapsible>
        <Collapsible
          title="Les Eleis Hotel & Restaurant, Saint-Martin-de-Fraigneau"
          overview="À partir de 70€"
          id="15"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="18" />
          <p>58 Av. de la ville, 85200 Saint-Martin-de-Fraigneau</p>
          <WebsiteButton link="https://hotel-fontenay-le-comte.com" />
          <PhoneButton num="02 51 53 03 30" />
          <MapsButton link="https://goo.gl/maps/Medm3Ppt79rNCk9c8" />
        </Collapsible>
        <Collapsible
          title="Chambres d'hôtes 'La rivière Morin'"
          overview="73€"
          id="16"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="19" />
          <p>La Rivière Maurin, 85410 La Caillère-Saint-Hilaire </p>
          <WebsiteButton link="http://www.booking.com/Share-FsFCgv" />
          <PhoneButton num="02 51 69 85 77" />
          <PhoneButton num="06 25 97 90 09" />
          <MapsButton link="https://goo.gl/maps/nnryddMrujQvHfD27" />
        </Collapsible>
        <Collapsible
          title="Chambres d'hôtes 'La Tour des Laudes'"
          overview="Logis avec tour"
          id="17"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="22" />
          <p>14 Rue de la Tour, 85120 Breuil-Barret</p>
          <WebsiteButton link="https://www.latourdeslaudes.fr" />
          <PhoneButton num="06 06 49 82 46" />
          <PhoneButton num="06 23 48 06 09" />
          <MapsButton link="https://g.page/la-tour-des-laudes?share" />
        </Collapsible>
        <Collapsible
          title="Chambres d'hôtes 'Le Rosier Sauvage'"
          overview="50€, 4 chambres"
          id="18"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="23" />
          <p>1 Rue de l'Abbaye, 85240 Rives-d'Autise</p>
          <WebsiteButton link="http://lerosiersauvage.fr" />
          <PhoneButton num="02 51 37 87 87" />
          <MapsButton link="https://goo.gl/maps/Jrbj1fkQWzZ851my7" />
        </Collapsible>
        <Collapsible
          title="Chambres d'hôtes 'Villanelle', L'Île-d'Elle"
          overview="À partir de 55€, 3 chambres, joli cadre"
          id="19"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="32" />
          <p>3 Av. de la Gare, 85770 L'Île-d'Elle</p>
          <WebsiteButton link="http://www.chambres-villanelle.com" />
          <PhoneButton num="02 44 57 50 47" />
          <PhoneButton num="06 45 88 51 59" />
          <MapsButton link="https://goo.gl/maps/zVo9FADpLmbzFMUD9" />
        </Collapsible>
        <Collapsible
          title="Le Logis de Bouillé"
          overview="56€, jolie maison, mobilier simple"
          id="20"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="24" />
          <p>
            10 Rue du Plessis, 85420 Bouillé-Courdault
            <br />
            Vérifier largeur du lit
          </p>
          <WebsiteButton link="http://lelogisdebouille.fr" />
          <PhoneButton num="02 51 52 41 79" />
          <EmailButton email="nanyolande@gmail.com" />
          <MapsButton link="https://goo.gl/maps/3DTjhCRBUiYXkyYEA" />
        </Collapsible>
        <Collapsible
          title="La Ferme du Marais Poitevin"
          overview="À partir de 70€"
          id="21"
          expandedItem={expanded}
          onChangeCallback={handleChange}
        >
          <ChipInfo type="car" info="32" />
          <p>19 Rue du Port Grenouillet, 85490 Benet</p>
          <WebsiteButton link="http://lafermedumaraispoitevin.fr" />
          <PhoneButton num="02 51 52 98 38" />
          <PhoneButton num="06 80 68 38 78" />
          <MapsButton link="https://g.page/fermedumaraispoitevin?share" />
        </Collapsible>
      </Box>
      <p>
        <Alert severity="info" sx={{ textAlign: "left" }}>
          <AlertTitle>Dernière mise à jour le 02/06/2022.</AlertTitle>
          N'hésitez pas à nous indiquer si vous constatez des erreurs, si
          certains logements ne sont plus disponibles ou si avez d'autres pistes
          à proposer ! 🙂
        </Alert>
      </p>
    </Container>
  );
};

export default Accomodation;
