// Banque initiale du module Grammaire — Déterminants.
function G_D(text,type,gender,number,note){return {text:text,det:{type:type,gender:gender,number:number,note:note||""}}}
function G_T(text){return {text:text}}
function G_P(level,kind,parts){return {level:level,kind:kind||"phrase",parts:parts}}
window.GRAMMAR_BANK=[
G_P(1,"phrase",[G_D("Le","défini","masculin","singulier"),G_T(" chien regarde "),G_D("une","indéfini","féminin","singulier"),G_T(" balle.")]),
G_P(1,"phrase",[G_D("La","défini","féminin","singulier"),G_T(" tortue mange "),G_D("une","indéfini","féminin","singulier"),G_T(" feuille.")]),
G_P(1,"phrase",[G_D("Un","indéfini","masculin","singulier"),G_T(" oiseau chante dans "),G_D("le","défini","masculin","singulier"),G_T(" jardin.")]),
G_P(1,"phrase",[G_D("Les","défini","masculin","pluriel"),G_T(" enfants rangent "),G_D("des","indéfini","masculin","pluriel"),G_T(" livres.")]),
G_P(1,"phrase",[G_D("Une","indéfini","féminin","singulier"),G_T(" étoile brille dans "),G_D("le","défini","masculin","singulier"),G_T(" ciel.")]),
G_P(1,"phrase",[G_D("Le","défini","masculin","singulier"),G_T(" chat dort sur "),G_D("la","défini","féminin","singulier"),G_T(" chaise.")]),
G_P(1,"phrase",[G_D("Des","indéfini","féminin","pluriel"),G_T(" pommes sont dans "),G_D("le","défini","masculin","singulier"),G_T(" panier.")]),
G_P(1,"phrase",[G_D("Une","indéfini","féminin","singulier"),G_T(" grenouille saute près de "),G_D("la","défini","féminin","singulier"),G_T(" rivière.")]),
G_P(1,"phrase",[G_D("Le","défini","masculin","singulier"),G_T(" garçon ouvre "),G_D("un","indéfini","masculin","singulier"),G_T(" livre.")]),
G_P(1,"phrase",[G_D("La","défini","féminin","singulier"),G_T(" fille dessine "),G_D("une","indéfini","féminin","singulier"),G_T(" planète.")]),
G_P(1,"phrase",[G_D("Un","indéfini","masculin","singulier"),G_T(" ballon roule sous "),G_D("la","défini","féminin","singulier"),G_T(" table.")]),
G_P(1,"phrase",[G_D("Les","défini","féminin","pluriel"),G_T(" étoiles éclairent "),G_D("la","défini","féminin","singulier"),G_T(" nuit.")]),

G_P(2,"phrase",[G_T("Hugo range "),G_D("ses","possessif","masculin","pluriel"),G_T(" livres dans "),G_D("son","possessif","masculin","singulier"),G_T(" sac.")]),
G_P(2,"phrase",[G_T("Zoé prépare "),G_D("sa","possessif","féminin","singulier"),G_T(" collation avec "),G_D("une","indéfini","féminin","singulier"),G_T(" pomme.")]),
G_P(2,"phrase",[G_D("Cette","démonstratif","féminin","singulier"),G_T(" tortue avance vers "),G_D("la","défini","féminin","singulier"),G_T(" rivière.")]),
G_P(2,"phrase",[G_D("Ces","démonstratif","masculin","pluriel"),G_T(" oiseaux construisent "),G_D("leur","possessif","masculin","singulier"),G_T(" nid.")]),
G_P(2,"phrase",[G_T("Arthur apporte "),G_D("son","possessif","masculin","singulier"),G_T(" ballon sur "),G_D("ce","démonstratif","masculin","singulier"),G_T(" terrain.")]),
G_P(2,"phrase",[G_D("Ma","possessif","féminin","singulier"),G_T(" sœur lit "),G_D("ce","démonstratif","masculin","singulier"),G_T(" livre près de "),G_D("la","défini","féminin","singulier"),G_T(" fenêtre.")]),
G_P(2,"phrase",[G_D("Notre","possessif","féminin","singulier"),G_T(" classe visite "),G_D("un","indéfini","masculin","singulier"),G_T(" musée "),G_D("cette","démonstratif","féminin","singulier"),G_T(" semaine.")]),
G_P(2,"phrase",[G_D("Mes","possessif","masculin","pluriel"),G_T(" crayons sont dans "),G_D("cette","démonstratif","féminin","singulier"),G_T(" boîte.")]),
G_P(2,"phrase",[G_D("Ton","possessif","masculin","singulier"),G_T(" chien suit "),G_D("ce","démonstratif","masculin","singulier"),G_T(" sentier.")]),
G_P(2,"phrase",[G_D("Ces","démonstratif","féminin","pluriel"),G_T(" photos montrent "),G_D("nos","possessif","féminin","pluriel"),G_T(" vacances.")]),
G_P(2,"phrase",[G_T("Camille pose "),G_D("sa","possessif","féminin","singulier"),G_T(" carte sur "),G_D("la","défini","féminin","singulier"),G_T(" table.")]),
G_P(2,"phrase",[G_D("Cet","démonstratif","masculin","singulier"),G_T(" arbre abrite "),G_D("des","indéfini","masculin","pluriel"),G_T(" oiseaux.")]),

G_P(3,"phrase",[G_D("Quel","interrogatif","masculin","singulier"),G_T(" animal laisse "),G_D("ces","démonstratif","féminin","pluriel"),G_T(" traces dans "),G_D("la","défini","féminin","singulier"),G_T(" boue ?")]),
G_P(3,"phrase",[G_D("Quelle","interrogatif","féminin","singulier"),G_T(" planète possède "),G_D("ces","démonstratif","masculin","pluriel"),G_T(" grands anneaux ?")]),
G_P(3,"phrase",[G_D("Plusieurs","autre","masculin","pluriel","quantité"),G_T(" élèves rangent "),G_D("leurs","possessif","masculin","pluriel"),G_T(" cahiers dans "),G_D("ces","démonstratif","masculin","pluriel"),G_T(" sacs.")]),
G_P(3,"phrase",[G_D("Quelques","autre","féminin","pluriel","quantité"),G_T(" étoiles brillent derrière "),G_D("les","défini","masculin","pluriel"),G_T(" nuages.")]),
G_P(3,"phrase",[G_D("Chaque","autre","masculin","singulier","distribution"),G_T(" campeur prépare "),G_D("son","possessif","masculin","singulier"),G_T(" sac avant "),G_D("la","défini","féminin","singulier"),G_T(" randonnée.")]),
G_P(3,"phrase",[G_D("Aucune","autre","féminin","singulier","quantité nulle"),G_T(" lumière ne traverse "),G_D("cette","démonstratif","féminin","singulier"),G_T(" boîte fermée.")]),
G_P(3,"phrase",[G_D("Trois","numéral","féminin","pluriel"),G_T(" planètes apparaissent sur "),G_D("cette","démonstratif","féminin","singulier"),G_T(" carte.")]),
G_P(3,"phrase",[G_D("Deux","numéral","masculin","pluriel"),G_T(" dauphins suivent "),G_D("le","défini","masculin","singulier"),G_T(" bateau.")]),
G_P(3,"phrase",[G_D("Quels","interrogatif","masculin","pluriel"),G_T(" objets dois-tu placer dans "),G_D("ton","possessif","masculin","singulier"),G_T(" sac ?")]),
G_P(3,"phrase",[G_D("Quelles","interrogatif","féminin","pluriel"),G_T(" étoiles vois-tu dans "),G_D("ce","démonstratif","masculin","singulier"),G_T(" ciel ?")]),
G_P(3,"phrase",[G_D("Plusieurs","autre","féminin","pluriel","quantité"),G_T(" familles observent "),G_D("les","défini","féminin","pluriel"),G_T(" aurores pendant "),G_D("leur","possessif","masculin","singulier"),G_T(" voyage.")]),
G_P(3,"phrase",[G_D("Quelques","autre","masculin","pluriel","quantité"),G_T(" indices permettent de résoudre "),G_D("ce","démonstratif","masculin","singulier"),G_T(" mystère.")])
];