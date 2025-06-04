// import { useEffect } from 'react';

// function Modal({ isOpen, onClose, title, children }) {
//     // isOpen : booléen qui indique si la modale est visible
//     // onClose : fonction appelée quand l'utilisateur ferme la modale
//     // title : texte à afficher en haut de la modale
//     // children : contenu HTML à afficher dans la modale

//     // ferme la modale si l'utilisateur appuie sur "Escape"
//     useEffect(() => { // ajoute un raccourci clavier "escape"
//         const handleKeyDown = (e) => {
//             if (e.key === "Escape") {
//                 onClose();
//             }
//         };

//         if (isOpen) {
//             document.addEventListener("keydown", handleKeyDown)
//         }

//         // nettoyage (évite les doublons de listeners)
//         return () => {
//             document.removeEventListener("keydown", handleKeyDown);
//         };
//     }, [isOpen, onClose]);

//     // ne rien afficher si la modale est fermée
//     if (!isOpen) return null;

//     return (
//         <div
//             onClick={onClose}
//             style={{
//                 position: 'fixed',
//                 inset: 0,
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 zIndex: 1000,
//             }}
//         >
//             <div
//                 onClick={(e) => e.stopPropagation()}
//                 style={{
//                     backgroundColor: '#fff',
//                     borderRadius: '8px',
//                     padding: '1.5rem',
//                     width: '100%',
//                     maxWidth: '500px',
//                     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//                     animation: 'fadeIn 0.2s ease-in-out',
//                 }}
//             >
//             <style>
//             {`
//                 @keyframes fadeIn {
//                 from {
//                     opacity: 0;
//                     transform: translateY(-10px);
//                 }
//                 to {
//                     opacity: 1;
//                     transform: translateY(0);
//                 }
//                 }
//             `}
//             </style>
//                 <div
//                     style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginBottom: '1rem',
//                     }}
//                 >
//                     <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h2>
//                     <button
//                     onClick={onClose}
//                     style={{
//                         background: 'none',
//                         border: 'none',
//                         fontSize: '1.5rem',
//                         cursor: 'pointer',
//                         color: '#666',
//                     }}
//                     onMouseEnter={(e) => (e.target.style.color = '#000')}
//                     onMouseLeave={(e) => (e.target.style.color = '#666')}
//                     >
//                     ✕
//                     </button>
//                 </div>
//                 <div style={{ fontSize: '1rem', color: '#333' }}>{children}</div>
//             </div>
//         </div>
//     );
// };

// export default Modal;