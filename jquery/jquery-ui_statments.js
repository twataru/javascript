/*
 * jquery-ui-tooltip
 */
//<div title="this is tooltip">this is div</div>
$('div').tooltip();

//linebreak
//<div title="this is tooltip.<br />doing an line break.">this is div</div>
$('div').tooltip({
   content:function(){
        return $(this).attr("title");
    } 
});