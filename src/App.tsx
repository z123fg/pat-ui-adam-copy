import React from "react";
import ExpandMoreIcon from "./assets/ExpandMoreIcon";
import Accordionish from "./components/Accordionish/Accordionish";
import AccordionishDetails from "./components/Accordionish/AccordionishDetails/AccordionishDetails";
import AccordionishSummary from "./components/Accordionish/AccordionishSummary/AccordionishSummary";
import Button, { ButtonSize, ButtonType } from "./components/Button/Button";
import "./App.css";


import "./styles/index.scss";
import DragNDrop from "./components/DragNDrop/DragNDrop";

function App() {
  return (
    <div className="App">
      <h1>Welcome to PatUI</h1>
      <h3>Default</h3>
      <Button>Default</Button>
      <Button disabled>Default Disabled</Button>
      <h3>Sizes</h3>
      <Button buttonSize={ButtonSize.Large}>Large Button</Button>
      <Button buttonSize={ButtonSize.Small}>Small Button</Button>
      <Button buttonSize={ButtonSize.Small} disabled>
        Small Button Disabled
      </Button>
      <h3>Types</h3>
      <Button>Default Button</Button>
      <Button buttonType={ButtonType.Primary}>Primary Button</Button>
      <Button buttonType={ButtonType.Secondary}>Secondary Button</Button>
      <Button buttonType={ButtonType.Danger}>Danger Button</Button>
      <Button buttonType={ButtonType.Link} href="https://www.google.com">Link Button</Button>
      <Button buttonType={ButtonType.Link}  disabled href="https://www.google.com">Link Button Disabled</Button>
      <div style={{ width: "60%", padding: "5%", margin: "auto" }}>
      <h2 className={"header"}>Accordionish Demo</h2>
      <DragNDrop>
        <Accordionish  >
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
        <Accordionish>
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
    </div>
    </div>
  );
}

export default App;
