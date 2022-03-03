import { Box, Link } from "@mui/material";
import Container from "@mui/material/Container";

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
          <Link
            href="https://framaforms.org/users/thibault-et-claire/contact"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Contact</strong>
          </Link>
        </p>
        <p>Copyright {year}, Made with 💗 by Thibault</p>
      </Container>
    </Box>
  );
};

export default Footer;
