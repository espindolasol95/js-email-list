//recupero l'elemento UL  e il bottone
const emailList = document.getElementById ('email-list');
const loadEmails = document.getElementById ('load-emails');


//funzione che fa il fetch 10 volte per ottenere le diverse mail
function fetchMails(){
    //svuoto la lista prima di aggiungere quelle nuove
    emailList.innerHTML='';


    for (let i=0; i<10; i++){
        //chiamata HTTP all API con axios
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{  //response contiene i dati della risposta
        //axios ha goa convertito la risposta JSON, quindi accediamo direttamente a response.data
        const email= response.data.response;

        //creo un elemento <LI> per aggiungerlo alla lista 
        const li = document.createElement('li');

        //aggiungo la classe di bootstrap per avere uno stile piu ordinato e carino
         li.classList.add('list-group-item');
        //metto l' email  come testo dentro il <li>
        li.textContent=email;
        //metto  l' <li> alla lista <ul>
        emailList.appendChild(li);
       } );  
    }

} 
  // quando l'utente clicca il bottone,esseguiamo la funzione fetchMails
  loadEmails.addEventListener('click', fetchMails);