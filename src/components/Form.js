import { useState } from "react";

const Form = ( {setAnimals} ) => {

    

    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [favFoods, setFavFoods] = useState("");
    const [birthYear, setBirthYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnimal = { name, species, favFoods, birthYear }
        const newPhotoAlt = {
            "photo": "https://freesvg.org/img/WoodlandAnimals.png",
            "alt": "default new photo"
        };
        const newCompleteAnimal = { ...newAnimal, ...newPhotoAlt };
        setAnimals(e => [...e, newCompleteAnimal]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter animal name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="enter species of animal"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="enter favourite foods"
                    value={favFoods}
                    onChange={(e) => setFavFoods([e.target.value])}
                />
                <input
                    type="text"
                    placeholder="enter birth year"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )

}

export default Form;