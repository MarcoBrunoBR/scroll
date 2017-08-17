(() => {
  const $primeiro = document.querySelector('#primeiro')
  const $menuPrimeiro = document.querySelector('.menu-item_primeiro')
  const $posPrimeiro = $primeiro.getBoundingClientRect()

  const $segundo = document.querySelector('#segundo')
  const $menuSegundo = document.querySelector('.menu-item_segundo')
  const $posSegundo = $segundo.getBoundingClientRect()

  const $terceiro = document.querySelector('#terceiro')
  const $menuTerceiro = document.querySelector('.menu-item_terceiro')
  const $posTerceiro = $terceiro.getBoundingClientRect()

  let $elementIsActive = document.querySelector('.menu-item_isActive')

  window.addEventListener('scroll', (event) => {
    if(event.pageY > $posPrimeiro.y && event.pageY < $posPrimeiro.bottom) {
      $elementIsActive.classList.remove('menu-item_isActive')
      $menuPrimeiro.classList.add('menu-item_isActive')
      $elementIsActive = $menuPrimeiro
    }

    if(event.pageY > $posSegundo.y && event.pageY < $posSegundo.bottom) {
      $elementIsActive.classList.remove('menu-item_isActive')
      $menuSegundo.classList.add('menu-item_isActive')
      $elementIsActive = $menuSegundo
    }

    if(event.pageY > $posTerceiro.y && event.pageY < $posTerceiro.bottom) {
      $elementIsActive.classList.remove('menu-item_isActive')
      $menuTerceiro.classList.add('menu-item_isActive')
      $elementIsActive = $menuTerceiro
    }
  })
})()
