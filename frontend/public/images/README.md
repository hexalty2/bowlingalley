# Images du site

Ce dossier contient toutes les images affichées sur le site dans les sections **Services** et **Galerie**.

## Comment remplacer une image

1. Ajoutez votre photo dans ce dossier (`frontend/public/images/`)
2. Mettez à jour le chemin correspondant dans `frontend/src/pages/LandingPage.jsx`

---

## Section Services

| Fichier placeholder | Section | Description |
|---|---|---|
| `service-fetes-enfants.svg` | Fêtes d'enfants | Photo de fête d'anniversaire pour enfants |
| `service-party-bureau.svg` | Party de bureau | Photo d'équipe ou de sortie de bureau |
| `service-quillathon.svg` | Quillauthon / Levée de fonds | Photo d'événement collectif |
| `service-salle-privee.svg` | Salle Privée | Photo de la salle privée |

## Section Galerie

| Fichier placeholder | Description |
|---|---|
| `gallery-1.svg` | Photo de galerie 1 |
| `gallery-2.svg` | Photo de galerie 2 |
| `gallery-3.svg` | Photo de galerie 3 |
| `gallery-4.svg` | Photo de galerie 4 |
| `gallery-5.svg` | Photo de galerie 5 |
| `gallery-6.svg` | Photo de galerie 6 |

---

## Formats acceptés

Vous pouvez utiliser n'importe quel format d'image standard : `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`

**Exemple** — pour remplacer la photo de la Salle Privée par un fichier `ma-photo.jpg` :

1. Copiez `ma-photo.jpg` dans ce dossier
2. Dans `LandingPage.jsx`, trouvez la ligne :
   ```js
   image: "/images/service-salle-privee.svg",
   ```
3. Remplacez-la par :
   ```js
   image: "/images/ma-photo.jpg",
   ```
