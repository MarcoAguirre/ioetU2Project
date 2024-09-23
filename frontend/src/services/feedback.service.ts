export const feedbackService = async (prompt: string): Promise<string> => {
  console.log({prompt});
  try {
    const response = await fetch("http://localhost:8000/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Error in the backend request");
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
