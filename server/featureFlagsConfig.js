const featureFlagsConfig = {
	production: {
		norway: {
			newUI: false,
			newFeature: false,
		},
		canada: {
			newUI: false,
			newFeature: true,
		},
	},
	development: {
		norway: {
			newUI: true,
			newFeature: false,
		},
		canada: {
			newUI: true,
			newFeature: true,
		},
	},
};

module.exports = featureFlagsConfig;
