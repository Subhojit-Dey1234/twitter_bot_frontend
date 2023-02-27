import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function HomeContainer() {
	const [url, setUrl] = useState("");
	const [error, setError] = useState(false);
	useEffect(() => {
		if (url.length === 0) setError(false);
		try {
			let url_obj = new URL(url);
			let { origin } = url_obj;

			if (origin !== "https://twitter.com") {
				setError(true);
				return;
			} else if (origin === "https://twitter.com") {
				setError(false);
				return;
			}
		} catch (err) {
			if(url.length > 0)setError(true);
		}
	}, [url]);
	function getParamsId() {
		try {
			let url_obj = new URL(url);
			console.log(url_obj);
			let { pathname, origin } = url_obj;

			if (origin !== "https://twitter.com") {
				setError(true);
				return;
			}

			let twitter_id = pathname.split("/");

			window.location.href = `/#/${twitter_id[twitter_id.length - 1]}`;
		} catch (err) {
			setError(true);
		}
	}
	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: "70vh",
					flexDirection: "column",
				}}
			>
				<h2 style={{ textAlign: "center" }}>
					Download Twitter video using link or tag{" "}
					<a
						style={{ textDecoration: "none", color: "#80B3FF" }}
						href="https://twitter.com/get_downloader"
					>
						@get_downloader
					</a>
				</h2>
				<TextField
					style={{ width: "70vw", color: "white", cursor: "pointer" }}
					color={error ? "error" : "info"}
					value={url}
					focused
					id="outlined-basic"
					label={error ? "Enter a valid url" : "Enter the link of tweet"}
					sx={{ input: { color: "white" } }}
					variant="outlined"
					onChange={(e) => {
						setUrl(e.target.value);
					}}
					InputProps={{
						endAdornment: (
							<Button
								className="downloadBtn"
								sx={{ cursor: "pointer" }}
								style={{ color: "white", background: "#80B3FF" }}
								onClick={() => {
									url.length > 0 && getParamsId();
								}}
							>
								Enter
							</Button>
						),
					}}
				/>
			</div>
		</div>
	);
}
