import {useEffect} from "react";
import {createPortal} from 'react-dom'

const modalRoot = document.querySelector('#modal-root')

export default function Modal({onClose, children}) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }

    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            console.log('хуйнул в бекдроп')
            onClose()
        }
    }
    return( createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-neutral-950/50  backdrop-blur-sm" onClick={handleBackdropClick}>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-1/3 p-2 bg-transparent rounded ">

                            {children}
                        </div>
                  </div>, modalRoot)
        )

}


// import {Component} from 'react'
// import {createPortal} from 'react-dom'
//
// const modalRoot = document.querySelector('#modal-root')
//
//  class Modal extends Component {
//
//     componentDidMount(){
//         window.addEventListener('keydown',this.handleKeyDown)
//     }
//
//     componentWillUnmount(){
//         window.removeEventListener('keydown',this.handleKeyDown)
//
//     }
//
//     handleKeyDown = e =>{
//         if(e.code === 'Escape'){
//             this.props.onClose()
//             }
//         }
//
//     handleBackdropClick = e =>{
//         if(e.target === e.currentTarget){
//             console.log('хуйнул в бекдроп')
//             this.props.onClose()
//         }
//
//     }
//
//     render(){
//         return( createPortal( <div className="fixed top-0 left-0 w-full h-full bg-neutral-950/50  backdrop-blur-sm" onClick={this.handleBackdropClick}>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-1/3 p-2 bg-fff
//
//                 rounded ">
//                     {this.props.children}
//                 </div>
//             </div>, modalRoot)
//         )
//     }
//
//  }
//
// export default Modal