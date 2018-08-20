import $ from 'jquery/dist/jquery.min.js';
export default class InputScripts {

    loadTag(LocalTagsCollection) {
        $(".keywords-container").each(function() {

            var keywordInput = $(this).find(".keyword-input");
            var keywordsList = $(this).find(".keywords-list");
    
            // adding keyword
            function addKeyword() {
                
                var $newKeyword = $("<span class='keyword'><span class='keyword-remove'></span><span class='keyword-text'>"+ keywordInput.val() +"</span></span>");
                keywordsList.append($newKeyword).trigger('resizeContainer');
                LocalTagsCollection.insert({TagName: keywordInput.val()});
                keywordInput.val("");
            }
    
            // add via enter key
            keywordInput.on('keyup', function(e){
                if((e.keyCode == 13) && (keywordInput.val()!=="")){
                    addKeyword();
                }
            });
    
            // add via button
            $('.keyword-input-button').on('click', function(){ 
                if((keywordInput.val()!=="")){
                    addKeyword();
                }
            });
    
            // removing keyword
            $(document).on("click",".keyword-remove", function(){
                $(this).parent().addClass('keyword-removed');
    
                function removeFromMarkup(){
                  $(".keyword-removed").remove();
                }
                setTimeout(removeFromMarkup, 500);
                keywordsList.css({'height':'auto'}).height();
            });
    
    
            // animating container height
            keywordsList.on('resizeContainer', function(){
                var heightnow = $(this).height();
                var heightfull = $(this).css({'max-height':'auto', 'height':'auto'}).height();
    
                $(this).css({ 'height' : heightnow }).animate({ 'height': heightfull }, 200);
            });
    
            $(window).on('resize', function() {
                keywordsList.css({'height':'auto'}).height();
            });
    
            // Auto Height for keywords that are pre-added
            $(window).on('load', function() {
                var keywordCount = $('.keywords-list').children("span").length;
    
                // Enables scrollbar if more than 3 items
                if (keywordCount > 0) {
                    keywordsList.css({'height':'auto'}).height();
            
                } 
            });
    
        });
    }
}

export const customStyles = {
    option: (base, {isFocused, isSelected}) => ({
      ...base,
      color: isSelected ? "#fff" : isFocused ? "#2a41e8" : "#808080",
      margin: "0px 10px",
      padding: "5px 10px",
      width: "auto"
    }),
    control: styles => ({ 
        ...styles, 
        backgroundColor: 'white',
        height: 48,
        color: "#808080",
        paddingLeft: 10,
        boxShadow: "0 1px 4px 0px rgba(0, 0, 0, 0.05)",
        border: "1px solid #e0e0e0"
    }),
  }