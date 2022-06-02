import { Box, Link } from "@mui/material";
import Container from "@mui/material/Container";
import ExternalLink from "./ExternalLink";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: 14,
        bgcolor: "primary.light",
        color: "primary.main",
        py: 1,
      }}
    >
      <Container>
        <p>
          <ExternalLink link="https://framaforms.org/users/thibault-et-claire/contact">
            <strong>Contact</strong>
          </ExternalLink>
        </p>
        <p>Copyright {year}, Made with 💗 by Thibault</p>
      </Container>
    </Box>
  );
};

export default Footer;
