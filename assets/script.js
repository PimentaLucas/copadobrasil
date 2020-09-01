var celulaSorteioAtual = 0;
var arrayTimesEsq = ['./assets/img/amemg_esq-8.png', './assets/img/atlgo_esq-8.png', './assets/img/bot_esq-8.png', './assets/img/bru_esq-8.png',
  './assets/img/cea_esq-8.png', './assets/img/crb_esq-8.png', './assets/img/flu_esq-8.png', './assets/img/juv_esq-8.png', './assets/img/pon_esq-8.png', './assets/img/vas_esq-8.png'];
  var arrayTimesDir = ['./assets/img/amemg_dir-8.png', './assets/img/atlgo_dir-8.png', './assets/img/bot_dir-8.png', './assets/img/bru_dir-8.png',
  './assets/img/cea_dir-8.png', './assets/img/crb_dir-8.png', './assets/img/flu_dir-8.png', './assets/img/juv_dir-8.png', './assets/img/pon_dir-8.png', './assets/img/vas_dir-8.png'];
document.body.onkeydown = function (e) {
  console.log(e.keyCode);

  if (e.keyCode == 40) {
    celulaSorteioAtual++;
    removerBackground();
    $(".background-celula-" + celulaSorteioAtual).fadeIn(800)
  }

  if (e.keyCode == 38) {
    celulaSorteioAtual--;
    removerBackground();
    $(".background-celula-" + celulaSorteioAtual).fadeIn(800);
  }

  if (e.keyCode == 49 || e.keyCode == 97) {
    sortearTime($(".time-1"), 1);
  }

  if (e.keyCode == 50 || e.keyCode == 98) {
    sortearTime($(".time-2"), 2);
  }

  if (e.keyCode == 51 || e.keyCode == 99) {
    sortearTime($(".time-3"), 3);
  }

  if (e.keyCode == 52 || e.keyCode == 100) {
    sortearTime($(".time-4"), 4);
  }

  if (e.keyCode == 53 || e.keyCode == 101) {
    sortearTime($(".time-5"), 5);
  }

  if (e.keyCode == 54 || e.keyCode == 102) {
    sortearTime($(".time-6"), 6);
  }

  if (e.keyCode == 55 || e.keyCode == 103) {
    sortearTime($(".time-7"), 7);
  }

  if (e.keyCode == 56 || e.keyCode == 104) {
    sortearTime($(".time-8"), 8);
  }

  if (e.keyCode == 57 || e.keyCode == 105) {
    sortearTime($(".time-9"), 9);
  }

  if (e.keyCode == 48 || e.keyCode == 96) {
    sortearTime($(".time-10"), 10);
  }

  if (e.keyCode == 8) {
    removerTimeSorteado();
  }
};

function removerBackground() {
  $(".background-celula").fadeOut(1000);
}

function sortearTime(time, id) {
  var cont = 0;
  while (cont !== id) {
    console.log('eba')
    cont++
  }
  $(".celula-confronto-" + celulaSorteioAtual).attr('id', 'time-' + id);
  if (celulaSorteioAtual == 1|| celulaSorteioAtual == 3||celulaSorteioAtual == 5||celulaSorteioAtual == 7||celulaSorteioAtual == 9) {
    time.fadeOut(1000, function () {
      $(".celula-confronto-" + celulaSorteioAtual).attr('src', arrayTimesEsq[cont - 1]);
      $(".celula-confronto-" + celulaSorteioAtual).fadeIn(1000);
    });
  }else{
    time.fadeOut(1000, function () {
      $(".celula-confronto-" + celulaSorteioAtual).attr('src', arrayTimesDir[cont - 1]);
      $(".celula-confronto-" + celulaSorteioAtual).fadeIn(1000);
    });
  }

}

function removerTimeSorteado() {
  var time = $(".celula-confronto-" + celulaSorteioAtual).attr('id');

  if (time) {
    $(".celula-confronto-" + celulaSorteioAtual).fadeOut(1000, function () {
      $(".celula-confronto-" + celulaSorteioAtual).attr('src', '');
      $("." + time).fadeIn();
    });
  }
}
