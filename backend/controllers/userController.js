const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

exports.registerUser = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await prisma.user.create({
			data: { username, email, password: hashedPassword },
		});
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await prisma.user.findUnique({ where: { email } });
		if (!user) throw new Error('User not found');
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) throw new Error('Invalid credentials');
		res.status(200).json(user);
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
};
