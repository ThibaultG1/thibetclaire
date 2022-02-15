import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const Header = () => (
  <Box
    sx={{
      position: "absolute",
      color: "white",
      //background: "rgb(51 56 88)",
      textAlign: "center",
      paddingBottom: 3,
      background:
        "linear-gradient(180deg, rgb(51 56 88) 0%, rgba(174,174,211,0.2) 87%, rgba(255,255,255,0) 100%)",
      right: 0,
      left: 0,
    }}
  >
    <Container>
      <Typography
        sx={{ fontSize: "calc(30px + 2vw)", pt: 2, fontFamily: "default" }}
      >
        Claire et Thibault
      </Typography>
    </Container>
  </Box>
);

export default Header;
