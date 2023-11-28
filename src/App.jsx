// import './App.css'
import WeatherWidget from './WeatherWidget';
import './style.css';

function App() {
  function handleClick(){
    console.log("button was clicked");
  }
  return (
   <>
      {/* <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick}>Click Me!</Button>
      <Button variant="contained" disabled onClick={handleClick}>Click Me!</Button>
      <Button variant="contained" color="error" onClick={handleClick}>Click Me!</Button>
      <Button variant="contained" color="success" onClick={handleClick} size="small">Click Me!</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Alert severity="error">Delete option is given!</Alert> */}
      <WeatherWidget />
   </>
  )
}

export default App
