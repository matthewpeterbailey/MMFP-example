const express = require("express");
const cors = require("cors");
const featureFlagsConfig = require("./featureFlagsConfig");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/feature-flags/:env/:project", (req, res) => {
	const { env, project } = req.params;
	const flags = featureFlagsConfig[env] && featureFlagsConfig[env][project];

	if (flags) {
		res.json(flags);
	} else {
		res.status(404).send("Environment or project not found");
	}
});

app.listen(PORT, () => {
	console.log("Service running on port " + PORT);
});
