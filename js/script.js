//recupero l'elemento UL  e il bottone
const emaiList= document.getElementById ('email-list');
const loadMails= document.getElementById ('load-mails');


//funzione che fa il fetch 10 volte per ottenere le diverse mail
function fetchMails(){
    //svuoto la lista prima di aggiungere quelle nuove
    emaiList.innerHTML='';
    
}

//axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp =>{

//} )