import {GetStaticPaths, GetStaticProps} from 'next';
import React from 'react';
import Layout, {sampleDocTopics} from "../layout/layout";
import DocsComponent from "../components/docs-component";


// API keys constants
const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;
const PRIVATE_API_KEY = process.env.PRIVATE_API_KEY;
if (!PUBLIC_API_KEY || !PRIVATE_API_KEY) throw new Error('API keys were not set in .env file');


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = sampleDocTopics.map(topic => ({
        params: {title: topic.title}
    }));

    //Maybe fallback to blocking
    return {paths, fallback: true};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const slug = params?.slug as string;

    const data = await fetch(`https://api.example.com/docs/${slug}`)
        .then((res) => res.json());

    return {
        props: {
            data,
        },
        //Cashing for every hour
        revalidate: 3600,
    };
};


const sampleInstallationContent = {
    title: "Installation",
    topics: ["Step-by-step Guide", "Troubleshooting", "Updating"],
    content: "Installation content.."
}

const DocPage = ({data}: { data: any }) => {
    if (!PUBLIC_API_KEY || !PRIVATE_API_KEY) {
        throw new Error('API keys are not set');
    }

    return (
        <Layout>
            <DocsComponent title={sampleInstallationContent.title} topics={sampleInstallationContent.topics}
                           content={sampleInstallationContent.content}/>
        </Layout>
    );
};

export default DocPage;