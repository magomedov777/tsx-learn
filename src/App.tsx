import React from 'react';
import './App.css';
import { OnOff } from './components/OnOff';
import UncontrolledAccordion from './components/Accordion/UnControlledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';


function sum(a: number, b: number) {
  alert(a + b)
};


function App() {
  console.log("App rendering")
  return (
    <div className={'AppX'}>
      <OnOff on={true}/>

      <UncontrolledAccordion titleValue={'Menu'}/>
      
      <UncontrolledRating/>
      {/* <PageTitle title={"APP component"} />
      <PageTitle title={"new"} />
      Article 1
      <Rating value={3} />
     

      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}

    </div>
  );
};


type PageTitlePropsType = {
  title: string
}


function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
};






























export default App;
