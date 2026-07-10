
# Tâches terminées :

### 0.01 - 03-06-2026
- Installation de react, react router, zustand, bootsrap.
- Création du routeur et du layout de base (Header, Footer...).
- Création d'un switch dark/light mode.
- Connexion à l'API
- Création des cartes de recettes.
- Ajout d'un loader pendant le chargement des données.
- Affichage des six premières proto-cartes de recettes sur la page d'acueil.


### 0.02 - 05-06-2026
- Filtre de recherche
- Pagination
- mise à jour du css
- Mise en place de la page détail de la recette


### 0.03 - 06-06-2026
- Cartes Terminées
- Banière d'acueil stylée
- Détails de recette fini (presque)
- Composant filtre comencé


### 0.04 - 07-06-2026
- rectification du code, revue des oublis.
- Gestion des favoris sans Zustand (révision ch14) terminé


### 0.05 - 08-06-2026
- Gestion des favoris avec Zustand (révision ch15) terminé
- CSS recipeDisplay corrigé
- marge du header et affichage du Logo corrigé
- correction des boutons non fonctionnels terminé


### 0.06 - 09-06-2026
- Filtres fonctionnels
- Amélioration du CSS (entièrement responsive)
- bug sur le rechargement de la liste de recette avec filtre activé, réglé.
- Analyse des comportements du site


### 0.07 - 10-06-2026
- Oubli du titre pour l'onglet de la page de la recette réglé. 
    (Récupération de {recipe.name} dans le loaderData)
- Corection CSS, hover des bouton ajouter / retirer
- Ajout d'une condition à l'affichage de la pagination (existe si totalPages > 1)
- Ajout d'une alerte en cas de 0 résultats de recherche
- Disposition des infos de la recettes corrigée

### 0.08 - 12-06-2026
- Supression des déclaration CSS fantôme

### 0.09 - 12-06-2026
- Création d'un store et nettoyage du code pour gérer les states des filtres et de la pagination avec zustand

# Notes :

Préférences de langues:
- Code : Anglais
- Utilisateur : Français
- Commentaires: Français

- J'ai choisi d'utiliser bootstrap car je manquais de temps pour me mettre à tailwind.
- J'ai gardé les fonctionalité bootstrap pour les boutons, patern de cartes, alertes, les marges ou autre petit règles css facile à retrouver. Pour tout ce qui est plus complexe et structurel, j'ai créé mes propres règles css.
- J'ai aussi pris quelques libertés avec le css. Tout en faisant attention à respecter les consignes et le modèle présenté.

bonus : 
    - Une banière sur base de récupération des images de l'API dans un ordre aléatoire.
    - Mise en place d'un système de thème dark & light par curiosité et car je suis de la team darktheme.
    - J'ai préféré représenter le deuxième bouton favori par une étoile avec le compteur à côté, qui restent un lien vers la page.
    - Le header en fixed.
    - Header dans un burgermenu en résolution réduite.