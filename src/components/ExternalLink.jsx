import { Link } from "@mui/material";

const ExternalLink = ({ link, children }) => (
  <Link href={link} target="_blank" rel="noreferrer">
    {children}
  </Link>
);

export default ExternalLink;
