import {
    useMemo,
    useEffect,
} from "react";
import { useRouter } from "next/router";

// Import Own Components
import { capitalize } from "Helpers";
import AlgorithmsPage from "./AlgorithmsPage.jsx";

const algorithmTypes = ["quick", "merge", "heap", "shell"];

const AlgorithmsPageContainer = () => {
    const router = useRouter();

    const { algorithmType } = router.query;

    const redirectIfInvalidAlgorithm = () => {
        if (!algorithmTypes.includes(algorithmType)) {
            router.replace("/algorithms/quick");
        }
    };

    useEffect(() => void redirectIfInvalidAlgorithm(), [algorithmType]);

    const pageName = useMemo(() => {
        if (!algorithmType) return "";

        return `| ${capitalize(algorithmType)}Sort`;
    }, [algorithmType]);

    return (
        <AlgorithmsPage
            delegations={{
                pageName,
                algorithmType,
            }}
        />
    );
};

export default AlgorithmsPageContainer;
