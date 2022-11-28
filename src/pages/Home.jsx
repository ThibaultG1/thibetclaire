import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          height: "100vh",
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
          <Card
            variant="outlined"
            sx={{
              opacity: "0.83",
              borderRadius: 2,
              px: { xs: 0, sm: 3 },
              mb: 2,
              textAlign: "center",
            }}
          >
            <CardContent>
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: 30, mb: 3 }}>
                  Mille mercis ! 🥰
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ChevronRightIcon />}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/drive/folders/1g28900TSHbTw-fAJpqljl8aoFsFDeZg1",
                      "_self"
                    )
                  }
                >
                  Découvir les photos
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
