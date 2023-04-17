import React from "react"


type AccordionPropsType = {
  titleValue: string
}

function Accordion(props: AccordionPropsType) {
  return <div>
    <AccordionTitle title={props.titleValue} />
    <AccordionBody />
  </div>
};

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3>{props.title}</h3>
  )
};

function AccordionBody() {
  return (
  
  )
};



export default Accordion;
