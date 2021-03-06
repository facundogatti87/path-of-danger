player = {
  // Defino la clase inicial por default
  name: "",
  class: "Berserker",
  life: 100,
  strenght: 8,
  defense: 4,
};  

firstName = ["Frederic", "Willie", "Kirnon", "Salvatore", "Caesar", "Desmond", "Lucius", "Ragnar", "Ash", "Duradel", "Treznor", "Titus", "Duke", "Patrick", "Max", "Franz", "Chandler", "Finch", "Theodor", "Vossler", "Seymour", "Adam", "Ulrik", "Alder", "Camus", "Quint", "Klark", "Ethel", "Zeke", "Dexter", "Lucifer", "Charles", "Icas", "Camus", "Viktor", "Hades", "Leviathan", "Ross", "Bane", "Kaiser", "Vance", "Romulus"]
lastName = ["Crowhunter", "Skullgrip", "Frostcut", "Iceslayer", "Bladefeather", "Whisperfist", "Mildtree", "Fallenhand", "Thunderblood", "Threehunter", "Deepwoods", "Skysprinter", "Roughstone", "Titansurge", "Thunderwinds", "Softrunner", "Stonebeard", "Ravenbreath", "Hellrider", "Dawnbinder", "Wisemark", "Swiftshaper", "Eaglestride", "Grayspire", "Spiritdream", "Crowthorne", "Whisperward", "Masterkeeper", "Thunderstream", "Brightshout", "Snakerunner", "Frostspark", "Starmore", "Deathshaper", "Titancloud", "Snakedust", "Hillblade"]

function randomNameGenerator() {

  player.name = firstName[Math.floor(Math.random() * firstName.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)];
  document.getElementById("pjName").value = player.name;
  
}

//----------------------------------------------------------------------------------------

function display() {

  var e = document.getElementById("dropDownId");
  var index = e.selectedIndex;

  if (index == 0) {
    document.getElementById("Berserker").style.display = 'block'
    document.getElementById("Templario").style.display = 'none'
    document.getElementById("Hechicero").style.display = 'none'
    document.getElementById("Campesino").style.display = 'none'
    document.getElementById("jugar_img_berserker").style.display = 'block'
    document.getElementById("jugar_img_templario").style.display = 'none'
    document.getElementById("jugar_img_hechicero").style.display = 'none'
    document.getElementById("jugar_img_campesino").style.display = 'none'

    player.class = "Berserker";
    player.life = 100;
    player.strenght = 8;
    player.defense = 4;

  }

  else if (index == 1) {
    document.getElementById("Berserker").style.display = 'none'
    document.getElementById("Templario").style.display = 'block'
    document.getElementById("Hechicero").style.display = 'none'
    document.getElementById("Campesino").style.display = 'none'
    document.getElementById("jugar_img_berserker").style.display = 'none'
    document.getElementById("jugar_img_templario").style.display = 'block'
    document.getElementById("jugar_img_hechicero").style.display = 'none'
    document.getElementById("jugar_img_campesino").style.display = 'none'

    player.class = "Templario";
    player.life = 120;
    player.strenght = 5;
    player.defense = 5;

  }

  else if (index == 2) {
    document.getElementById("Berserker").style.display = 'none'
    document.getElementById("Templario").style.display = 'none'
    document.getElementById("Hechicero").style.display = 'block'
    document.getElementById("Campesino").style.display = 'none'
    document.getElementById("jugar_img_berserker").style.display = 'none'
    document.getElementById("jugar_img_templario").style.display = 'none'
    document.getElementById("jugar_img_hechicero").style.display = 'block'
    document.getElementById("jugar_img_campesino").style.display = 'none'

    player.class = "Hechicero";
    player.life = 70;
    player.strenght = 12;
    player.defense = 3;

  }

  else if (index == 3) {
    document.getElementById("Berserker").style.display = 'none'
    document.getElementById("Templario").style.display = 'none'
    document.getElementById("Hechicero").style.display = 'none'
    document.getElementById("Campesino").style.display = 'block'
    document.getElementById("jugar_img_berserker").style.display = 'none'
    document.getElementById("jugar_img_templario").style.display = 'none'
    document.getElementById("jugar_img_hechicero").style.display = 'none'
    document.getElementById("jugar_img_campesino").style.display = 'block'

    player.class = "Campesino";
    player.life = 35;
    player.strenght = 2;
    player.defense = 1;

  }
}

//----------------------------------------------------------------------------------------

function pjForm() {
  var pjName = document.getElementById("pjName").value;
  var pjError_message = document.getElementById("pjError_message");

  pjError_message.style.padding = "5px";

  var text;

  if (pjName.length <= 2 || pjName.length >= 26) {
    text = "Tu heroe no puede llamarse asi";
    pjError_message.innerHTML = text;
    return false;
  } else {

    document.getElementById("btnComenzarAventura").style.display = 'block'
    document.getElementById("btnCrearHeroe").style.display = 'none'
    document.getElementById("descripcionHeroe").style.display = 'none'
    document.getElementById("pjError_message").style.display = 'none'
    document.getElementById("Berserker").style.display = 'none'
    document.getElementById("Templario").style.display = 'none'
    document.getElementById("Hechicero").style.display = 'none'
    document.getElementById("Campesino").style.display = 'none'
    document.getElementById("inicioDeJuego").style.display = 'block'

    player.name = pjName;

    localStorage.setItem("HeroName", player.name);
    localStorage.setItem("HeroClass", player.class);
    localStorage.setItem("HeroLife", player.life);
    localStorage.setItem("HeroStrenght", player.strenght);
    localStorage.setItem("HeroDefense", player.defense);

  }
  return false;
}