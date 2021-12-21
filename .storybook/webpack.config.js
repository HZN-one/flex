const path = require("path")

module.exports = ({
   config
}) => {
   // a bunch of other rules here

   config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
   ]

   // Alternately, for an alias:
   config.resolve.alias = {
      "@Atoms": path.resolve(__dirname, "..", "src", "Components", "Atoms"),
      "@Molecules": path.resolve(__dirname, "..", "src", "Components", "Molecules"),
      "@Organisms": path.resolve(__dirname, "..", "src", "Components", "Organisms"),
      "@src": path.resolve(__dirname, ".."),
      "@Components": path.resolve(__dirname, "..", "src", "Components")
   }

   return config
}