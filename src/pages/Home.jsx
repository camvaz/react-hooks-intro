/* eslint-disable import/no-webpack-loader-syntax */
import UseState from "!babel-loader!@mdx-js/loader!./components/UseState.mdx";

export const Home = () => {
  return (
    <div>
      <UseState />
    </div>
  );
};
