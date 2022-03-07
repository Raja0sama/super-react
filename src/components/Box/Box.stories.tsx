/* eslint-disable */
import Box from "./Box";

export default {
  title: "Box",
  component: Box,
};

const template = (args: any) => <Box {...args}></Box>;
export const Primary = () => template.bind({});

Primary.story = {
  name: "primary",
  text: "RajaOsama",
};
