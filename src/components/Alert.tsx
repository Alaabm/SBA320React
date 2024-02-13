import React from 'react'

const Alert = () => {
  return (
    <div>Alert</div>
  )
}

export default Alert



// import { ReactNode } from 'react'

// interface Props {
//     //to pass html content
//     // text:string;
//     children: ReactNode;
//     //function wiht no parameters that returns a void
//     onClose: () => void;

// }
// //onClose is not defined
// const Alert = ({children, onClose}: Props) => {
//   return (
//     <div className="alert alert-primary alert-dismissable">
//         {children}
//     <button type="button" className="btn-close" onClick={OnClose} data-bs-dismiss="alert" aria-label="Close"></button>
//     </div>
//   )
// }

// export default Alert;