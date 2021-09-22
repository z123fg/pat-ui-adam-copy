import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";
import AccordionishSummary, {
  AcdSummaryProps,
} from "../components/Accordionish/AccordionishSummary/AccordionishSummary";
import Accordionish from "../components//Accordionish/Accordionish";
import AccordionishDetails from "../components//Accordionish/AccordionishDetails/AccordionishDetails";
import ExpandMoreIcon from "../assets/ExpandMoreIcon";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default {
  title: "Example/AccordionishSummary",
  component: AccordionishSummary,
  argTypes: {
    expandIcon: {
      control: {
        type: "select",
      },
      options: [<ExpandMoreIcon/>, ArrowDropDownIcon],
    },
  },
} as Meta;

const Template: Story<AcdSummaryProps> = (args) => (
  <div style={{ maxWidth: "300px" }}>
    <Accordionish>
      <AccordionishSummary {...args}>Accordion 1 </AccordionishSummary>
      <AccordionishDetails>
        1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionishDetails>
    </Accordionish>
    <Accordionish>
      <AccordionishSummary {...args}>Accordion 1 </AccordionishSummary>
      <AccordionishDetails>
        1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionishDetails>
    </Accordionish>
    <Accordionish>
      <AccordionishSummary {...args}>Accordion 1 </AccordionishSummary>
      <AccordionishDetails>
        1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionishDetails>
    </Accordionish>
  </div>
);

export const NoIcon = Template.bind({});
NoIcon.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  expandIcon: <ExpandMoreIcon />,
};
