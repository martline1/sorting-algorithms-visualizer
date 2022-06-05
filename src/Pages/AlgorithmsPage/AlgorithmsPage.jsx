import Head from "next/head";
import {
	Play,
	Plus,
	Minus,
	Shuffle,
} from "react-feather";
import {
	IconButton,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import {
	Bar,
	BarChart,
	ResponsiveContainer,
} from "recharts";

// Import Own Components
import TextIconButton from "Components/TextIconButton";
import styles         from "./AlgorithmsPage.module.scss";

const AlgorithmsPage = ({
	router,
	delegations : {
		data,
		pageName,
		handleSort,
		handleShuffle,
		algorithmType,
		handleAddOrRemove,
	},
}) => (
	<>
		<Head>
			<title>Algorithms {pageName}</title>
		</Head>

		<div className={styles.root}>
			<div className={styles.chart}>
				<div className={styles.chart}>
					<ResponsiveContainer width="100%" height="100%" debounce={200}>
						<BarChart data={data}>
							<Bar dataKey="uv" fill="#007FFF" />
						</BarChart>
					</ResponsiveContainer>
				</div>

				<div className={styles.chartOptions}>
					<IconButton
						className={styles.circledButton}
						onClick={() => handleAddOrRemove({ isAdding : true })}
					>
						<Plus />
					</IconButton>
					<IconButton
						className={styles.circledButton}
						onClick={() => handleAddOrRemove({ isAdding : false })}
					>
						<Minus />
					</IconButton>
				</div>
			</div>

			<div className={styles.mainActions}>
				<ToggleButtonGroup
					exclusive
					color="primary"
					value={algorithmType}
					onChange={(_, newValue) => router.push(`/algorithms/${newValue}`)}
					className={styles.buttonGroup}
				>
					<ToggleButton value="quick">Quick</ToggleButton>
					<ToggleButton value="merge">Merge</ToggleButton>
					<ToggleButton value="heap">Heap</ToggleButton>
					<ToggleButton value="shell">Shell</ToggleButton>
				</ToggleButtonGroup>

				<TextIconButton
					icon={<Shuffle />}
					label="Shuffle"
					variant="outlined"
					onClick={handleShuffle}
				/>

				<TextIconButton
					icon={<Play />}
					label="Sort"
					onClick={handleSort}
				/>
			</div>
		</div>
	</>
);

export default AlgorithmsPage;
