import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import "./Header.css";

const Header = () => (
  <Box
    sx={{
      position: "absolute",
      color: "white",
      textAlign: "center",
      paddingBottom: 3,
      background:
        "linear-gradient(180deg, rgb(51 56 88) 0%, rgba(174,174,211,0.2) 87%, rgba(255,255,255,0) 100%)",
      right: 0,
      left: 0,
    }}
  >
    <Container>
      <p className="love" sx={{ pt: 2, m: 0 }}>
        Claire et Thibault
      </p>
    </Container>
  </Box>
);

export default Header;
