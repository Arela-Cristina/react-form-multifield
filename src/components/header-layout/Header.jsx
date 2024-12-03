import style from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={style.backgroundColor}>
        <div className={style.header}>Create a new Brawler</div>
      </div>
    </header>
  );
}
