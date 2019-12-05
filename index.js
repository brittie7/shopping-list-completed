   $(function() {
    $('#js-shopping-list-form').submit(event =>{
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        $("ul.shopping-list").append(`<li>
        <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
        //if the user already submitted that value, create an alert, else do a different function
    });
   });

   $(document).on('click',".shopping-item-toggle", function(){  
     $(this.parentElement.previousElementSibling).toggleClass('shopping-item__checked') 
    });

    $(document).on('click',".shopping-item-delete", function(){  
      $(this.parentElement.parentElement).remove() 
     });