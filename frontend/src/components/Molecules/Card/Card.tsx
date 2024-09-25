import { Card, CardContent, Typography } from "@mui/material";

import { ICardProps } from "./Types";
import { cardStyle } from "./CardStyle";

export const FeedbackCard: React.FC<ICardProps> = ({
  cardTitle,
  cardContent,
}: ICardProps) => {
  return (
    <Card variant="outlined" sx={cardStyle.mainContainer}>
      <CardContent>
        <Typography variant="h4">{cardTitle}</Typography>
        <Typography variant="body1">{cardContent}</Typography>
      </CardContent>
    </Card>
  );
};
