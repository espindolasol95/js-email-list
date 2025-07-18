//recupero l'elemento UL  e il bottone
const emaiList= document.getElementById ('email-list');
const loadMails= document.getElementById ('load-mails');


//funzione che fa il fetch 10 volte per ottenere le diverse mail
function fetchMails(){
    //svuoto la lista prima di aggiungere quelle nuove
    emaiList.innerHTML='';


    for (let i=0; i<10; i++){
        //chiamata HTTP all API con axios
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{  //response contiene i dati della risposta
        //axios ha goa convertito la risposta JSON, quindi accediamo direttamente a response.data
        const email= response.data.response;

 
   } )  
 }

}
