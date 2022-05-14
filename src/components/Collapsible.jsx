import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const Collapsible = ({
  id,
  title,
  overview,
  expandedItem,
  onChangeCallback,
  children,
}) => {
  return (
    <Accordion
      expanded={expandedItem === id}
      onChange={(e, isExpanded) => onChangeCallback(isExpanded, id)}
      sx={{
        border: "1px solid",
        borderColor: "primary.light",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}bh-content`}
        id={`${id}bh-header`}
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
        <Typography sx={{ color: "text.secondary" }}>{overview}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Collapsible;
