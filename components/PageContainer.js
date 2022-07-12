import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';

export default function PageContainer({ title, children }) {
  return (
    <Container maxWidth="md">
      <Paper sx={{p: 2, mb: 2}}>
        <Typography variant="h4">{title}</Typography>
      </Paper>
      <Paper sx={{p: 2}}>
        {children}
      </Paper>
    </Container>
  )
}