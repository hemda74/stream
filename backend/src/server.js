const app = require('./app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PORT = 5000;

app.listen(PORT, async () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
