module.exports = {
	devServer: {
		hot: true,
    compress: true,
		proxy: {
			'^/api': {
        target: 'http://localhost:7071',
      },
		}
	}
}