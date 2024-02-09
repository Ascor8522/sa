export default function(context, options) {
	return {
		name: "odometer",
		configureWebpack(config, isServer, utils, content) {
			return {
				...config,
				config: {
					module: {
						resolve: {
							alias: {
								odometer: path.resolve(__dirname, "../../../node_modules/odometer")
							}
						}
					}
				}
			};
		},
	};
}
