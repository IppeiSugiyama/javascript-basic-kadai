const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 配列の要素を先頭から順番に全て取り出して、コンソールに出力してください。
// for文を利用した場合と、while文を利用した場合の2つの繰り返し処理を両方記述してください。

// for
for (let i = 0; i <=(holidays.length) -1 ; i++) {
  console.log(holidays[i]);
}

// while
let i = 0;
while (i < holidays.length) {
  console.log(holidays[i]);
  i++
}