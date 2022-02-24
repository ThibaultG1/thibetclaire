import { Box, Link } from "@mui/material";
import Container from "@mui/material/Container";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        background: "#E1F0FF",
        textAlign: "center",
        fontSize: 10,
        color: "#7CBCFD",
        py: 1,
      }}
    >
      <Container>
        <p>
          <Link
            href="https://framaforms.org/users/thibault-et-claire/contact"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Contact</strong>
          </Link>
          <br />
          Copyright {year}, Made with 💗 by Thibault
        </p>
      </Container>
    </Box>
  );
};

export default Footer;
