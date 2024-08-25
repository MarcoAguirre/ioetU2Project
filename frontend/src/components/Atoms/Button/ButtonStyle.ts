import {SxProps, Theme} from "@mui/system";

export const buttonStyle: SxProps<Theme> = {
  backgroundColor: (theme: Theme) => theme.palette.primary.main,
  "&:hover": {
    backgroundColor: (theme: Theme) => theme.palette.primary.dark,
  },
};
