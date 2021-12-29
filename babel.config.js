module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
        "module-resolver",
        {
            root: [
                "./"
            ],
            alias: {
                "@Atoms": "./src/Components/Atoms",
                "@Molecules": "./src/Components/Molecules",
                "@Organisms": "./src/Components/Organisms",
                "@Components": "./src/Components",
                "@src": "./src",
            }
        }
    ]
]
}
