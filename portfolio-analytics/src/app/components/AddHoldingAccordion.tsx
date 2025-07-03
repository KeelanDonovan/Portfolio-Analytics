import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function AddHoldingAccordion() {
  return (
    <Accordion elevation={8}>
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography>Add new trade...</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Hello World</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
