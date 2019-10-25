$("#webheader").load("../../header.html");


$("#webfooter").load("../../footer.html");


window.onclick = function(e)
    {   var id =  e.target.id;   
       if (id === 'sent')  
       { var txtbox = document.getElementById('example');
       var txtbox2 = document.getElementById('example2');
       
       var txt = txtbox.value;
       var txt2 = txtbox2.value;
       

       $( "#para" ).append(txt2 + " : " + txt + '<br>');
         $( txtbox ).val('');  
       }
    }
    
 
    // window.onclick = function(q)
    // {   var id =  q.target.id;   
    //    if (id === 'sent')  
    //    { var txtbox2 = document.getElementById('example2');
         
    //    var txt2 = txtbox2.value;

    //      $( "#para" ).append(txt2 + '<br>'); 
    //    }
    // }