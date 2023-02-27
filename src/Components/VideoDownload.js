import React from "react";
import { Button, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import downloadVideoFrontend from "./downloadFrontend";
import axios from "axios";

export default function VideoDownload({ link, bits }) {
	let size = bits * 0.000000125;
	size = size.toPrecision(2);
	return (
		<Grid
			className="videoItems"
			item
			xs={12}
			style={{
				display: "flex",
				background: "#80B3FF",
				alignItems: "center",
				justifyContent: "space-around",
				margin: "10px 17vw",
				height: "10vh",
				borderRadius: "10px",
				// padding : "0 10px",

			}}
		>
			<span className="videoContainerFont" style={{ fontWeight: "bold" }}>Format : MP4</span>
			<span className="videoContainerFont" style={{ fontWeight: "bold" }}>Size: {size} MB</span>
			<Button
				variant="contained"
				color="primary"
				startIcon={<DownloadIcon />}
				onClick={() => {
					axios
						.get(link, { responseType: "blob" })
						.then((res) => {
							if (res.status === 200) {
								downloadVideoFrontend(res.data, "Twitter_Video.mp4");
							}
						})
						.catch((err) => {
							console.log(err);
						});
				}}
			>
			</Button>
		</Grid>
	);
}
