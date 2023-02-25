import React, { useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function VideoContainer() {
	const { id } = useParams()
	useEffect(()=>{
		axios.get(`http://localhost:5000/${id}`)
		.then((res)=>{
			console.log(res)
		})
		.catch((res)=>{
			console.log(res)
		})
	})

  return (
	<div>VideoContainer</div>
  )
}
