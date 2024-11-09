import style from './Input.module.css';

const Input = ({keydown}) => {
    return (
        <input type="text" 
        placeholder='Enter food items here' 
        className={style.input}
        onKeyDown={keydown}/>
    )
}

export default Input