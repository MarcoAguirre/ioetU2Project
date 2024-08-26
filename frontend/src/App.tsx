import { useState } from 'react';
import './App.css';
import { Button, Input } from './components';
import { Box } from '@mui/material';

function App() {
  const [feedback, setFeedback] = useState<string>('')

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  }

  const sendFeedback = () => {
    console.log(feedback);
  }

  return (
    <Box>
      <Input name='userFeedback' value={feedback} placeholder='Write your feedback here' onChange={handleOnChange}/>
      <Button text='Send feedback' onClick={sendFeedback}/>
    </Box>
  );
}

export default App;
