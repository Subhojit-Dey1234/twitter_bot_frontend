import { Button, TextField } from "@mui/material";
import React, { useState } from "react";


export default function HomeContainer() {
    const [url,setUrl] = useState("")
    function getParamsId(){
        let url_obj = new URL(url)
        let { pathname } = url_obj

        let twitter_id = pathname.split('/')

        window.location.href = `/${twitter_id[twitter_id.length-1]}`
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
					style={{ width: "50vw" , color : "white",cursor:"pointer"}}
					color="info"
                    value={url}
					focused
					id="outlined-basic"
					label="Enter the link of tweet"
                    sx={{input: { color: 'white'} }}
					variant="outlined"
                    onChange={(e)=>{
                        setUrl(e.target.value)
                    }}
					InputProps={{
						endAdornment: (
							<Button sx={{cursor:"pointer"}} style={{ color: "white", background: "#80B3FF"}} onClick={()=>{
                                url.length > 0 && getParamsId()
                            }}>
								Enter
							</Button>
						),
					}}
				/>
			</div>
		</div>
	);
}
