//$('element').method();
$( '#hoge' ).on( 'click hover', function(){
 alert( "hoge" );
});


/**
* $.map
*
* �z��̊e�l���������ĐV�����z����쐬����B
*/

//�`�F�b�N�������Ă���v�f��value���擾
var checkBoxArray = $( '#checkbox :checked' ).map( function(){
 return $( this ).val();
}).get();

/**
* $.prop
* $.attr
*
* �����v���p�e�B�ɒl��ݒ�A�܂��͎擾
*/

//�`�F�b�N��ݒ�
$( '#checkbox input:checkbox' ).prop( 'checked', true );

//prop��attr�̋����̈Ⴂ
var is_checked   = $('#check1').prop('checked');  //true���Ԃ� ( �^�U�l )
var attr_checked = $('#check1').attr('checked');  //'checked'���Ԃ�( ������ )

