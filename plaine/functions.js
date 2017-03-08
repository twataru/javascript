//関数宣言
/*
 * ホイスティング
 * 
 * 宣言の巻き上げ処理
 * 常に宣言はスコープの先頭で行われたことにする
 * */
shout( '焼肉定食' );//可能
function shout( text ){
    console.log( text );
}
shout( '焼肉定食' );//可能

/*
 * ホイスティングしない
 * 
 * 関数式での関数の定義は代入処理が行われた時に初めて定義されるので巻き上げ処理は行われない
 * */
whisper( 'ハンバーグ定食' );//エラー
var whisper = function( text ){
    console.log( text );
};
whisper( 'ハンバーグ定食' );//可能

