const menu = {
    "Predjela": [
      { naziv: "Juha od rajčice", cijena: "3.50€" },
      { naziv: "Bruskete", cijena: "4.00€" }
    ],
    "Glavna jela": [
      { naziv: "Pizza Margherita", cijena: "7.00€" },
      { naziv: "Ćevapi s prilogom", cijena: "8.50€" }
    ],
    "Deserti": [
      { naziv: "Tiramisu", cijena: "4.50€" },
      { naziv: "Palačinke s čokoladom", cijena: "4.00€" }
    ]
  };
  
  const menuDiv = document.getElementById('menu');
  
  for (const [kategorija, jela] of Object.entries(menu)) {
    const section = document.createElement('div');
    section.className = 'menu-section';
  
    const title = document.createElement('h2');
    title.textContent = kategorija;
    section.appendChild(title);
  
    const list = document.createElement('ul');
    jela.forEach(jelo => {
      const item = document.createElement('li');
      item.textContent = `${jelo.naziv} - ${jelo.cijena}`;
      list.appendChild(item);
    });
  
    section.appendChild(list);
    menuDiv.appendChild(section);
  }
  