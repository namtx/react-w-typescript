import * as webpack from "webpack"
import * as HtmlWebpackPlugin from "html-webpack-plugin"

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html"
})

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"}
    ]
  },
  plugins: [htmlPlugin]
}

export default config;
