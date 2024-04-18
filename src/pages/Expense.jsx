// import React, { useState } from 'react';
// import { Container, Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress, Typography, Box, Card, CardContent, CardActions } from '@mui/material';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { PieChart, Pie, Tooltip as ReTooltip, Cell, Legend as ReLegend } from 'recharts';

// // Registering necessary Chart.js parts
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Data (typically you might import this from a separate JSON file)
// const expenses = [
//   { title: "Marketing", amountAllotted: 5000, category: "Advertising" },
//   { title: "Development", amountAllotted: 15000, category: "Software" },
//   { title: "Operations", amountAllotted: 10000, category: "Administration" },
//   { title: "Equipment", amountAllotted: 7000, category: "Infrastructure" },
//   { title: "Training", amountAllotted: 3000, category: "Human Resources" }
// ];

// // ExpenseCard Component
// function ExpenseCard({ title, amountAllotted, category }) {
//   return (
//     <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px 0 rgba(135, 76, 204, 0.2)', border: '1px solid #C65BCF', '&:hover': { boxShadow: '0 8px 16px 0 rgba(135, 76, 204, 0.3)' } }}>
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
//         <Typography variant="body2" color="text.secondary">Budget Allotted: ${amountAllotted}</Typography>
//         <Typography variant="body2" color="text.secondary">Category: {category}</Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// // BudgetProgress Component
// function BudgetProgress({ used, total }) {
//   const progress = (used / total) * 100;
//   return (
//     <Box sx={{ width: '100%', padding: 2 }}>
//       <Typography variant="h6" sx={{ marginBottom: 1 }}>Company Budget Usage</Typography>
//       <Box sx={{ width: '100%', mr: 1, borderRadius: '20px', overflow: 'hidden' }}>
//         <LinearProgress variant="determinate" value={progress} sx={{ height: '40px', '& .MuiLinearProgress-bar': { backgroundColor: '#2196F3', borderRadius: '20px' } }} />
//       </Box>
//       <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>{`${Math.round(progress)}% used ($${used} of $${total})`}</Typography>
//     </Box>
//   );
// }

// // AnalyticsChart Component
// function AnalyticsChart({ data }) {
//   const chartData = {
//     labels: data.map(item => item.title),
//     datasets: [
//       {
//         label: 'Budget Allotted',
//         data: data.map(item => item.amountAllotted),
//         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
//         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
//         borderWidth: 1
//       }
//     ]
//   };
//   const options = { scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Budget Allocation per Project' } } };
//   return <Bar data={chartData} options={options} />;
// }

// // AddExpenseForm Component
// const AddExpenseForm = ({ open, handleClose, saveExpense }) => {
//   const [expense, setExpense] = useState({ category: 'Marketing', expense: 0, date: '' });
//   const handleChange = (e) => { setExpense({ ...expense, [e.target.name]: parseFloat(e.target.value) }); };
//   const handleSubmit = () => { saveExpense(expense); handleClose(); };
//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Add Expense</DialogTitle>
//       <DialogContent>
//         <TextField select label="Category" value={expense.category} onChange={handleChange} SelectProps={{ native: true }} helperText="Please select the expense category" margin="dense" name="category" fullWidth variant="outlined">
//           {['Marketing', 'Development', 'Sales'].map((option) => (<option key={option} value={option}>{option}</option>))}
//         </TextField>
//         <TextField margin="dense" name="expense" label="Expense Amount" type="number" fullWidth variant="outlined" value={expense.expense} onChange={handleChange} />
//         <TextField margin="dense" name="date" label="Date" type="date" fullWidth variant="outlined" InputLabelProps={{ shrink: true }} value={expense.date} onChange={handleChange} />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button onClick={handleSubmit}>Save</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// // App Component
// function App() {
//   const totalBudget = expenses.reduce((acc, curr) => acc + curr.amountAllotted, 0);
//   return (
//     <Container>
//       <BudgetProgress used={totalBudget} total={50000} />
//       <Container maxWidth="md" sx={{ marginTop: 4 }}>
//         <AnalyticsChart data={expenses} />
//         <Grid container spacing={3} style={{ marginTop: 20 }}>
//           {expenses.map((expense, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <ExpenseCard title={expense.title} amountAllotted={expense.amountAllotted} category={expense.category} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Container>
//   );
// }

// export default App;

import React from 'react'; // Removed useState since it's not used
import { Container, Grid, Button, Typography, Box, Card, CardContent, CardActions, LinearProgress } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js parts
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data for expenses
const expenses = [
  { title: "Marketing", amountAllotted: 5000, category: "Advertising" },
  { title: "Development", amountAllotted: 15000, category: "Software" },
  { title: "Operations", amountAllotted: 10000, category: "Administration" },
  { title: "Equipment", amountAllotted: 7000, category: "Infrastructure" },
  { title: "Training", amountAllotted: 3000, category: "Human Resources" }
];

// ExpenseCard Component
function ExpenseCard({ title, amountAllotted, category }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px 0 rgba(135, 76, 204, 0.2)', border: '1px solid #C65BCF', '&:hover': { boxShadow: '0 8px 16px 0 rgba(135, 76, 204, 0.3)' } }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
        <Typography variant="body2" color="text.secondary">Budget Allotted: ${amountAllotted}</Typography>
        <Typography variant="body2" color="text.secondary">Category: {category}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

// BudgetProgress Component
function BudgetProgress({ used, total }) {
  const progress = (used / total) * 100;
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>Company Budget Usage</Typography>
      <Box sx={{ width: '100%', mr: 1, borderRadius: '20px', overflow: 'hidden' }}>
        <LinearProgress variant="determinate" value={progress} sx={{ height: '40px', '& .MuiLinearProgress-bar': { backgroundColor: '#2196F3', borderRadius: '20px' } }} />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>{`${Math.round(progress)}% used ($${used} of $${total})`}</Typography>
    </Box>
  );
}

// AnalyticsChart Component
function AnalyticsChart({ data }) {
  const chartData = {
    labels: data.map(item => item.title),
    datasets: [
      {
        label: 'Budget Allotted',
        data: data.map(item => item.amountAllotted),
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 1
      }
    ]
  };
  const options = { scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Budget Allocation per Project' } } };
  return <Bar data={chartData} options={options} />;
}

// App Component
function App() {
  const totalBudget = expenses.reduce((acc, curr) => acc + curr.amountAllotted, 0);
  const scrollableGridStyle = { maxHeight: '600px', overflowY: 'auto' };
  return (
    <Container>
      <BudgetProgress used={totalBudget} total={50000} />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <AnalyticsChart data={expenses} />
        <Grid container spacing={3} style={{ marginTop: 20, ...scrollableGridStyle }}>
          {expenses.map((expense, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ExpenseCard title={expense.title} amountAllotted={expense.amountAllotted} category={expense.category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default App;

