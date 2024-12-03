import style from "./DeleteButton.module.css";

export default function DeletedButton({onDeleteBrawler}) {
  return (
    <button 
    className={ style.delete }
    onClick={onDeleteBrawler}
    >X
    </button>
  );
}
