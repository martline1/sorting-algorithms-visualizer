import { useRouter } from "next/router";

const AlgorithmsPage = () => {
    const router = useRouter();

    const { algorithmType } = router.query;

    console.log({ algorithmType });

    return (
        <h1>AlgorithmsPage - {algorithmType}</h1>
    );
};

export default AlgorithmsPage;
