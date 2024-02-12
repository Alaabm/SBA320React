import { ReactNode } from 'react'

interface Props {
    //to pass html content
    children: ReactNode;
    // text:string;
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert;