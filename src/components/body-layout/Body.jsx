import style from "./body.module.css";
import Tags from "../Tags/Tag.jsx";
import Card from "./card/Card.jsx";
import imgVuota from "../../assets/imagine-vuota.jpg";
import brawlStars from "../../assets/database/brawlStars.js";
import { useState } from 'react';

export default function Body() {

  //tag che stampiano sotto il header
  const tagTopics = [];
  // console.log(tagTopics);

  brawlStars.forEach((el) => {
    // console.log("ecco tutti tipi di  tag", el.tag);
    el.tag.forEach((val) => {
      if (!tagTopics.includes(val)) {
        tagTopics.push(val);
      }
    });
  });

  //state della struttura dati
  const [brawler, setBrawler] = useState(brawlStars);

  //state per input text
  const [newBrawler, setNewBrawler] = useState('Nita');


  // GESTIONE INPUT TEXT
  //creiamo una funzione per gestire il value di imput Text
  function onTextChange(e) {
    console.log(e.target.value) //=> acccedere a la proprieta value
    setNewBrawler(e.target.value) //Passiamo il value alla funzione setNewBrawler del nostro state per  input text
  }


  //GESTIONE INPUT SUBMIT
  function addBrawler(e) {
    e.preventDefault()//per evitare dei risettare il sito

    // FIX ERROR: generare un Id unico
    const newId = Math.max(...brawler.map(el => el.id), 0) + 1;

    const newBrawlerObject = {
      id: newId, // nuovo Id value
      name: newBrawler, // Nuovo Brawler value
      description: "This is a new Brawler", // nuova Description value
      thumb: imgVuota, // Nuova Thumb value
      tag: ["New"], // Nuova Tag value
      published: false, //Nuovo Booleano
    };

    //nel nostro array, creiamo un nuovo array con il valore che ci arriva da Set Brawler
    setBrawler([...brawler, newBrawlerObject])
    console.log(setBrawler([...brawler, newBrawlerObject]))
    setNewBrawler('')//dopo Submit svuotiamo il campo di input text
  }


  //GESTIONE DELETE
  function deleteBrawler(id) {
    const updatedBrawlers = brawler.filter((el) => el.id !== id);
    setBrawler(updatedBrawlers);
  }

  return (
    <main>
      <section className={style.tagsContainer}>
        <Tags tags={tagTopics} />



        <div>
          <form action="" onSubmit={addBrawler} className={style.formStyle}> {/* FORM */}
            {/* INPUT TEXT */}
            <label htmlFor="brawler-name">Create a Name:</label>
            <input
              id="brawler-name"
              onChange={onTextChange}
              type="text"
              placeholder="Aggiungi un Brawler"
              value={newBrawler}
            />

            {/* SELECT TIER */}


            <div>
              <label htmlFor="tier-select">Select Tier:</label>
              <select id="tier-select" name="tier">
                <option value="Legendary">Legendary</option>
                <option value="Mythic">Mythic</option>
                <option value="Epic">Epic</option>
                <option value="Super rare">Super rare</option>
                <option value="Rare">Rare</option>
              </select>
            </div>


            {/* SELECT CLASS */}

            <div>
              <label htmlFor="class-select">Select Class:</label>
              <select id="class-select" name="class">
                <option value="Assassin">Assassin</option>
                <option value="Controller">Controller</option>
                <option value="Sniper">Sniper</option>
                <option value="Artillery">Artillery</option>
                <option value="Support">Support</option>
                <option value="Tank">Tank</option>
                <option value="Destructor">Destructor</option>
              </select>
            </div>


            {/* CHECKBOXES PER  TAGS */}
            <fieldset>
              <legend>Select Tags</legend>
              <div>
                <label>
                  <input type="checkbox" name="tag" value="invisibility" /> Invisibility
                </label>
                <br />
                <label>
                  <input type="checkbox" name="tag" value="be reborn" /> Be Reborn
                </label>
                <br />
                <label>
                  <input type="checkbox" name="tag" value="healing" /> Healing
                </label>
                <br />
                <label>
                  <input type="checkbox" name="tag" value="damage" /> Damage
                </label>
                <br />
                <label>
                  <input type="checkbox" name="tag" value="speed" /> Speed
                </label>
                <br />
                <label>
                  <input type="checkbox" name="tag" value="force" /> Force
                </label>
                <br />
                <label>
                  <input type="checkbox" name="tag" value="poison" /> Poison
                </label>
              </div>
            </fieldset>

            {/* INPUT SUBMIT */}
            <input type="submit" value="Aggiungi" />
          </form>
        </div>




      </section>
      <section className={style.cardContainer}>
        <div className={style.col}>
          {brawler.map((el) => (
            <Card
              thumb={el.thumb}
              title={el.name}
              tag={el.tag}
              description={el.description}
              key={el.id}
              published={el.published}
              id={el.id} //pasiamo il ID
              onDeleteBrawler={() => deleteBrawler(el.id)}//pasiamo la funzione come prop con il id di ogni oggetto
            />
          ))}
        </div>
      </section>
    </main>
  );
}
