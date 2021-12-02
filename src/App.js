import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import Card from './components/Card'
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import animalData from './data/animalData';

function App() {

  const [animals, setAnimals] = useState(animalData);

  return (
    <>
      <Navbar />
      <Header animalCount={animals.length} />
      <main>
        <Form setAnimals={setAnimals} />
        <div className="cards__wrapper">
          {animals.map(animal => {
            return <Card key={animal.name + uuidv4} name={animal.name} species={animal.species} favFoods={animal.favFoods.join(", ")}
              birthYear={animal.birthYear} photo={animal.photo} alt={animal.alt} />
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
