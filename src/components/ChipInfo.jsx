import { Chip } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const ChipInfo = ({ type, info }) => (
  <Chip
    icon={type === "car" ? <DirectionsCarIcon /> : <DirectionsWalkIcon />}
    label={info + " min"}
    size="small"
    sx={{ mr: 1 }}
  />
);

export default ChipInfo;
