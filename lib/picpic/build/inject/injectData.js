const { getFileTree } = require('../utils')

module.exports = async str => {
	const tree = await getFileTree()

	return str.replace(
		`
      <head>
            <title>TimeFlies</title>
      </head>
`,
		`
      <head>
            <title>TimeFlies</title>
            <script>
                  window.img_paths=${JSON.stringify(tree)}
            </script>
      </head>
`
	)
}
