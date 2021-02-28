import React, { ReactNode } from "react";
import Head from "next/head";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      height: "100vh",
      width: "100vw",
      background: _theme.palette.background.default,
    },
  })
);

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
