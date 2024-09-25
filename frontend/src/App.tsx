import { useState } from "react";
import "./App.css";
import { Button, Input, RateStar, FeedbackCard } from "./components";
import { Box, Stack } from "@mui/material";
import { feedbackService } from "./services";

function App() {
  const [feedback, setFeedback] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [, setLoading] = useState<boolean>(false);
  const [, setError] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
  };

  const sendFeedback = async (): Promise<void> => {
    setLoading(true);
    setError("");
    try {
      const chatResponse = await feedbackService(feedback);
      setResponse(chatResponse);
    } catch (err) {
      setError("There was an error trying to connect with the endpoint");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
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
      <Box>
        <FeedbackCard cardTitle="Your Feedback" cardContent={response} />
      </Box>
    </Box>
  );
}

export default App;
