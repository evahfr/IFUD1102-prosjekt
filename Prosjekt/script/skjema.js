
//Dette er for å slå av og på kundenummerfeltet. Avhenger om kunden har bonuskort eller ikke
window.onload = function() {
//Når skjema lastes opp vil feltet for kundenr være avslått. Ved endring av valg i punktene, påvirker dette funksjon i disabledfield()
//submitknappen vil også være avslått, men blir aktivert igjen når det blir et positivt tall i tot.pris
document.getElementById('submit').disabled = true;
document.getElementById('nei').onchange = disablefield;
document.getElementById('sas_bonus').onchange = disablefield;
document.getElementById('cc_bonus').onchange = disablefield;
document.getElementById('kundenummer').disabled = true;
}

function disablefield()
{
  //Dersom nei er valgt, vil kundenr-feltet være avslått. dersom det er fylt inn noe i feltet tidligere, vil dette forsvinne.
  if ( document.getElementById('nei').checked == true ){
    document.getElementById('kundenummer').value = '';
    document.getElementById('kundenummer').disabled = true}

  else {
    //dersom sas eller cc velges, vil kundenr-feltet slås på
    {document.getElementById('kundenummer').disabled = false;}
  }
}

var theForm = document.forms["reiseform"];



function getAntallVoksnePris()
{
  //setter verdiene for hvert valg i en matrise
  var antall_voksne_pris= new Array();
  antall_voksne_pris["0"]=0;
  antall_voksne_pris["1"]=500;
  antall_voksne_pris["2"]=1000;
  antall_voksne_pris["3"]=1500;
  antall_voksne_pris["4"]=2000;
  antall_voksne_pris["5"]=2500;
  antall_voksne_pris["6"]=3000;

  var reiseAntallVoksnePris=0;
  //Får en ref til form id="reiseform"
  var theForm = document.forms["reiseform"];
  //Får en ref til select id="antall_voksne"
  var selectedAntallVoksne = theForm.elements["antall_voksne"].value;

  //setter reiseAntallVoksnePris lik verdien kunden valgte
  //eks: antall_voksne_pris["4".value] blir 2000
  reiseAntallVoksnePris = antall_voksne_pris[selectedAntallVoksne];

  //returnerer til reiseAntallVoksnePris
  return reiseAntallVoksnePris;
}

function getAntallBarnPris()
{
  var antall_barn_pris= new Array();
  antall_barn_pris["0"]=0;
  antall_barn_pris["1"]=250;
  antall_barn_pris["2"]=500;
  antall_barn_pris["3"]=750;
  antall_barn_pris["4"]=1000;
  antall_barn_pris["5"]=1250;
  antall_barn_pris["6"]=1500;

  var reiseAntallBarnPris=0;
  var theForm = document.forms["reiseform"];
  var selectedAntallBarn = theForm.elements["antall_barn"].value;

  reiseAntallBarnPris = antall_barn_pris[selectedAntallBarn];

  return reiseAntallBarnPris;
}

function getAntallStudentPris()
{
  var antall_student_pris= new Array();
  antall_student_pris["0"]=0;
  antall_student_pris["1"]=300;
  antall_student_pris["2"]=600;
  antall_student_pris["3"]=900;
  antall_student_pris["4"]=1200;
  antall_student_pris["5"]=1500;
  antall_student_pris["6"]=1800;

  var reiseAntallStudentPris=0;
  var theForm = document.forms["reiseform"];
  var selectedAntallStudent = theForm.elements["antall_student"].value;

  reiseAntallStudentPris = antall_student_pris[selectedAntallStudent];

  return reiseAntallStudentPris;
}

function getAntallHonnorPris()
{
  var antall_honnor_pris= new Array();
  antall_honnor_pris["0"]=0;
  antall_honnor_pris["1"]=200;
  antall_honnor_pris["2"]=400;
  antall_honnor_pris["3"]=600;
  antall_honnor_pris["4"]=800;
  antall_honnor_pris["5"]=1000;
  antall_honnor_pris["6"]=1200;

  var reiseAntallHonnorPris=0;
  var theForm = document.forms["reiseform"];
  var selectedAntallHonnor = theForm.elements["antall_honnor"].value;

  reiseAntallHonnorPris = antall_honnor_pris[selectedAntallHonnor];

  return reiseAntallHonnorPris;
}

function getTypeLugarPris()
{
  var type_lugar_pris= new Array();
  type_lugar_pris["Standard"]=1;
  type_lugar_pris["Luxury"]=1.2;
  type_lugar_pris["Superior"]=1.5;

  var reiseTypeLugarPris=0;
  var theForm = document.forms["reiseform"];
    var selectedTypelugar = theForm.elements["type_lugar"];

    reiseTypeLugarPris = type_lugar_pris[selectedTypelugar.value];

  return reiseTypeLugarPris;
}

// getBonusrabatten() finner ut hvor stor prosent av beløpet som skal betales
// Her må vi ta utgangspunkt i brukerens valg fra radio knappene

function getbonusrabatten()
{
    var bonusrabatt = new Array();
    bonusrabatt["Nei"]=1;
    bonusrabatt["SAS Bonus"]=0.8;
    bonusrabatt["Choice Club"]=0.8;

    var bonusrabatten=0;
    //Får en referanse til form id="reiseform"
    var theForm = document.forms["reiseform"];
    //Får en referanse til hva kunden har valgt under name=selectedBonus":
    var selectedBonus = theForm.elements["Bonus"];
    //Siden det er 3 radio knapper, så er selectedBonus.length = 3
    //Vi looper gjennom hver radio knapp
    for(var i = 0; i < selectedBonus.length; i++)
    {
        //hvis radio knappen er valgt
        if(selectedBonus[i].checked)
        {
            //setter bonusrabatten lik verdien av den valgte radio knappen
            //f.eks. hvis brukeren velger SAS Bonus, så settes verdien lik 0,8
            //Ved å bruke bonusrabatt sin array
            //får vi verdien til den valgte radio knappen
            bonusrabatten = bonusrabatt[selectedBonus[i].value];
            //Hvis vi får en match så blir det slutt på loopen
            break;
        }
    }
    //Vi returnerer bonusrabattenen
    return bonusrabatten;
}

function calculateTotal()
{
    //Her får vi totalprisen ved å hente funksjonene
    //Hver funksjon returnerer et tall
  //document.getElementById("antall_dager").value henter verdien fra den skjulte inputen i skjemaet

    var turpris = (getAntallVoksnePris() + getAntallBarnPris() + getAntallStudentPris() + getAntallHonnorPris())*getbonusrabatten()*getTypeLugarPris()*(document.getElementById("antall_dager").value);
    //viser resultatet
	$('#totalpris').val(turpris);

	//for å passe på at kunden faktisk velger et antall passasjerer, så slås submitknappen av hvis totalprisen blir mindre enn 1
	if (turpris < 1){
		document.getElementById('submit').disabled = true;}
	//så slås den på hvis den blir lik 1 eller høyere
	else
		{document.getElementById('submit').disabled = false;}
}
