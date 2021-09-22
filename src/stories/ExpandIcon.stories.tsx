import React, { useState } from "react";
import ExpandIcon, {ExpandIconProps} from '../components//ExpandIcon/ExpandIcon'
import { Story, Meta } from '@storybook/react';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from "../assets/ExpandMoreIcon";


export default {
    title: "Example/ExpandIcon",
    component: ExpandIcon,
    
  } as Meta;
  const Template: Story<ExpandIconProps> = (args) =>{
      const [expand,setExpand] = useState(false);
      return(
          <div>
              <FormControlLabel control={<Switch checked={expand} onChange={()=>{setExpand(prev=>!prev)}}/>} label='Expand'/>
              
              <div onClick={()=>{setExpand(prev=>!prev)}}>
              <ExpandIcon  expanded={expand} {...args}></ExpandIcon>
          </div>
          
          </div>
          
      )
  }

  export const Default = Template.bind({});
  Default.args = {
      icon:<ExpandMoreIcon/>,
  }


 
