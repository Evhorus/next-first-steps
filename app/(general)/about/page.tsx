import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'SEO Title',
 keywords: ['About Page', 'Sebastian', 'información']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    );
}
