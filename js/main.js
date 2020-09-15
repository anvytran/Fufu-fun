document.querySelector('#first').addEventListener('click', bell)
document.querySelector('#second').addEventListener('click', quest)
document.querySelector('#third').addEventListener('click', kart)
document.querySelector('#fourth').addEventListener('click', bunny)

function bell (){

document.querySelector('#kettle').classList.toggle('hidden')

}

function quest(){

  document.querySelector('#dragon').classList.toggle('hidden')

}

function kart(){
  document.querySelector('#mario').classList.toggle('hidden')
}

function bunny() {
  document.querySelector('#fufi').classList.toggle('hidden')
}
