import {TextField} from "@mui/material";
import InputProps from "./Types";
import InputStyle from "./InputStyle";

export const Input = ({
  name,
  value,
  placeholder,
  onChange,
  extraStyles,
}: InputProps) => {
  return (
    <TextField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      sx={{...InputStyle, ...extraStyles}}
    />
  );
};
