import {
    useMemo,
    useState,
    useEffect,
} from "react";
import { useRouter } from "next/router";

// Import Own Components
import { capitalize } from "Helpers";
import AlgorithmsPage from "./AlgorithmsPage.jsx";

const algorithmTypes = ["quick", "merge", "heap", "shell"];

const generateData = amount => Array.from({ length : amount }).map((_, index) => ({
    uv : index + 1,
}));

const AlgorithmsPageContainer = () => {
    const router = useRouter();

    const [data, setData] = useState(generateData(30));

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

    const handleShuffle = () => setData(previous => {
        const newData = previous.map(({ uv }) => ({
            uv,
            randomWeight : Math.random(),
        }));

        newData.sort((a, b) => a.randomWeight - b.randomWeight);

        return newData;
    });

    const handleAddOrRemove = ({ isAdding }) => setData(previous => {
        const amount = previous.length > 0
            ? previous.length
            : 0;
        
        if (amount === 0 && !isAdding) return previous;

        return generateData(amount + (isAdding ? 1 : -1));
    });

    const handleSort = () => {

    };

    return (
        <AlgorithmsPage
            router={router}
            delegations={{
                data,
                pageName,
                handleSort,
                handleShuffle,
                algorithmType,
                handleAddOrRemove,
            }}
        />
    );
};

export default AlgorithmsPageContainer;
