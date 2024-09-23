import { useState } from "react";
import "./App.css";
import { Button, Input, RateStar } from "./components";
import { Box, Stack } from "@mui/material";

function App() {
  const [feedback, setFeedback] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const sendFeedback = () => {
    console.log(feedback);
  };

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          "margin-left": "20px",
          "margin-top": "10px",
          "margin-bottom": "-10px",
        }}
      >
        <RateStar />
        <RateStar />
        <RateStar />
        <RateStar />
        <RateStar />
      </Stack>
      <Box>
        <Input
          name="userFeedback"
          value={feedback}
          placeholder="Write your feedback here"
          onChange={handleOnChange}
          extraStyles={{ width: "75%" }}
        />
      </Box>
      <Box>
        <Button
          text="Send feedback"
          onClick={sendFeedback}
          sx={{ "margin-left": "20px" }}
        />
      </Box>
    </Box>
  );
}

export default App;
