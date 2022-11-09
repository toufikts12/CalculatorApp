let abc=true;

    function input()
    {
        if(abc==false){
        document.getElementById("display").value="";
        abc=true;
        }

       document.getElementById("display").value+=this.value ; 

    }

    function operation()
    {
        abc=false;
        
        let data=document.getElementById("display").value

        let str=new String(data);
            if(str.match(/(?=.*[*])/)){
            let mularray=str.split("*")
            let mulresult=1
            for(let i=0;i<mularray.length;i++){
            mulresult=mulresult*parseInt(mularray[i])
            }
            document.getElementById("display").value=mulresult;
            }

            else if(str.match(/(?=.*[/])/)){
            let mularray=str.split("/")
            let divresult=mularray[0]
            for(let i=1;i<mularray.length;i++){
            divresult=divresult/parseInt(mularray[i])
            }
            document.getElementById("display").value=divresult;
            }

            else if(str.match(/(?=.*[+])/)){
            let mularray=str.split("+")
            let addresult=0
            for(let i=0;i<mularray.length;i++){
            addresult=addresult+parseInt(mularray[i])
            }
            document.getElementById("display").value=addresult;
            }

            else if(str.match(/(?=.*[-])/)){
            let mularray=str.split("-")
            let subresult=mularray[0]
            for(let i=1;i<mularray.length;i++){
                subresult=subresult-parseInt(mularray[i])
            }
            document.getElementById("display").value=subresult;
            }

            else
            {
            let mularray=str.split("%")
            let subresult=parseInt(mularray[0])
            let percentage=(subresult/100)*parseFloat(mularray[1])
            document.getElementById("display").value=percentage;
            }

          
              
    }

       function back()
            {
                let data=document.getElementById("display").value
                let str=new String(data);
                let newstr=""
                for(let j=0;j<str.length-1;j++)
                {
                    newstr+=str.charAt(j)
                }
                document.getElementById("display").value=newstr
            }

    function clear()
     {
        document.getElementById("display").value=""
     }
     
    document.getElementById("1").onclick=input
    document.getElementById("2").onclick=input
    document.getElementById("3").onclick=input
    document.getElementById("4").onclick=input
    document.getElementById("5").onclick=input
    document.getElementById("6").onclick=input
    document.getElementById("7").onclick=input
    document.getElementById("8").onclick=input
    document.getElementById("9").onclick=input
    document.getElementById("0").onclick=input
    document.getElementById("add").onclick=input

    document.getElementById("sub").onclick=input
    document.getElementById("mul").onclick=input
    document.getElementById("div").onclick=input
    document.getElementById("pr").onclick=input
  
    document.getElementById("equal").onclick=operation
    document.getElementById("res").onclick = back
    document.getElementById("cls").onclick = clear
    
    