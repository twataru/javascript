/*
 * jquery-ui-tooltip
 */
//<div title="this is tooltip">this is div</div>
$( 'div' ).tooltip();

//linebreak
//<div title="this is tooltip.<br />doing an line break.">this is div</div>
$( 'div' ).tooltip( {
    content: function(){
        return $( this ).attr( "title" );
    }
} );

/*
 * jquery-ui-dialog
 */
//<input type="button" id="openDialog" value="open" />
//<div id="dialog">this is dialog</div>
$( '#dialog' ).dialog( {
    autoOpen: false,
    width: 500,
    height: 500
} );
$('#openDialog').on('click',function(){
   $( '#dialog' ).dialog( 'open' ); 
});