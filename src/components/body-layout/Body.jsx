import style from "./body.module.css";
import Tags from "../Tags/Tag.jsx";
import Card from "./card/Card.jsx";
import brawlStars from "../../assets/database/brawlStars.js";

export default function Body() {
  const tagTopics = [];
  console.log(tagTopics);

  brawlStars.forEach((el) => {
    // console.log("ecco tutti tipi di  tag", el.tag);
    el.tag.forEach((val) => {
      if (!tagTopics.includes(val)) {
        tagTopics.push(val);
      }
    });
  });

  return (
    <main>
      <section className={style.tagsContainer}>
        <Tags  tags={tagTopics} />
      </section>
      <section className={style.cardContainer}>
        <div className={style.col}>
          {brawlStars.map((el) => (
            <Card
              thumb={el.thumb}
              title={el.name}
              tag={el.tag}
              description={el.description}
              key={el.id}
              published={el.published}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
