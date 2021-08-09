require(["gitbook", "jQuery"], function(gitbook, $) {
    
    $(function() {
      $(document).on('click', 'a', function(event){
        if($(this).attr('href')=='./'){
          location.reload(true);
        }
      });
  
      $(document).on('click', 'li.chapter', function(event) {
        var $chapter = $(event.currentTarget);
        event.stopPropagation();
        if ($chapter.find(':first-child').attr('href') === 'javascript:;') {
          var $children = $chapter.children('ul.articles');
          if ($children.length > 0) {
            $chapter.toggleClass('open');
          }
        }
      });

      $(document).on('click', '.doc-menu-toggle', function(event) {
        $('.doc-container').toggleClass('with-menu');
      });
    });
  
  });