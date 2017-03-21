//$('element').method();
$( '#hoge' ).on( 'click hover', function(){
    alert( "hoge" );
} );


/**
 * $.map
 *
 * 配列の各値を処理して新しい配列を作成する。
 */

//チェックが入っている要素のvalueを取得
var checkBoxArray = $( '#checkbox :checked' ).map( function(){
    return $( this ).val();
} ).get();

/**
 * $.prop
 * $.attr
 *
 * 属性プロパティに値を設定、または取得
 */

//チェックを設定
$( '#checkbox input:checkbox' ).prop( 'checked', true );

//propとattrの挙動の違い
var is_checked = $( '#check1' ).prop( 'checked' );  //trueが返る ( 真偽値 )
var attr_checked = $( '#check1' ).attr( 'checked' );  //'checked'が返る( 文字列 )


/*
 * 動的に生成した要素にイベントを登録する方法
 */
//documentにハンドリングさせる
$( document ).on( 'click', '.element', function(){
    console.log( 'イベント登録' );
} );

