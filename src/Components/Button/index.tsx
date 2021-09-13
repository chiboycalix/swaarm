import React from 'react'
import './styles.scss';
interface Props {
  onClick(value: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  type: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} className={props.type}>{ props.children}</button>
  )
}
export default Button
