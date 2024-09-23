import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarIconProps from './Types';
import starIconStyles from './StarIconStyle';

export const RateStar: React.FC<StarIconProps> = ({
  fontSize = "large",
  color = "primary",
  sx,
}) => {
  return (
    <StarIcon
      fontSize={fontSize}
      color={color}
      sx={{...starIconStyles, ...sx}}
    />
  );
};
