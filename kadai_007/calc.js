//課題007 

// 変数numが3の倍数の場合： “3の倍数です”
// 変数numが5の倍数の場合： “5の倍数です”
// 変数numが3と5の倍数の場合： “3と5の倍数です”
// それ以外の場合： 変数numの値を出力する
// 変数numに1以上の正の数を代入して、プログラム内で使用してください。

// 例：let num = 15;
// 倍数の判定は、3章で学習した算術演算子「%」を使用してください。
// 以下の例では「変数numを3で割った余りが0であればtrue」という条件式で、3の倍数かどうかを判定しています。

// 例：num % 3 == 0

// 変数を設定
let num = Math.floor(Math.random() * 20);
// console.log(num);

// ★課題の文章はダブルクォーテーションで文字列を囲んでいたが、文字列は教材同様にシングルクォーテーションを使用
// 0の時は変数を表示
if (num == 0) {
  console.log(num); 
}
// 変数が3と5の倍数の時
else if (num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です');
}
// 3の倍数の時
else if (num % 3 == 0) {
  console.log('3の倍数です');
}
// 変数が5の倍数の時
else if (num % 5 === 0) {
  console.log('5の倍数です');  
}
// それ以外の整数の時
else {
  console.log(num);
}