var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];

  var myTeam = [
    {
    name: "María",
    availability: new Array(8).fill(true)
    },
    {
    name: "Pedro",
    availability: new Array(8).fill(true)
    },
    {
    name: "Esther",
    availability: new Array(8).fill(true)
    },
    {
    name: "Marcos",
    availability: new Array(8).fill(true)
    },
    ];


    function available(){
        for (let index = 0; index < myTeam.length; index++) {
         
       for (let y = 0; y < myTeam[index].availability.length; y++) {
      
       var getRandom = () => Math.random() < 0.5 ? true : false;
       myTeam[index].availability[y] = getRandom();
        }
      
    }};
available();

function getAvailability(){
    
    for (let index = 0; index < myTeam.length; index++) {
        console.log(myTeam[index].name );// imprimo los nombres

    for (let i = 0; i < WORK_HOURS.length; i++) {
        console.log(WORK_HOURS[i] + " " + myTeam[index].availability[i] )    //imprimo las horas
 } }};

getAvailability();
    
        
           var indexTrue = new Array();

        function onlyTrues() { 
            for (let index = 0; index < myTeam.length; index++) {
         for (let y = 0; y < myTeam[index].availability.length; y++){ 
         if (myTeam[index].availability[y] === true){
             indexTrue.push(y);
              } 
            }
        }
        };
        onlyTrues();
       
           
             
            console.log(indexTrue);


       
                
          

        
        
function arrFilter(){ 
    var arrayFinal = new Array();
    var sortedArray = indexTrue.sort();
    console.log(sortedArray);
    for (let k = 0; k <= 8; k++) {
    
arrayFinal = indexTrue.filter((element) => element === sortedArray[k]);
  
    if (arrayFinal.length == 4) {
        return "Horario libre encontrado " + WORK_HOURS[k];
    }}
       return "No hay hueco libre";
};




console.log(arrFilter());