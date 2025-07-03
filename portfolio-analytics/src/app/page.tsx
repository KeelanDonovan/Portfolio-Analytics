import { Container, Paper, Stack } from "@mui/material";
import styles from "./page.module.css";
import AddHoldingAccordion from "./components/AddHoldingAccordion";

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={3}>
          <AddHoldingAccordion/>
        </Stack>
      </Paper>
    </Container>
  );
}
