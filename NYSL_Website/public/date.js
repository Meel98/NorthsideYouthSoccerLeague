// <------JSON  DATE------->
var meses = [
    {
        "september": [
            {   "id":"01",
                "month_name": "SEPTEMBER",
                "teams": "U1 and U4",
                "location": "AJ Katzenmaier",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11799.12427936522!2d-87.8628015!3d42.3258681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf2bbe275c6da815!2sAJ%20Katzenmaier%20Academy!5e0!3m2!1ses-419!2sar!4v1645735696193!5m2!1ses-419!2sar",
                "times": "9:30a.m.",
                "day": "09/01"
            },
            {   "id":"02",
                "month_name": "SEPTEMBER",
                "teams": "U3 and U2",
                "location": "Greenbay",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22766.154292832573!2d-88.055104!3d44.499394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802fa546caa53a7%3A0x8e2b8e336a5f95f8!2s820%20Armed%20Forces%20Dr%2C%20Green%20Bay%2C%20WI%2054304%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645735833542!5m2!1ses!2sar",
                "times": "1:00 p.m.",
                "day": "09/01"
            },
            {   "id":"03",
                "month_name": "SEPTEMBER",
                "teams": "U5 and U6",
                "location": "Howard A Yeager",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23602.20560994482!2d-87.853824!3d42.315318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccaa32b2b93%3A0xc2120a8237aaa4e4!2s1811%20Morrow%20Ave%2C%20North%20Chicago%2C%20IL%2060064%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1645736042693!5m2!1ses-419!2sar",
                "times": "9:30a.m.",
                "day": "09/08"
            },
            {   "id":"04",
                "month_name": "SEPTEMBER",
                "teams": "U6 and U1",
                "location": "Marjorie P Hart",
                "maps":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23748.589278423817!2d-87.646262!3d41.923523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3102866e98b%3A0x6f95a4b19f6f6a1!2sN%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645751523007!5m2!1ses!2sar",     
                "times": "1:00 p.m.",
                "day": "09/08"
            },
            {   "id":"19",
                "month_name": "SEPTEMBER",
                "teams": "U2 and U4",
                "location": "North",
                "maps":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26738.56398566679!2d-96.81986!3d33.100657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c96acb30463%3A0x8b43bf85a687e29e!2s2601%20Avenue%20of%20the%20Stars%2C%20Frisco%2C%20TX%2075034%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645751742069!5m2!1ses!2sar",
                "times": "9:30a.m.",
                "day": "09/15"
            },
            {   "id":"05",
                "month_name": "SEPTEMBER",
                "teams": "U3 and U5",
                "location": "AJ Katzenmaier",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11799.12427936522!2d-87.8628015!3d42.3258681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf2bbe275c6da815!2sAJ%20Katzenmaier%20Academy!5e0!3m2!1ses-419!2sar!4v1645735696193!5m2!1ses-419!2sar",
                "times": "1:00 p.m.",
                "day": "09/15"
            },
            {   "id":"06",
                "month_name": "SEPTEMBER",
                "teams": "U1 and U3",
                "location": "South",
                "maps":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24825.8636957079!2d-119.974754!3d38.941506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80998ffd5d34711f%3A0x3a6a3f32cc55ed15!2s1176%20Rufus%20Allen%20Blvd%2C%20South%20Lake%20Tahoe%2C%20CA%2096150%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645751883046!5m2!1ses!2sar",
                "times": "9:30a.m.",
                "day": "09/22"
            },
            {   "id":"07",
                "month_name": "SEPTEMBER",
                "teams": "U2 and U6",
                "location": "Howard A Yeager",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23602.20560994482!2d-87.853824!3d42.315318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccaa32b2b93%3A0xc2120a8237aaa4e4!2s1811%20Morrow%20Ave%2C%20North%20Chicago%2C%20IL%2060064%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1645736042693!5m2!1ses-419!2sar",
                "times": "1:00 p.m.",
                "day": "09/22"
            },
            {   "id":"08",
                "month_name": "SEPTEMBER",
                "teams": "U4 and U5",
                "location": "Greenbay",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22766.154292832573!2d-88.055104!3d44.499394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802fa546caa53a7%3A0x8e2b8e336a5f95f8!2s820%20Armed%20Forces%20Dr%2C%20Green%20Bay%2C%20WI%2054304%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645735833542!5m2!1ses!2sar",
                "times": "9:30a.m.",
                "day": "09/29"
            }],
            "october" :[
            {   "id":"09",
                "month_name": "OCTOBER",
                "teams": "U2 and U5",
                "location": "Marjorie P Hart",
               "maps":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23748.589278423817!2d-87.646262!3d41.923523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3102866e98b%3A0x6f95a4b19f6f6a1!2sN%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645751523007!5m2!1ses!2sar", 
                "times": "9:30a.m.",
                "day": "10/06"
            },
            {   "id":"10",
                "month_name": "OCTOBER",
                "teams": "U1 and U6",
                "location": "South",
                "maps":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24825.8636957079!2d-119.974754!3d38.941506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80998ffd5d34711f%3A0x3a6a3f32cc55ed15!2s1176%20Rufus%20Allen%20Blvd%2C%20South%20Lake%20Tahoe%2C%20CA%2096150%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645751883046!5m2!1ses!2sar",
                "times": "1:00 p.m.",
                "day": "10/06"
            },
            {   "id":"11",
                "month_name": "OCTOBER",
                "teams": "U3 and U4",
                "location": "Howard A Yeager",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23602.20560994482!2d-87.853824!3d42.315318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccaa32b2b93%3A0xc2120a8237aaa4e4!2s1811%20Morrow%20Ave%2C%20North%20Chicago%2C%20IL%2060064%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1645736042693!5m2!1ses-419!2sar",
                "times": "9:30a.m.",
                "day": "10/08"
            },
            {   "id":"12",
                "month_name": "OCTOBER",
                "teams": "U5 and U1",
                "location": "Greenbay",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22766.154292832573!2d-88.055104!3d44.499394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802fa546caa53a7%3A0x8e2b8e336a5f95f8!2s820%20Armed%20Forces%20Dr%2C%20Green%20Bay%2C%20WI%2054304%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645735833542!5m2!1ses!2sar",
                "times": "1:00 p.m.",
                "day": "10/08"
            },
            {   "id":"13",
                "month_name": "OCTOBER",
                "teams": "U6 and U3",
                "location": "North",
                "maps":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26738.56398566679!2d-96.81986!3d33.100657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c96acb30463%3A0x8b43bf85a687e29e!2s2601%20Avenue%20of%20the%20Stars%2C%20Frisco%2C%20TX%2075034%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645751742069!5m2!1ses!2sar",
                "times": "9:30a.m.",
                "day": "10/20"
            },
            {   "id":"14",
                "month_name": "OCTOBER",
                "teams": "U2 and U4",
                "location": "Marjorie P Hart",
                "maps":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23748.589278423817!2d-87.646262!3d41.923523!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3102866e98b%3A0x6f95a4b19f6f6a1!2sN%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1645751523007!5m2!1ses!2sar",
                "times": "1:00 p.m.",
                "day": "10/20"
            },
            {   "id":"15",
                "month_name": "OCTOBER",
                "teams": "U3 and U1",
                "location": "AJ Katzenmaier",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11799.12427936522!2d-87.8628015!3d42.3258681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf2bbe275c6da815!2sAJ%20Katzenmaier%20Academy!5e0!3m2!1ses-419!2sar!4v1645735696193!5m2!1ses-419!2sar",
                "times": "9:30a.m.",
                "day": "10/27"
            },
            {   "id":"16",
                "month_name": "OCTOBER",
                "teams": "U5 and U6",
                "location": "Howard A Yeager",
                "maps": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23602.20560994482!2d-87.853824!3d42.315318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccaa32b2b93%3A0xc2120a8237aaa4e4!2s1811%20Morrow%20Ave%2C%20North%20Chicago%2C%20IL%2060064%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1645736042693!5m2!1ses-419!2sar",
                "times": "1:00 p.m.",
                "day": "10/27"
            }
        ]
    }
]


//<------- VUE DATE ------->

var teams_name = []
var equipoS = meses[0].september
var equipoO = meses[0].october
var equipo = meses[0]


function maps(table){
    document.getElementById("resultTableS").innerHTML= ``;
table.forEach(element=> {
    var tableData = document.createElement("tr");
    tableData.innerHTML =  `
    <td> ${element.day}</td>
    <td>
      <p> ${element.teams}</p>
      <p>${element.times} </p>
    </td>
    <td><p><a :href="element.maps" target="blanck" class="a"> ${element.location}</a></p>
    <p> <iframe src="${element.maps}"></iframe> </p>

    </td>`
      document.getElementById("resultTableS").appendChild(tableData);
});
}
function mapO(table){
    document.getElementById("resultTable").innerHTML= ``;
table.forEach(element=> {
    var tableData = document.createElement("tr");
    tableData.innerHTML =  `
    <td> ${element.day}</td>
    <td>
      <p> ${element.teams}</p>
      <p>${element.times} </p>
    </td>
    <td><p><a :href="element.maps" target="blanck" class="a"> ${element.location}</a></p>
    <p> <iframe src="${element.maps}"></iframe> </p>

    </td>`
      document.getElementById("resultTable").appendChild(tableData);
});
}

var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

  function mapsla(table){
      document.getElementById("land").innerHTML= ``;
      table.forEach((element, index)=> {
      var tableData = document.createElement("p");
      tableData.innerHTML =  `
     <button class="btn btn-light" onclick="imprimirDatos(meses[0].september,${index})">${element.teams}</button>
      `  
        document.getElementById("land").appendChild(tableData);
  });}
  function mapsO(table){
    document.getElementById("landO").innerHTML= ``;
    table.forEach((element, index)=> {
    var tableData = document.createElement("p");
    tableData.innerHTML =  `
   <button class="btn btn-light" onclick="imprimirDatos(meses[0].october,${index})">${element.teams}</button>
    `  
      document.getElementById("land").appendChild(tableData);
});}
  
  function imprimirDatos(partidos,index){
    document.getElementById("der").innerHTML= ``;
    var tableData = document.createElement("tr");
    tableData.innerHTML =  `
      <td>   <p> Day: ${partidos[index].day}</p>
        <p>Time: ${partidos[index].times} </p>  </td>
        <td><p><a :href="partidos[index].maps" target="blanck" class="a">  Location: ${partidos[index].location}</a></p>
        <p> <iframe src="${partidos[index].maps}"></iframe> </p>  </td>`
        document.getElementById("der").appendChild(tableData);
    }

function filtros(){
var S = document.getElementById("filtSep").checked;
var O = document.getElementById("filtOct").checked;
var limpiar = []
         if (S == true) {
            mapO(equipoS)
            mapsla(equipoS)
         } else {
             mapO(limpiar)
             document.getElementById("land").innerHTML= ``;
             document.getElementById("der").innerHTML= ``;
         }
         if (O == true) {
            maps(equipoO)
            mapsO(equipoO)
         } else {
            maps(limpiar)
            document.getElementById("landO").innerHTML= ``;
            document.getElementById("der").innerHTML= ``;
        }
         
 }

 var welcome = document.getElementById("welcome");
 var index = document.getElementById("index");
 var about = document.getElementById("about");
 var info = document.getElementById("info");
 var rules = document.getElementById("rules");
 var registration = document.getElementById("registration");


 function mostrar(valor) {  
    welcome.style.display="none"
    index.style.display ="none";
    registration.style.display ="none";
    about.style.display = "none";
    info.style.display = "none";
    rules.style.display = "none";
    valor.style.display = "block"
  }



 
  

 
  






