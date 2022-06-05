import { useState } from "react";

import Head       from "next/head";
import classNames from "classnames";
import {
	Play,
	Plus,
	Minus,
	Shuffle,
} from "react-feather";
import {
	Button,
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
import styles from "./AlgorithmsPage.module.scss";

const data = Array.from({ length : 30 }).map((_, index) => ({
	uv : index + 1,
}));

const AlgorithmsPage = ({
	delegations : {
		pageName,
		algorithmType,
	},
}) => {
	const [alignment, setAlignment] = useState('web');

	const handleChange = (event, newAlignment) => {
	  setAlignment(newAlignment);
	};


	return (
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
						<IconButton className={styles.circledButton}>
							<Plus />
						</IconButton>
						<IconButton className={styles.circledButton}>
							<Minus />
						</IconButton>
					</div>
				</div>
	
				<div className={styles.mainActions}>
					<ToggleButtonGroup
						exclusive
						color="primary"
						value={algorithmType}
						onChange={handleChange}
						className={styles.buttonGroup}
					>
						<ToggleButton value="quick">Quick</ToggleButton>
						<ToggleButton value="merge">Merge</ToggleButton>
						<ToggleButton value="heap">Heap</ToggleButton>
						<ToggleButton value="shell">Shell</ToggleButton>
					</ToggleButtonGroup>

					<Button
						variant="outlined"
						className={classNames(styles.roundedButton, styles.outlinedButton)}
					>
						<Shuffle />
	
						<span className="text">Shuffle</span>
					</Button>
	
					<Button
						variant="contained"
						className={styles.roundedButton}
					>
						<Play />
	
						<span className="text">Sort</span>
					</Button>
				</div>

				<div className={styles.algorithmOptions}>

				</div>
			</div>
		</>
	);
};

export default AlgorithmsPage;
