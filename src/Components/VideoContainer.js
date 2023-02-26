import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoDownload from "./VideoDownload";
import { Grid } from "@mui/material";

export default function VideoContainer() {
	const { id } = useParams();
	const [videos, setVideos] = useState([]);
	const [preview_image_url, setPreviewImageUrl] = useState("")
	useEffect(() => {
		axios
			.get(`http://localhost:5000/${id}`)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					setPreviewImageUrl(res.data.video_list[0].preview_image_url)
					setVideos(res.data.video_list[0].variants);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Download the video</h1>
			<div style={{display:"flex",justifyContent:"center"}}>
				<img
					src={preview_image_url}
					style={{
						width: "20em",
					}}
					alt="video thumbnail"
				/>
			</div>
			<Grid container>
				{videos.map((vd) => {
					return (
						<>
							{vd.bit_rate && (
								<VideoDownload link={vd.url} bits={vd.bit_rate} />
							)}
						</>
					);
				})}
			</Grid>
		</div>
	);
}
