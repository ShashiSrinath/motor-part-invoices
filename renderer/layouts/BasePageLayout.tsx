import React from 'react';
import Head from 'next/head';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        root: {
            position: 'relative',
            height: '100vh',
            width: '100vw',
            background: _theme.palette.background.default,
        },
    })
);

const BasePageLayout: React.FC<{ title: string }> = ({ children, title }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            {children}
        </div>
    );
};

export default BasePageLayout;
