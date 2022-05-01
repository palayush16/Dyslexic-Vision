
var counter = 0;
var elem1 = document.getElementById("changeText1");
var elem2 = document.getElementById("changeText2");
var elem3 = document.getElementById("changeText3");
var elem4 = document.getElementById("changeText4");
var clicked = false;

  
var btn = document.getElementById("clickMe");
btn.textContent = 'Experience Dyslexia';

btn.addEventListener("click", alertMe);
var light;
function alertMe(){
    if (!light) {
        light = window.setInterval(change,400);
        
        btn.style.backgroundColor = 'black';
    } else {
        window.clearInterval(light);
        light = null;
        btn.textContent = 'Experience Dyslexia';
        btn.style.backgroundColor = 'rgb(148, 31, 31)';
        elem1.innerHTML="DYSLEXIA";
        elem2.innerHTML="Dyslexia is characterized by difficulty in learning to read fluently and with inaccurate comprehension despite normal intelligence. Problems may include difficulties in spelling words, reading quickly, writing words, sounding out words in the head, pronouncing words when reading aloud and understanding what one reads.";
        elem3.innerHTML="Some see dyslexia as distinct from reading difficulties resulting from other causes, such as a non-neurological deficiency with vision or hearing, or from poor or inadequate reading instruction. There are three proposed cognitive subtypes of dyslexia, although individual cases of dyslexia are better explained by specific underlying neuropsychological deficits and co-occurring learning disabilities. Although it is considered to be a receptive language-based learning disability in the research literature, dyslexia also affects one's expressive language skills. Researchers at MIT found that people with dyslexia exhibited impaired voice-recognition abilities.";
        elem4.innerHTML="Check out code at"
    }
}

function change() {

  elem1.innerHTML = text1[counter];
  elem2.innerHTML = text2[counter];
  elem3.innerHTML = text3[counter];
  elem4.innerHTML = text5[counter];
  btn.textContent= text4[counter];
  counter++;
  if (counter >= text2.length) {
    counter = 0;
  }
}





















































































var text1 = ["DYIXESLA", "DYSELXAI", "DSYLXEIA"];
var text2 = [
  "Dyelixsa is ceahrtciearzd by dfifulticy wtih lnenarig to raed feulltny and with aaccture ceonesihpmorn ditpese nrmaol inielgltcnee. Porblmes may incldeu dffiiculteis in sllpeing words, reading qulcily, wriitng words, soundnig out wodrs in the haed, prnuocnoing words when readnig aluod and undresnatindg whta one raeds.",
  "Dyixesla is carcteirezhad by dtfufiicly wtih lnanierg to raed ftlenluy and with atcucrae cempoerohisnn ditepse naorml ingtieenlcle. Pborelms mya icnldue dfifictlueis ni spllenig wrdos, eraidng qciukyl, writign wrdos, sunoidng uot wrdos ni teh hdea, porcnounnig wdosr wnhe raendig auldo nad udenrtsadnnig wtha oen raeds.",
  "Dyselixa is czercriethaad by ditlifufcy with linernag to read fltunley and with aaucrtce ceoeshpmnoirn dipetse noraml inclietglene. Pbrolems mya incdlue diiffculties in sepillng words, raendig qiukcly, wiritng words, snondnig out words in teh hdea, poronnnicug wrdos wehn eraidng aluod and unnerstadnnig wtha oen reads."
  ];

  var text3=[
    "Some see dsxliyea as dictsnit form randeig dlcieiffuits rtsunleig from other cuases, such as a non-naorlgouciel dcinfieecy with vioisn or hrianeg, or poor or inadtqeuae rdienag icsrtitonun. There are terhe poposerd cntgiovie seytupbs of dylsiexa,  atohgulh idvniduial ceass of dilsyxea are bteter epexialnd by secfpiic undenyilrg nupolsrhcoiaoyegcl dctieifs and co-ocrcnuirg lnnaerig diibailsetis. Atgouhlh it is cieodensrd to be a rcieevtpe lgagnaue-based lrieanng dliibistay in the rraseceh lrtirutaee, dyexlisa aslo atfcfes one’s eivsrspxee langugae silkls. Rrharceeses at MIT found that ppolee with dyielxsa ebxihietd ipiermad vicoe-rcetigioonn aetibiils.",
    "Some see dsxyiela as dcintist form raindeg dlciitiuffes rentsliug form oehtr cesaus, such as a non-nuigelocroal dfeiccieny with visoin or harnieg, or poor or idqutnaeae ridnaeg itotinsrucn. There are three pporosed ciionvgte sbuetyps of dliexsya,  ahouglth ivniadduil cseas of dysixlea are betetr exelpanid by secfipic unniedrlyg nerlsogahocpcuyoil dfitiecs and co-ocrcnurig larnineg daiiibletsis. Aguhltoh it is csdneieord to be a reietcpve lgaangue-bsead lanrieng dlsbitaiiy in the rrecaseh luairettre, dsiylexa also acffets one’s ersespxive lgnugaae skllis. Reharesrces at MIT fuond taht ppleoe wtih dseylxia eiehxitbd iimepard vcoie-rotiicgenon abitileis.",
    "Smoe see diysexla as ditscnit from rdiaeng dlfetiuciifs rusentilg form ohetr cusaes, scuh as a non-noriaoculegl dcfcieieny with voisin or hnareig, or poor or iadqtenuae renaidg itscitnroun. Three are trhee peoosrpd cgitnovie stpybeus of dylesixa,  aglhtouh ivudniadil ceass of delsiyxa are bteetr ealpiexnd by spcfieic uyiednlnrg nsrhoyolpaoccgieul dtfeicis and co-oicrcunrg lianreng debtlaisiiis. Aoluthgh it is creiedonsd to be a retpevice lgaungae-besad lraneing dsiialbity in the rerscaeh lturaritee, dileyxsa also aectffs one’s eexrvsspie lgugaane sklils. Reacesrhres at MIT fonud taht plpoee with dieysxla eihbteixd iarmeipd vcioe-riocgeiotnn aiibietls."
  ]

  var text4=[
    "Click for Normal Text",
    "Cilkc for Nromla Tetx",
    "Clkic fro Nomral Ttxe"
  ]
  var text5=[
    "Chcek otu Coed at",
    "Cchek out Code ta",
    "Check otu Coed at"
  ]
