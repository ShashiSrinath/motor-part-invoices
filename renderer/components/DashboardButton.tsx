import {
  Button,
  createStyles,
  Grid,
  Link,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {},
    buttonRoot: {
      background: "#5c117b",
      color: "white",
      paddingBottom: 100,
      paddingTop: 100,
      "&:hover": {
        background: "#a524db",
      },
    },
  })
);

interface Props {
  title: string;
  link: string;
}

const DashboardButton: React.FC<Props> = ({ title, link }) => {
  const classes = useStyles();

  return (
    <Grid item sm={6}>
      <Link href={link}>
        <Button variant={"contained"} className={classes.buttonRoot} fullWidth>
          {title}
        </Button>
      </Link>
    </Grid>
  );
};

export default DashboardButton;
