# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# HRnet – Gestion des employés

Ce projet est une application de gestion des employés développée avec **React**, dans le cadre du projet OpenClassrooms *P14 - Faites passer une librairie jQuery vers React*.

L’application permet d’ajouter de nouveaux employés via un formulaire, de les stocker dans **Redux**, et de les afficher dans un tableau interactif avec recherche, tri et pagination.

---

## 🚀 Fonctionnalités

- Création d’un employé via un formulaire dynamique
- Validation des champs
- Sélecteurs de date (via `react-datepicker`)
- Liste déroulante d'états US
- Enregistrement dans le store Redux
- Affichage des employés via un tableau personnalisable (recherche, tri, pagination)
- Utilisation d'une modale React publiée sur NPM (`modale_form_npm`)

---

## 🛠️ Technologies utilisées

- [React](https://reactjs.org/) (Vite)
- [Redux Toolkit](https://redux-toolkit.js.org/) pour la gestion d'état
- [React Datepicker](https://reactdatepicker.com/)
- [React Select](https://react-select.com/) *(si utilisé)*
- [Vite](https://vitejs.dev/) pour le bundling
- [modale_form_npm](https://www.npmjs.com/package/modale_form_npm) (composant personnalisé)

---

## 📦 Installation

1. **Cloner le dépôt :**

```bash
git clone https://github.com/marlener87/P14_react
cd P14_react
