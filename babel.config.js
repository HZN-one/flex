module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
        "module-resolver",
        {
            root: [
                "src/"
            ],
            alias: {
                "@Atoms/*": "src/Components/Atoms/*",
                "@Atoms": 
                    "src/Components/Atoms"
                ,
                "@Molecules/*": "src/Components/Molecules/*",
                "@Molecules": 
                    "src/Components/Molecules"
                ,
                "@Organisms/*": "src/Components/Organisms/*",
                "@Organisms": 
                    "src/Components/Organisms"
                ,
                "@Components/*": "src/Components/*",
                "@Components": 
                    "src/Components"
                ,
                "@src/*": "./*",
                "@src": ".",
            }
        }
    ]
]
}
