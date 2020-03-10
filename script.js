



      document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {classes: 'cuisine'});
  });
      $(document).ready(function() {
        console.log(data);
        $(".json-output").html('const data = ' + JSON.stringify(data));


        $("#add-ingredients").on('click', function(){
          var ingredientHTML = $('.ingredients-container').first().clone();
           ingredientHTML.insertAfter($('.ingredients-container').last());
           $('.ingredients-container').last().find('input').val('');
           $('.ingredients-container>.col.s12').last().removeClass('odd even');
           if($('.ingredients-container').length % 2 ==0){
            $('.ingredients-container>.col.s12').last().addClass('even');
           }else{
            $('.ingredients-container>.col.s12').last().addClass('odd');
           }

        });
        $("#remove-ingredients").on('click', function(){
          if($('.ingredients-container').length > 1){
            $('.ingredients-container').last().fadeOut('fast', function(){
  $(this).last().remove();
});;
          }


        });

        $(document).on('click', '.add-directions', function(){

          var instruction = $(this).parent().parent().find('input[name="directions"]').first().clone();
          instruction.insertAfter($(this).parent().parent().find('input').last()).last();
          $(this).parent().parent().find('input[name="directions"]').last().val('');


        });
        $(document).on('click', '.remove-directions', function(){
          if($(this).parent().parent().find('input[name="directions"]').length > 1){
            $(this).parent().parent().find('input[name="directions"]').last().fadeOut('fast', function(){
  $(this).last().remove();
});;
          }
        });
        $('#remove-directions-header').on('click', function(){
          if($('.directions-header-container').length > 1){
            $('.directions-header-container').last().fadeOut('fast', function(){
  $(this).last().remove();
});;
          }
        });


        $('#add-directions-header').on('click', function(){
          var directionSection = $('.directions-header-container').first().clone();

          directionSection.insertAfter($('.directions-header-container').last()).last();
          $('.directions-header-container').last().find('[name="header"]').val('');
          $('.directions-header-container').last().find('[name="directions"]').each(function(index){
            if(index != 0){
              $(this).fadeOut('fast', function(){
  $(this).last().remove();
});;
            }
            $(this).val('');
          });
        });


        $('button[type="submit"]').on('click', function(){
          var params = {};
          params["recipe-name"] = $('input[name="recipe-name"]').val();
          params["image"] = $('input[name="image"]').val();
          params["serves"] = $('input[name="serves"]').val();
          params["time"] = $('input[name="time"]').val();
          params["ingredients"] =[];
          params["directions"] =[];

          for(var i = 0; i < $('.ingredients-container').length; i++){
            //console.log(i);
            var ingredientObj = {};
            ingredientObj["name"] = $('.ingredients-container:eq(' + i + ')').find($('input[name="ingredients"]')).val();
            ingredientObj["quantity"] = $('.ingredients-container:eq(' + i + ')').find($('input[name="quantity"]')).val();
            ingredientObj["style"] = $('.ingredients-container:eq(' + i + ')').find($('input[name="style"]')).val();
            params["ingredients"].push(ingredientObj);

          }

          for(var j = 0; j < $('.directions-header-container').length; j++){

            //console.log($('.directions-header-container:eq(' + j + ')').find($('input[name="header"]')))
            var headerObj = {};
            headerObj["type"] = "header";
            headerObj["text"] = $('.directions-header-container:eq(' + j + ')').find($('input[name="header"]')).val();


            params["directions"].push(headerObj);
            $('.directions-header-container:eq(' + j + ')').find($('input[name="directions"]')).each(function(){

              var directionObj = {};
              directionObj["type"] = "directions";
              directionObj["text"] = $(this).val();
              params["directions"].push(directionObj);
            })
            //console.log(params);
          }
          console.log(params);

          var data2 = data;
          var newEntry = {
            name: params["recipe-name"],
            serves: params["serves"],
            time: params["time"],
            image: params["image"],
            ingredients: params["ingredients"],
            directions: params["directions"]

          }

          var cuisines = [];
          $('.cuisine .selected').each(function(){
            cuisines.push($(this).text());
          });
          var submit = true;
          for(cuisine in data2){
            if(cuisines.indexOf(data2[cuisine].name) != -1){
              for (entry in data2[cuisine].recipes){
                if(data2[cuisine].recipes[entry].name == newEntry.name){
                  submit = false;
                }
              }
              if(submit){
                data2[cuisine].recipes.push(newEntry);
              }else{
                alert('This recipe already exists!');
              }

            }
          }
          $('.json-output').html('const data = ' + JSON.stringify(data2));
        });

        function copyClipboard(element) {
          // for Internet Explorer
          element = element[0];
          if(document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
            document.execCommand("Copy");
            alert("Copied JSON data to clipboard!");
          }
          else if(window.getSelection) {
            // other browsers

            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("Copy");
            alert("Copied JSON data to clipboard!");
          }
        }

        $('.copy').on('click', function(){
          copyClipboard($('.json-output'));

        })
      });
