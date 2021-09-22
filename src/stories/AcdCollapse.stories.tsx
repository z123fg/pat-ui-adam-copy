import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';
import AccordionishDetails from "../components/Accordionish/AccordionishDetails/AccordionishDetails";
import AcdCollapse, { TransitionComponentProps } from "../components//transition-component/AcdCollapse";
import { FormControlLabel, Switch } from "@material-ui/core";
import Card from '@material-ui/core/Card';


export default {
    title: "Example/AcdCollapse",
    component: AcdCollapse,
    
  } as Meta;
  const Template: Story<TransitionComponentProps> = (args) =>{
     const [expanded, setExpanded] = useState<boolean>(false);
     return (

        <Card style={{paddingLeft:'10px',maxWidth:"300px"}}>
              <FormControlLabel control={<Switch checked={expanded} onChange={()=>{setExpanded(prev=>!prev)}}/>} label='Expand'/>
    <AcdCollapse
      {...args}
      in={expanded}
    >
      <AccordionishDetails>
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionishDetails>
    </AcdCollapse>
        </Card>
   
  ) 
  } 
  export const Default = Template.bind({});
  Default.args = {
  }


  export const FastTransition = Template.bind({});
FastTransition.args = {
    timeout:100
}

export const PartialCollapse = Template.bind({});
PartialCollapse.args = {
    collapseHeight:20
}