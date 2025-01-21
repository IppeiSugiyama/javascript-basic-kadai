//btn要素を定数に代入
const btnChenge = document.getElementById('btn');

// text要素を定数に代入
const textChenge = document.getElementById('text');

// btn要素がクリックされたときにイベントを実行
btnChenge.addEventListener('click',() => {
  textChenge.textContent = 'ボタンをクリックしました';
});
