import { Card, CardContent, Container } from "@mui/material";
import React from "react";
import { HashLink } from "react-router-hash-link";

const TableOfContents = () => (
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
        {" "}
        <h2>Table des matières</h2>
        <p>
          <HashLink smooth to="#hebergement">
            Hébergement
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="#sites-touristiques">
            Sites touristiques
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="#liste-de-mariage">
            Liste de mariage
          </HashLink>
        </p>
      </CardContent>
    </Card>
  </Container>
);

export default TableOfContents;
