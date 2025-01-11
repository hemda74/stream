import ZegoExpressEngine from 'zego-express-engine-webrtc';

const appID = 1140670926;
const server = 'wss://webliveroom1234-api.zego.im/ws';
const appSign =
	'23e6faedf5a95e5c145f845bae92b79708b405447439062efc6b2ae284d0db33';

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
