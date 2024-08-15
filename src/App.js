import { Container, Stack, Button } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  return (
    <>
      <Container class="my-4">
        <Stack direction="horizontal" gap="2" classname="mb-4" >
          <h1 classname="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start"
        }}>
          <BudgetCard name="Entertainment" amount={200} max={1000}></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => 
        setShowAddBudgetModal(false)}/>
    </>
  )
}


export default App;