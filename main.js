function createGame(time1, hour, time2) {
  return ` <li>
      <img src="./img/icon=${time1}.svg" alt="${time1}" />
      <strong>${hour}</strong>
      <img src="./img/icon=${time2}.svg" alt="${time2}" />
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return ` <div class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>
  <ul>
   ${games}
  </ul>
</div>`
}

document.querySelector('#card').innerHTML = `


${createCard('20/11', 'Domingo', createGame('qatar', '13:00', 'ecuador'))}
${createCard(
  '21/11',
  'Segunda',
  createGame('england', '10:00', 'iran') +
    createGame('senegal', '13:00', 'netherlands') +
    createGame('united states', '16:00', 'wales')
)}
${createCard('22/11', 'Terça', createGame('argentina', '07:00', 'saudi arabia')+
createGame('denmark', '10:00', 'tunisia')+
createGame('mexico', '13:00', 'poland')+
createGame('france', '16:00', 'australia'))}
`
