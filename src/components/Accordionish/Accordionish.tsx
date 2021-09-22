import React, { FC, ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import classes from "./Accordionish.module.css";
import AcdCollapse from "../transition-component/AcdCollapse";
import {AcdDetailsProps} from './AccordionishDetails/AccordionishDetails';
import {AcdSummaryProps} from './AccordionishSummary/AccordionishSummary';
import {TransitionComponentProps} from '../transition-component/AcdCollapse'

export interface AcdProps {
  children: [ReactElement<AcdDetailsProps>,ReactElement<AcdSummaryProps>];
  defaultExpanded?: boolean;
  disable?: boolean;
  expand?: boolean;
  onChange?: () => void;
  square?: boolean;
  TransitionComponent?: FC<TransitionComponentProps>;
  id?:string
}

 const Accordionish = React.forwardRef<HTMLDivElement, AcdProps>(
  (
    {
      children,
      defaultExpanded = false,
      disable = false,
      expand = false,
      onChange=null,
      square = false,
      TransitionComponent = AcdCollapse,
      id,
      ...rest
    },
    ref
  ) => {
    const {onClick, onDragStart} = rest as {onClick: Function,onDragStart:(event: any) => void}
    const [expanded, setExpanded] = useState<boolean>(defaultExpanded);
    const [unexpandedClasses, setUnexpandedClasses] = useState<any>();
    const AccordionSummary = children[0] as ReactElement;
    const AccordionDetails = children.slice(1);
    const didMountRef = useRef<boolean>(false);

    
    useEffect(() => {
      if (!disable&&didMountRef.current) {
        setExpanded(expand);
        onChange && onChange();
      }
    }, [expand]);
    useEffect(()=>{
      didMountRef.current = true;
    },[])

    useEffect(() => {
      setUnexpandedClasses(
        [
          classes.Acd_root,
          classes.Paper_elevation2,
          classes.Paper_rounded,

          classes.Paper_root,
          square ? "" : classes.Acd_rounded,
          expanded ? classes.expanded : "",
          disable ? classes.disabled : "",
        ].join(" ")
      );
    }, [square, disable, expanded]);
    
    const handleClick = (ee: any) => {
      if (onClick) {
        onClick(ee);
        ee.stopPropagation();
        return;
      }
      if (disable) {
        ee.stopPropagation();
        return;
      }

      setExpanded((prevExpanded) => !prevExpanded);

      onChange && onChange();
    };

    return (
      <div ref={ref} onDragStart={onDragStart} className={unexpandedClasses} id={id}>
        <div onClickCapture={handleClick}>
          {React.cloneElement(AccordionSummary, { expanded: expanded })}
        </div>

        <TransitionComponent
          in={expanded}
          timeout={300}
          onClick={(e) => e.stopPropagation()}
        >
          {AccordionDetails}
        </TransitionComponent>
      </div>
    );
  }
);

export default Accordionish;
