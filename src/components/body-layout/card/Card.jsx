import style from "./Card.module.css";
import Tags from "../../../components/Tags/Tag.jsx";
import Button from "../ui/Button/Button.jsx";
import imgVuota from "../../../assets/imagine-vuota.jpg"


export default function Card({ thumb, title, description, id, published, tag }) {

  return (
    <div className={style.card}>
      <img
        className={style.thumb}
        src={published ? `src/assets/${thumb}` : imgVuota}
        alt="Mandys candies"
      />
      <div className={style.cardBody}>
        <h3 className="card-title">{title}</h3>
          <Tags tags={tag}/>
        <p className="card-text">{description}</p>
        <Button />
      </div>
    </div>
  );
}
