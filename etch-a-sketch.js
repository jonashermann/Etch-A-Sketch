$(document).ready(function(){

        for(var i = 0; i < 256; i++){                
        insertDiv();
    }


  $('div div').hover(function(){
     var rgba = [];
     rgba = color();
      
    $(this).css('background-color', 'rgba(' + rgba[0] + ',' + rgba[1] + ',' +  rgba[2] + ',' + rgba[3] + ')');
    }); 

  $('button').click(function(){
    newGrid();                   // create new grid in the container
   });
  

});                      // Sketchpad 16x16 grid create with hovering(end of JQ source code)
 

  function newGrid(){                                              
    var grid = prompt('enter number of cell for your sketch pad');
    $('#container').empty();
    for(var i = 0; i < grid * grid; i++){
      insertDiv();
    }
    

    var newSizeDiv = (960 / grid) ;  // dimensionate new div to fit new sketchpad with the container 
    
    $('div div').css('width', 'newSizeDiv');
    $('div div').css('height', 'newSizeDiv');

      $('div div').hover(function(){
         var rgba = []; 
              rgba = color();
   
       $(this).css('background-color', 'rgba('+ rgba[0] +',' + rgba[1] + ','+ rgba[2] + ',' + rgba[3] +')');
      });


    
  }

  function insertDiv(){

     $('#container').append('<div></div>');
  }   

  function color(){

    var  rgba  = [];
    var  red   = Math.floor(Math.random()*255);
    var  green = Math.floor(Math.random()*255);
    var  blue  = Math.floor(Math.random()*255);
    var  alpha = Math.random();

   rgba.push(red);
   rgba.push(green);
   rgba.push(blue);
   rgba.push(alpha);
   return rgba;
 }



  

  

