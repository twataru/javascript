//要素の追加
var hogeDiv = document.createElement( "div" );

//要素にstyleを設定
hogeDiv.style.width = "100px";
hogeDiv.style.height = "100px";
hogeDiv.style.marginTop = "5px";
hogeDiv.innerHTML = "わーい！すごーい！"
getElement( "body" ).appendChild( hogeDiv );

//要素のidを取得
var id = Document.getElementById( 'hoge' );