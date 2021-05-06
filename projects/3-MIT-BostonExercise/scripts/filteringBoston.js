/*
        para cada uno de los elementos de person convertir la posicion 11 en numero
        ordenar person tomando como referencia su posición 11
        sacar los primeros 5 elementos en un nuevo arreglo
        imprimir en html cada elemento del nuevo arreglo
        
        Pendiente:
        terminar el Readme
        verificar licencias
        
        */

function renderBoston(boston, container) {
  //General Variables
  const people = boston.data;
  let htmlTop5 = "";
  let htmlAvobe100k = "";
  let htmlAvobe200k = "";

  // Numbers with commas
  const formatNumbers = (n)=> n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Avobe 100k
  const avobe100k = people.filter((person) => person[11] > 100000);
  htmlAvobe100k = formatNumbers(avobe100k.length);

  // Top5
  const top5Values = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
  for (let i = 0; i < top5Values.length; i++) {
    // Names
    let personName = top5Values[i][8].split(",");
    personName = { firstname: personName[1], lastname: personName[0] };
    // End Names
    htmlTop5 +=
      '<tr class="person">' +
      '<th scope="row">' +
      (i + 1) +
      "</th>" +
      '<td class="firstname">' +
      personName.firstname +
      "</td>" +
      '<td class="lasttname">' +
      personName.lastname +
      "</td>" +
      '<td class="salary">' +
      "US$ " +
      formatNumbers(top5Values[i][11]) +
      "</td>" +
      "</tr>";
  }

  // Avobe 200k
  const avobe200k = top5Values.filter((person) => person[11] > 200000);
  for (let i = 0; i < avobe200k.length; i++) {
    // Names
    let personName = avobe200k[i][8].split(",");
    personName = { firstname: personName[1], lastname: personName[0] };
    // End Names
    htmlAvobe200k +=
      '<tr class="person">' +
      '<th scope="row">' +
      (i + 1) +
      "</th>" +
      '<td class="firstname">' +
      personName.firstname +
      "</td>" +
      '<td class="lasttname">' +
      personName.lastname +
      "</td>" +
      '<td class="salary">' +
      "US$ " +
      formatNumbers(avobe200k[i][11]) +
      "</td>" +
      "</tr>";
  }

  // poppulating HTML
  container.innerHTML = `
  <div id="totals" class="container pt-3">
    <h2 class="section-title py-3">Salaries in Boston City</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Employees</th>
          <th scope="col" class="numbers">People</th>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr>
          <td scope="col">Total Employees with a registered salary</td>
          <td scope="col" class="numbers">${formatNumbers(boston.data.length)}</td>
        </tr>
        <tr>
          <td scope="col">Salaries avobe $100k</td>
          <td scope="col" class="numbers">${htmlAvobe100k}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="avobe200k" class="container pt-3">
    <h2 class="section-title py-3">Salaries Avobe 200k</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col" class="numbers">Salary</th>
        </tr>
      </thead>
      <tbody id="table-body">
      ${htmlAvobe200k}
      </tbody>
    </table>
  </div>

  <div id="top5" class="container pt-3">
    <h2 class="section-title py-3">Top 5 Salaries in Boston</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col" class="numbers">Salary</th>
        </tr>
      </thead>
      <tbody id="table-body">
        ${htmlTop5}
      </tbody>
    </table>
  </div>
    `;
}

renderBoston(boston, document.getElementById("container"));

/* jrwtango@gmail.com 
        
          Cómo saber si mi empresa está lista para crecer
        
        */
