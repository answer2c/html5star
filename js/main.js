
     
          
            var starnum=500;
            var d1=document.getElementById('myc1');
            d1.width=window.innerWidth;
            d1.height=window.innerHeight;
            var centerX=d1.width/2;
            var centerY=d1.height/2;
            var c1=d1.getContext('2d');

         
            var stars=[];
           

            function initial(){
                    
                    c1.fillStyle="rgba(0,20,0,1)";
                    c1.fillRect(0,0,d1.width,d1.height);
                   
                   stars=[];
                    for(var i=0;i<starnum;i++){
                        var star={
                                x:Math.random()*d1.width,
                                y:Math.random()*d1.height,
                                z:Math.random()*d1.width
                                        }
                        stars.push(star);

                    }
                 

            }

            function movestar(){
                    for(var i=0;i<starnum;i++){
                        stars[i].z--;
                        if(stars[i].z<=0){
                            stars[i].z=d1.width;
                        }
                    }
            }

       



           function draw(){

               c1.fillStyle = "rgba(0,0,0,1)"; 
              c1.fillRect(0,0, d1.width, d1.height);
              
               var locaX,locaY;
               for(var i=0;i<starnum;i++){
                star=stars[i];
                //以center中间为界限，在center左侧的，每次循环locaX越来越小，x-centerX为负值，右侧为正值

                locaX = (star.x - centerX) * (centerX / star.z);  
                locaX += centerX;               
                locaY = (star.y - centerY) * (centerY / star.z);          
                locaY += centerY;
                var zlength=500/stars[i].z;         
                c1.fillStyle="rgba(255,255,255,1)";
                c1.fillRect(locaX,locaY,zlength,zlength);
               }
               
           }


            function execute(){
                   
                    movestar();
                    draw();
                    requestAnimationFrame(execute);
            }


            initial();
            execute();
          
            

            window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();

      
        
