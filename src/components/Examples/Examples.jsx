import { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import Section from '../Header/Section';

import { EXAMPLES } from '../../data';
import Tabs from '../Header/Tabs';
import Tabs from '../Header/Tabs';

export default function Examples(){
    const [selectedTopic, setSelectedTopic]= useState('');
  

    function handleSelect(selectedButton){
        //selectedButton =>'Component', 'JSX' , etc, which could be four identifer that could be recieved as a parameter
        setSelectedTopic(selectedButton)
    }

    return(
        <Section title="Examples" id="examples">
          <Tabs></Tabs>

          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'}onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          
            {!selectedTopic?<p>Please Select a Topic</p>:null}

          {selectedTopic?(<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>): null}

        </Section>
    )
} 