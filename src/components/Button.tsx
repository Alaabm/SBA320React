import React from 'react'

interface Props {
    children:string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'danger' | 'info' | 'light' | 'dark' |'link';
    onClick: () => void;
}

const Button = ({children, onClick, color='primary' }: Props) => {
  return (
    <div>
        <button className = {'btn btn-' + color} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button;