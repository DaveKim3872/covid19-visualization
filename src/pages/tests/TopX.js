import dynamic from 'next/dynamic';

const ClientTopX = dynamic(() => import('components/TopX'), { ssr: false });

export default function TopTenTest() {
    return (
        <div style={{ height: '800px' }}>
            <ClientTopX number="20" />
        </div>
    );
}