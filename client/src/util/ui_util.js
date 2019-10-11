import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#a9a9a9"
      },
      "&:hover fieldset": {
        borderColor: "#606060"
      },
      "&.Mui-focused fieldset": {
        borderColor: "darkGrey"
      }
    },
    color: "white",
    background: "#181818",
    boxShadow: "5px 5px 8px 0px rgba(0,0,0,0.3)"
  },
  input: {
    color: "#a9a9a9"
  }
}));