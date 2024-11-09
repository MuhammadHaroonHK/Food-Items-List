import style from './Items.module.css';
const Items = ({ foodItem }) => {
    
    return (
        <li className={style.item}>{foodItem}
        <button className={style.buttons}>View</button>
        
        </li>
    )
}

export default Items