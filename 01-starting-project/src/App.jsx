import { useEffect, useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data';


function App() {
  const [selectedTopic, setselectedTopic] = useState('components');
  function handleSelect(selectedButton) {
    setselectedTopic(selectedButton.toLowerCase());
    //selectedButton =>'Components','JSX','Props','State'
    console.log(selectedTopic);
  }
  // useEffect(() => {
  //   if (selectedTopic !== '') {
  //     console.log('Selected Topic:', selectedTopic);
  //   }
  // }, [selectedTopic]);
  console.log('APP COMPONENT EXECUTING');
  let tabContent=<p>Please select a topic</p>;
  if(selectedTopic){
    tabContent=(
      <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div> 
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>

          <h2>Time to get started!</h2>
          {/* <ul>
            {CORE_CONCEPTS.map((conceptItem)=>(
              <CoreConcept key={conceptItem.title}{...conceptItem}
           /> ))}
          </ul> */}
           <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
            />
            {/* <CoreConcept {...CORE_CONCEPTS[1]}/> */}
             <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
            />
          </ul> 
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>States</TabButton>
          </menu>
          {tabContent}
        </section>
        {/* {selectedTopic} */}
      </main>
    </div>
  );
}

export default App;
