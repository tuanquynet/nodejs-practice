const runTask1 = async (value) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(value);
		}, 2000);
	});
}

const values = [
	Promise.resolve(1),
	Promise.resolve(2),
	Promise.resolve(3),
	runTask1(4),
];

async function run() {
	for await (const value of values) {
		console.log(value);
	}
}

run().then(() => {});