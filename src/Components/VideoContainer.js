import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoDownload from "./VideoDownload";
import { Grid } from "@mui/material";

const api_url ='https://ntydsv3jbe.execute-api.us-east-2.amazonaws.com/'

export default function VideoContainer() {
	const { id } = useParams();
	const [videos, setVideos] = useState([]);
	const [serverError, setServerError] = useState(null)
	const [preview_image_url, setPreviewImageUrl] = useState("")
	const [ is_media, setIsMediaPresent] = useState(false)
	const [ loading, setLoading ] = useState(true)
	useEffect(() => {
		axios
			.get(`${api_url}${id}`)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					setLoading(false)
					const { includes } = res.data
					setIsMediaPresent(includes === undefined)
					setPreviewImageUrl(includes.media[0].preview_image_url)
					setVideos(includes.media[0].variants);
				}
			})
			.catch((e) => {
				setServerError(e)
				setLoading(false)
			});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if(is_media) return <h1 style={{ textAlign: "center", textTransform:"uppercase",color : "white" }}>There is not media attached.....</h1>
	if(loading) return <h1 style={{ textAlign: "center", textTransform:"uppercase",color : "white" }}>Loading...</h1>

	if(serverError) return <h1 style={{ textAlign: "center", textTransform:"uppercase",color : "white" }}>Network Error. Try Again...</h1>

	return (
		<div>
			<h1 style={{ textAlign: "center", textTransform:"uppercase",color : "white" }}>Download the video</h1>
			<div style={{display:"flex",justifyContent:"center"}}>
				<img
					src={preview_image_url}
					style={{
						width: "20em",
						border : "2px solid white"
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
