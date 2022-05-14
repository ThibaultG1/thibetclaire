import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";

const EmailButton = ({ email }) => (
  <Button
    variant="outlined"
    startIcon={<EmailIcon />}
    onClick={() => window.open("mailto:" + email)}
    sx={{ mr: 1, mb: 1 }}
  >
    {email}
  </Button>
);

export default EmailButton;
