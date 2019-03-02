exports.babel = {
	plugins: [
		[
			"import",
			{
				"libraryName": "mido-h5-cp",
				"libraryDirectory": "lib/web",
				"camel2DashComponentName": false
			}
		]
	]
}
