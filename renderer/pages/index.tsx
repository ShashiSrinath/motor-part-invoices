import BasePageLayout from '../layouts/BasePageLayout';
import Link from 'next/link';

const IndexPage = () => {
    return (
        <BasePageLayout title={'Dashboard'}>
            <div>
                <Link href={'/orders'}>
                    <a>Orders</a>
                </Link>
            </div>
        </BasePageLayout>
    );
};

export default IndexPage;
