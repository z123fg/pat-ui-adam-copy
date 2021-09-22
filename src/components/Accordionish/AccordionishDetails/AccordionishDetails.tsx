import React, { FC, ReactNode } from "react";
import classes from './AccordionishDetails.module.css'

export interface AcdDetailsProps{
    children?:ReactNode;
}

const AccordionishDetails:FC<AcdDetailsProps> = ({children}) =>{
    return (
        <div>
          <div className={classes.innerContainer}>
            <p className={classes.typography}>{children}</p>
          </div>
        </div>
      );
}

export default AccordionishDetails;
