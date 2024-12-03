import style from "./Card.module.css";
import Tags from "../../../components/Tags/Tag.jsx";
import Button from "../ui/Button/Button.jsx";
import DeletedButton from "../ui/Button/DeleteButton.jsx";
import imgVuota from "../../../assets/imagine-vuota.jpg";


export default function Card({ thumb, title, description, id, published, tag, onDeleteBrawler }) {

  return (

    <div className={style.card}>
      <div className={style.colThumb}>
        <img
          className={style.thumb}
          src={published ? `src/assets/${thumb}` : imgVuota}
          alt="Mandys candies"
        />
      </div>

      {/* passiamo la funzione di deleted come prop del Body alla Card*/}
      <DeletedButton onDeleteBrawler={onDeleteBrawler} />
      <div className={style.cardBody}>
        <h3 className="card-title">{title}</h3>
        <Tags tags={tag} />
        <p className="card-text">{description}</p>
        <Button />
      </div>
    </div>

  );
}
