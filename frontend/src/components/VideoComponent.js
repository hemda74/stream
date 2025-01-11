import React, { useEffect, useRef } from 'react';
import {
	initializeZego,
	startPublishing,
	startPlaying,
	stopPublishing,
} from '../services/zegoService';

const VideoComponent = () => {
	const videoContainerRef = useRef(null);

	useEffect(() => {
		initializeZego();

		return () => {
			stopPublishing();
		};
	}, []);

	const handleStartStream = () => {
		if (videoContainerRef.current) {
			startPublishing(videoContainerRef.current);
		}
	};

	const handlePlayStream = () => {
		const streamID = 'stream_example'; // Replace with actual stream ID
		if (videoContainerRef.current) {
			startPlaying(streamID, videoContainerRef.current);
		}
	};

	return (
		<div>
			<div
				ref={videoContainerRef}
				style={{
					width: '640px',
					height: '360px',
					backgroundColor: '#000',
				}}
			></div>
			<button onClick={handleStartStream}>
				Start Streaming
			</button>
			<button onClick={handlePlayStream}>Play Stream</button>
		</div>
	);
};

export default VideoComponent;
