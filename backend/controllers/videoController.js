const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createVideo = async (req, res) => {
	const { title, url, userId } = req.body;
	try {
		const newVideo = await prisma.video.create({
			data: { title, url, userId },
		});
		res.status(201).json(newVideo);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getVideos = async (req, res) => {
	try {
		const videos = await prisma.video.findMany();
		res.status(200).json(videos);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
