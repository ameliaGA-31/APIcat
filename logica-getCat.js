const url_limit=20;
const urlSearch = `https://api.thecatapi.com/v1/images/search?limit=${url_limit}&page=10&order=Desc`;
window.onload= getCat(urlSearch);
function getCat(url){
	fetch(url)
    .then(response => response.json())
    .then(data => {
    	console.log("dataR",data);
    	getMuchosGato(data);

            
	}) 
	.catch(error => console.log('error:*', error));
} 

    
	function getMuchosGato(objGatos){
		let elemento=document.getElementById("elemen")
		let url_img= objGatos['url'];

		let cadaImgNodo='';
		objGatos.forEach(gato =>{
		
       		cadaImgNodo+=

    	 ` 

		
        <div class="contCat">
            <img  class="getCat" src="${gato.url}"/>
            <div class="card-image">
            </div>
            
        </div>

    	  `;

    	})
    	elemento.innerHTML =cadaImgNodo;
	}

/*function drawPokemon(pokemon) {
    const container = document.getElementById('containerPokemon');
    let namePokeNode = document.createElement("div");
    let url_img = pokemon['sprites']['front_default'];
    namePokeNode.innerHTML =`
    <div id="${pokemon.name}" class="poke-container" onclick="selectedPoke('${pokemon.name}', this)">
        <img src="${url_img}" alt="img-${pokemon.name}"/>
        <p>${pokemon.name}</p>
    </div>`;
    container.appendChild(namePokeNode);
    return*/
/*function pintarPokemon(pokemons){
    const contenedor=document.getElementById('contenedorNombres')
    let namePokeNode='';
    pokemons.forEach(poke =>{
    	let url_img=poke['sprites']['front_default']
        namePokeNode += 

        `<div class="row">
        <div class="col s6">
        <div data-id="${poke.id}" class="poke-container" onclick="selectedPoke('${poke.name}', this)">
            <div class="card horizontal">
                <div class="card-image">
                    <img class="img" src="${url_img}" alt="img-${poke.name}"/>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>${poke.name}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        `;
    });
    contenedor.innerHTML =namePokeNode;
    return namePokeNode
}*/