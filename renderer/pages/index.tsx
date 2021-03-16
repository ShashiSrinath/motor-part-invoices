import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Layout from '../layouts/Layout';

import dynamic from 'next/dynamic';

const ReactAdmin = dynamic(
    () => import('../components/react-admin/ReactAdmin'),
    {
        ssr: false,
    }
);

const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
        titleContainer: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 40,
        },
        buttonContainer: {
            paddingTop: 60,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            paddingLeft: '30px',
            paddingRight: '30px',
        },
    })
);

const IndexPage = () => {
    const classes = useStyles();

    return (
        <Layout title="Dashboard">
            <ReactAdmin />
        </Layout>
    );
};

export default IndexPage;
