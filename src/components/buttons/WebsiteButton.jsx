import LanguageIcon from "@mui/icons-material/Language";
import { Button } from "@mui/material";

const WebsiteButton = ({ link }) => (
  <Button
    variant="outlined"
    startIcon={<LanguageIcon />}
    onClick={() => window.open(link)}
    sx={{ mr: 1, mb: 1 }}
  >
    {cleanDisplayedLink(link)}
  </Button>
);

const cleanDisplayedLink = (link) => {
  const cleaned = link.replace(/^https?:\/\/(www.)?/, "");
  return cleaned.length < 40 ? cleaned : cleaned.substr(0, 36) + "...";
};

export default WebsiteButton;
