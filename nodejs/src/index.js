import { helloWorld, question1Query} from "./cfg/database.js"

/**
 * Combien y a t il de salarié en date du 2022-08-08 ?
 */
async function question1()  {
    return await question1Query();
}

/**
 * Quel est l'âge moyen chez talosi ?
 *  
 */
function question2()  {
    return ""
}

/**
 * Combien de mission différentes a fait Michel ?
 *  
 */
function question3()  {
    return ""
}

/**
 * Combien de personnes a coopté Winnie ?
 *  
 */
function question4()  {
    return ""
}

/**
 * Quel est le repas d’Eddy le dimanche 28 septembre 2023 ?
 *  
 */
function question5()  {
    return ""
}

/**
 * Pourquoi Kevin met une chemise bleue ?
 *  
 */
function question6()  {
    return ""
}

/**
 * Calculer la somme des primes de cooptation de michel sur les mois de novembre 2023. LES MOIS DE NOVEMBRE ???
 *  
 */
function question7()  {
    return ""
}

/**
 * Calculer la somme des primes de mission de Michel sur les mois de  novembre 2023.
 *  
 */
function question8()  {
    return ""
}

/**
 * Calculer la somme des primes de tous les talosiens sur le mois de décembre 2023.
 *  
 */
function question9()  {
    return ""
}

/**
 * Créer une MR avec mon code et des tests Unitaire.
 *  
 */
function question10()  {
    return ""
}

//console.log(await helloWorld())
console.log("======================================================================")
console.log("RESULT :")
console.log("question 1 :",await question1())
console.log("question 2 :",question2())
console.log("question 3 :",question3())
console.log("question 4 :",question4())
console.log("question 5 :",question5())
console.log("question 6 :",question6())
console.log("question 7 :",question7())
console.log("question 8 :",question8())
console.log("question 9 :",question9())
console.log("question 10 :",question10())
console.log("======================================================================")