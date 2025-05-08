import { useEffect } from 'react';
import './modal.scss';

function Modal({ isOpen, onClose, title, children }) {
    // isOpen : booléen qui indique si la modale est visible
    // onClose : fonction appelée quand l'utilisateur ferme la modale
    // title : texte à afficher en haut de la modale
    // children : contenu HTML à afficher dans la modale

    // ferme la modale si l'utilisateur appuie sur "Escape"
    useEffect(() => { // ajoute un raccourci clavier "escape"
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown)
        }

        // nettoyage (évite les doublons de listeners)
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    // ne rien afficher si la modale est fermée
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}> {/* empêche la fermeture quand on clique dans la modale */}
            <div className="modal-header">
              <h2>{title}</h2>
              <button className="modal-close" onClick={onClose}>✕</button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      );
};

export default Modal;