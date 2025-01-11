import ZegoExpressEngine from 'zego-express-engine-webrtc';

const appID = YOUR_APP_ID; // Replace with your AppID
const server = 'wss://webliveroom1234-api.zego.im/ws'; // Use your ZEGOCLOUD server URL
const appSign = YOUR_APP_SIGN; // Replace with your AppSign

let zegoEngine;

export const initializeZego = () => {
	if (!zegoEngine) {
		zegoEngine = new ZegoExpressEngine(appID, server);
		zegoEngine.loginRoom(
			'room1',
			{ userID: 'user1', userName: 'User One' },
			appSign
		);
	}
};

export const startPublishing = async (containerID) => {
	const streamID = 'stream_' + Math.random().toString(36).substring(2);
	await zegoEngine.startPublishingStream(streamID, {
		container: containerID,
		video: true,
		audio: true,
	});
};

export const startPlaying = async (streamID, containerID) => {
	await zegoEngine.startPlayingStream(streamID, {
		container: containerID,
	});
};

export const stopPublishing = async (streamID) => {
	await zegoEngine.stopPublishingStream(streamID);
};
