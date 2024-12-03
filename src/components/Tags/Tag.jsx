import style from "./Tag.module.css";

export default function Tags({ tags = [] }) {

  const tagColors = {
    Legendary: '#f5c500',
    Mythic: '#eb274d',
    Epic: '#8929c9',
    Rare: '#33d7a3',
    "Super Rare":  '#62caeb',
    Assasin: '#e7d0aa',
    Controller: '#e7d0aa',
    Sniper: '#e7d0aa',
    Artillery: '#e7d0aa',
    Support: '#e7d0aa',
    Tank: '#e7d0aa',
    Destructor : '#e7d0aa'
  }

  return (
    <ul className={style.tags}>
      {tags.map((tag, index) => (
        <li style={{backgroundColor: tagColors[tag]}} key={index} className={style.tagStyle}>
          {tag}
        </li>
      ))}
    </ul>
  );
}