import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
//import { Story, Meta } from "@storybook/react/types-6-0";
import Accordionish, { AcdProps } from "../components//Accordionish/Accordionish";
import AccordionishSummary from "../components//Accordionish/AccordionishSummary/AccordionishSummary";
import AccordionishDetails from "../components/Accordionish/AccordionishDetails/AccordionishDetails";
import ExpandMoreIcon from "../assets/ExpandMoreIcon";
import { Story, Meta } from '@storybook/react';


export default {
  title: "Example/Accordionish",
  component: Accordionish,
  
} as Meta;

const Template: Story<AcdProps> = (args) => (
  <div style={{maxWidth:"300px"}}>
    <Accordionish {...args}>
    <AccordionishSummary expandIcon={<ExpandMoreIcon />}>
      Accordion 1{" "}
    </AccordionishSummary>
    <AccordionishDetails>
      1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionishDetails>
  </Accordionish>

<Accordionish {...args}>
<AccordionishSummary expandIcon={<ExpandMoreIcon />}>
  Accordion 1{" "}
</AccordionishSummary>
<AccordionishDetails>
  1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  malesuada lacus ex, sit amet blandit leo lobortis eget.
</AccordionishDetails>
</Accordionish>

<Accordionish {...args}>
    <AccordionishSummary expandIcon={<ExpandMoreIcon />}>
      Accordion 1{" "}
    </AccordionishSummary>
    <AccordionishDetails>
      1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </AccordionishDetails>
  </Accordionish>
  </div>
  
);

export const Default = Template.bind({});
Default.args = {

}

export const Disabled = Template.bind({});
Disabled.args = {
  disable: true,
};

export const Square = Template.bind({});
Square.args = {
  square:true,
};

export const DefaultExpanded = Template.bind({});
DefaultExpanded.args = {
  defaultExpanded:true,
};


