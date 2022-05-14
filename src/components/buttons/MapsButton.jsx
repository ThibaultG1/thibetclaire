import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";

const MapsButton = ({ link }) => (
  <Button
    variant="outlined"
    startIcon={<LocationOnIcon />}
    onClick={() => window.open(link)}
    sx={{ mr: 1, mb: 1 }}
  >
    Google Maps
  </Button>
);

export default MapsButton;
