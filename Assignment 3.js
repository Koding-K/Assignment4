const list = [{name:"City Name",Average:"Above Average",distance_from_last: "Distance From Last"}];
list.push ({name:"Toliara", Average:"-", distance_from_last: 0});
list.push ({name:"Fianarantsoa", Average: "-", distance_from_last: 500});
list.push ({name:"Antanarivo", Average:"-", distance_from_last: 206.15});
list.push ({name:"Mahajanga ", Average:"-", distance_from_last: 412.31});
list.push ({name:"Antsiranara", Average:"-", distance_from_last: 424.26});
const out = document.getElementById("output");

let total = 0;
for (var i = 0; i < list.length; i++){
  if (typeof list[i].distance_from_last == "number") {
    total = total + list[i].distance_from_last;
  }
}
let averageDistance = total/list.length
const table = document.getElementById("route_table");


for (var i = 0; i < list.length; i++) {
  const row = document.createElement("tr");
  const nameData = document.createElement("td");
  const averageData = document.createElement ("td");
  const distanceData = document.createElement("td");
  const name = document.createTextNode(list[i].name);
  let average = document.createTextNode(list[i].Average);
  let distance = document.createTextNode(list[i].distance_from_last);

  if (list[i].distance_from_last > averageDistance)
  {
    const websiteText = document.createTextNode("Wikipage");
    const href = "https://en.wikipedia.org/wiki/"+list[i].name;
    const website = document.createElement("a");
    website.setAttribute ("style", "color: blue");
    website.setAttribute ("href", href)
    website.appendChild(websiteText);
    
    averageData.appendChild(website);
  }
  
  nameData.appendChild(name);
  distanceData.appendChild(distance);
  averageData.appendChild(average);
  row.appendChild(nameData);
  row.appendChild(distanceData);
  row.appendChild(averageData);
  table.appendChild(row);
};
