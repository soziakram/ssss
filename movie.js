const actorarray = [
  { name: "emily", age: 1983 },
  { name: "bernard", age: 1987 },
  { name: "andrew", age: 1980 },
];
actorarray.forEach((element, i) => {
  const section = document.querySelector(".section");
  console.log(main);

  const card = document.createElement("div");
  card.classList = "card";

  const moviecard = `
<img src=""> <div class="info"> <h3> ${actorarray[i].name}</h3>
<span>${actorarray[i].age}</span> </div>`;
  card.innerHTML += moviecard;
  section.appendChild(card);
});
