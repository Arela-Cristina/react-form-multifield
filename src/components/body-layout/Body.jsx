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

  //variabile di stato per il form, actualizamos las propiedades...
  const [formData, setFormData] = useState({
    name: '',
    tag: [], //perche i tag si trovano in un array
    tier: '',
    class: '',
  });

  //funzione che collega  el atributo name del form con la proprieta value del oggeto che contiene ogni select, input, check box del form
  function handleFormData(e) {
    const { name, type, checked, value } = e.target; //destrutturiamo

    //controllo checkbox
    if (type === "checkbox") {
      setFormData((currentData) => {
        const newTags = checked //Booleano
          ? [...currentData.tag, name]  // aggiunge Tag se e True
          : currentData.tag.filter((tag) => tag !== name) //filtra Tag se e False

        return {
          ...currentData, //ritorna la data precedente
          tag: newTags, //piu la nuova data di tag
        }
      });

      //controllo input text y select
    } else {
      setFormData((currentData) => ({
        ...currentData,
        [name]: type === "checkbox" ? checked : value
      }))
    }
  }


  //GESTIONE INPUT SUBMIT
  function addBrawler(e) {
    e.preventDefault()
    const newId = Math.max(...brawler.map(el => el.id), 0) + 1; //generare nuovo id

    const newBrawlerObject = {
      id:newId,
      ...formData,
      description: "This is a Desription",
      thumb: imgVuota,
      published:false
    };

    //nel nostro array, creiamo un nuovo array con il valore che ci arriva da Set Brawler
    setBrawler([...brawler, newBrawlerObject])
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
            <label htmlFor="name">Create a Name:</label>
            <input
              id="name"
              name="name"
              onChange={handleFormData}
              type="text"
              placeholder="Write a Name"
              value={formData.name}
            />

            {/* SELECT TIER */}
            <div>
              <label htmlFor="tier-select">Select Tier:</label>
              <select id="tier-select" name="tier" onChange={handleFormData}
                value={formData.tier}>
                <option value="Legendary">Legendary</option>
                <option value="Mythic">Mythic</option>
                <option value="Epic">Epic</option>
                <option value="Super">Super rare</option>
                <option value="Rare">Rare</option>
              </select>
            </div>


            {/* SELECT CLASS */}
            <div>
              <label htmlFor="class-select">Select Class:</label>
              <select id="class-select" name="class" onChange={handleFormData}
                value={formData.class}>
                <option value="Assasin">Assassin</option>
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
              <div className={style.checkBoxContainer}>

                {["invisibility", "beReborn", "healing", "damage", "speed", "force", "poison"].map((tag) => (
                  <label htmlFor={tag} key={tag}>
                    <input
                      id={tag}
                      type="checkbox"
                      name={tag}
                      checked={formData.tag.includes(tag)}//checked = valore Booleano
                      onChange={handleFormData}
                    /> {tag}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* INPUT SUBMIT */}
            <input type="submit" value="Create" />
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
