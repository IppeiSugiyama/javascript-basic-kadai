// 変数の初期化// -----------------------------------------------------

// （画面に表示される文字）
let untyped = '';
// 入力されたキー
let typed = '';
// 正タイプで入力した回数
let score = 0;
// 正タイプで入力した文字列数
let stringCount = 0;
// -----------------------------------------------------



// 必要なHTML要素の習得// -----------------------------------------------------

// 画面表示に必要
const untypedfield = document.getElementById('untyped');
// キー入力済み文字列を習得するために必要
const typedfield = document.getElementById('typed');
// 誤タイプの場合表示を変更するために必要
const wrap = document.getElementById('wrap');
// スタートボタンイベント処理に必要
const start = document.getElementById('start');
// タイマー表示に必要
const count = document.getElementById('count');
// 正タイプで入力している文字列数を表示する処理に必要
const inputString = document.getElementById('stringcount');
// -----------------------------------------------------


// 複数のテキストを格納する配列
const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];



// 配列内の要素をランダムに画面（HTML）に表示させる関数// -----------------------------------------------------
const createText = () => {

  // 正タイプした文字列をクリア（全て入力したら）
  typed = '';
  typedfield.textContent = typed;

  // 全て入力済みの為入力完了文字列数をリセットして表示
  stringCount = 0;
  inputString.textContent = stringCount;

  // 配列のインデックス数からランダムな数値を生成する
  // ★floorで切り捨てされるから最大数は無視され　　ceilで切り上げ
  let random = Math.floor(Math.random() * textLists.length);
  
  // 配列からランダムにテキストを習得し画面に表示する
  untyped = textLists[random];
  untypedfield.textContent = untyped;
};
// -----------------------------------------------------



// キー入力の判定// -----------------------------------------------------
const keyPress = e => {
  
  // 誤タイプの場合
  if(e.key !== untyped.substring(0,1)) {
    wrap.classList.add('mistyped');
    // 100ms後に背景色を元に戻す
    setTimeout(() => {
      wrap.classList.remove('mistyped');
    }, 100);
    return;
  }

  // 正タイプの場合
  // スコアをプラスしていく　★スコアのインクリメント
  score++;
  wrap.classList.remove('mistyped');
  // 入力済み文字列を代入
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  // 入力済み文字列を表示する為のHTML要素を変更
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;

  // 入力済み文字列をプラスしていく
  stringCount++;
  inputString.textContent = stringCount;
  // テキストがなくなったら（入力済み）新しいテキストを表示
  if(untyped === '') {
    createText();
  }
};
// -----------------------------------------------------


// タイピングスキルのランクを判定-----------------------------------------------------
const rankCheck = score => {

  // テキストを格納する変数を作る
  let text = '';

  // スコアに応じて異なるメッセージを変数textに格納する
  if(score < 100) {
    text = `あなたのランクはCです。\nBランクまではあと${100 - score}文字です。`;
  } else if(score < 200) {
    text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
  } else if(score < 300) {
    text = `あなたのランクはBです。\nSランクまであと${300 - score}文字です。`;
  } else if(score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます！`;
  }

  // 生成したメッセージと一緒に文字列を帰る
  return `${score}文字打てました！\n${text}\n【OK】リトライ  / 【キャンセル】終了`;
};

// ゲームを終了
const gameOver = id => {
  clearInterval(id);

  const result = confirm(rankCheck(score));
  
  // OKボタンをクリックされたらリロードする
  if(result == true) {
    window.location.reload();
  }
};

// カウントダウンタイマー
const timer = () => {

  // タイマー部分のHTML要素（p要素）を習得する
  let time = count.textContent;

  const id = setInterval(() => {

    // カウントダウンする
    time--;
    count.textContent = time;

    // カウントが0になったらタイマーを停止する
    if(time <= 0) {
      gameOver(id);
    }
  }, 1000);
};

// ゲームスタート時の処理-----------------------------------------------------
start.addEventListener('click', () => {

  // カウントダウンタイマーを開始する ★ここでtimerの関数が動く
  timer();

  // ランダムなテキストを表示する
  createText();

  // スタートボタンを非表示にする
  start.style.display = 'none';

  // キーボードのイベント処理
  document.addEventListener('keypress',keyPress);
});
// -----------------------------------------------------

untypedfield.textContent = 'スタートボタンで開始'