import PhoneIcon from "@mui/icons-material/Phone";
import { Button } from "@mui/material";

const PhoneButton = ({ num }) => (
  <Button
    variant="outlined"
    startIcon={<PhoneIcon />}
    onClick={() => window.open("tel:" + removeSpaces(num))}
    sx={{ mr: 1, mb: 1 }}
  >
    {num}
  </Button>
);

const removeSpaces = (num) => num.replaceAll(" ", "");

export default PhoneButton;
