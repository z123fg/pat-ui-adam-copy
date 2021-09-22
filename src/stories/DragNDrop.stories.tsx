import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';
import DragNDrop, {DNDProps} from '../components//DragNDrop/DragNDrop';
import Accordionish from '../components//Accordionish/Accordionish';
import AccordionishSummary from '../components//Accordionish/AccordionishSummary/AccordionishSummary';
import AccordionishDetails from '../components//Accordionish/AccordionishDetails/AccordionishDetails';
import ExpandMoreIcon from '../assets/ExpandMoreIcon';




export default {
    title: "Example/DragNDrop",
    component: DragNDrop,
    
  } as Meta;
  const Template: Story<DNDProps> = (args) =>{
      return (
          <DragNDrop {...args}  style={{maxWidth:"300px"}}>
              <Accordionish id='acd-container2'>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 1{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
        <Accordionish>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 2{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
        <Accordionish id='acd-container1'>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 3{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
        <Accordionish>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 4{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
        <Accordionish>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 5{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
        <Accordionish>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 6{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
        <Accordionish>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 7{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
        <Accordionish>
          <AccordionishSummary expandIcon={<ExpandMoreIcon/>}>
            Accordion 8{" "}
          </AccordionishSummary>
          <AccordionishDetails>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionishDetails>
        </Accordionish>
          </DragNDrop>
      )
  }

  export const Default = Template.bind({});
  Default.args = {
  }