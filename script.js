function NS(){   
    a=document.getElementById("ns").value;
    if(a=="BtoD"){
        document.getElementById("demo").style.display = "none"; 
        b_d();
    }
    else if(a=="BtoO"){
        document.getElementById("demo").style.display = "none";
        b_o();
    }
    else if(a=="BtoH"){
        document.getElementById("demo").style.display = "none";
        b_h();
    }
    else if(a=="DtoB"){
        document.getElementById("demo").style.display = "none";
        d_b();
    }
    else if(a=="DtoO"){
        document.getElementById("demo").style.display = "none";
        d_o();
    }
    else if(a=="DtoH"){
        document.getElementById("demo").style.display = "none";
        d_h();
    }
    else if(a=="OtoB"){
        document.getElementById("demo").style.display = "none";
        o_b();
    }
    else if(a=="OtoD"){
        document.getElementById("demo").style.display = "none";
        o_d();
    }
    else if(a=="OtoH"){
        document.getElementById("demo").style.display = "none";
        o_h();
    }
    else if(a=="HtoB"){
        document.getElementById("demo").style.display = "none";
        h_b();
    }
    else if(a=="HtoD"){
        document.getElementById("demo").style.display = "none";
        h_d();
    }
    else if(a=="HtoO"){
        document.getElementById("demo").style.display = "none";
        h_o();
    }
    else{
        document.getElementById("demo").value="Please select any one converstion";
    }
}    
function b_d()
{
   bv=document.getElementById("vl").value;
   b=bv.length;
   c=b-1;
   de=0;
   for(i=0;i<b;i++)
   { 
    if(bv[i]==0 || bv[i]==1){
        de+=bv[i]*(2**c);
        c--;
    }
    else{
        document.getElementById("demo").value="Enter a binary value";
        document.getElementById("vl").value="";
        document.getElementById("demo").style.display = "block"; 
        de=" ";
   }
   }
   document.getElementById("result").value=de;
}

function b_o(){
    bv=document.getElementById("vl").value;
    b=bv.length;
    c=b-1;
    de=0;
    for(i=0;i<b;i++)
    {
        if(bv[i]==0 || bv[i]==1){
        de+=bv[i]*(2**c);
        c--;
        }
        else{
            document.getElementById("demo").value="Enter a binary value";
            document.getElementById("vl").value="";
            document.getElementById("demo").style.display = "block"; 
            de=" ";
        }
    }
    const bi = [];
    while (de>0){
        bi.push(de % 8);
        de = parseInt(de / 8);
    }
    bl=bi.reverse();
    document.getElementById("result").value=bl.join("");
}

function b_h(){
    bv=document.getElementById("vl").value;
    b=bv.length;
    c=b-1;
    de=0;
    for(i=0;i<b;i++)
    {
        if(bv[i]==0 || bv[i]==1){
        de+=bv[i]*(2**c);
        c--;
        }
        else{
            document.getElementById("demo").value="Enter a binary value";
            document.getElementById("vl").value="";
            document.getElementById("demo").style.display = "block"; 
            de=" ";
            }
    }
    const bi = [];
    while (de>0){
        r=(de % 16);
        if(r>9 && r<16)
        {
            if(r==10){
                r='A';
            }
            else if(r==11){
                r='B';
            }
            else if(r==12){
                r='C';
            }
            else if(r==13){
                r='D';
            }
            else if(r==14){
                r='E';
            }
            else{
                r='F';
            }
        }
        bi.push(r);
        de = parseInt(de / 16);
    }
    bl=bi.reverse();
    document.getElementById("result").value=bl.join("");
}
function d_b(){
   dv=document.getElementById("vl").value;
   d=dv.length;
   a=false;
    for(i=0;i<d;i++){
            if(dv[i]<=9){
                a=true;
            }
            else{
                a=false;
                break;
            } 
        }
        if(a){
        const bi = [];
               while (dv>0){
                    bi.push(dv % 2);
                    dv = parseInt(dv / 2);
                }
                bl=bi.reverse();
                document.getElementById("result").value=bl.join("");
            } 
         else{
            document.getElementById("demo").value="Enter a decimal value";
            document.getElementById("demo").style.display = "block"; 
            document.getElementById("vl").value="";
            document.getElementById("result").value=" ";   
            }
}
function d_o(){
    dv=document.getElementById("vl").value;
    d=dv.length;
    a=false;
     for(i=0;i<d;i++){
             if(dv[i]<=9){
                 a=true;
             }
             else{
                 a=false;
                 break;
             } 
         }
         if(a){
         const bi = [];
                while (dv>0){
                     bi.push(dv % 8);
                     dv = parseInt(dv / 8);
                 }
                 bl=bi.reverse();
                 document.getElementById("result").value=bl.join("");
             } 
          else{
            document.getElementById("demo").value="Enter a decimal value";
            document.getElementById("demo").style.display = "block"; 
            document.getElementById("vl").value="";
             document.getElementById("result").value=" ";
          }
}
function d_h(){
    dv=document.getElementById("vl").value;
    d=dv.length;
    a=false;
     for(i=0;i<d;i++){
             if(dv[i]<=9){
                 a=true;
             }
             else{
                 a=false;
                 break;
             } 
         }
         if(a){
            const bi = [];
            while (dv>0){
                 r=(dv % 16);
                 if(r>9 && r<16)
                 {
                     if(r==10){
                         r='A';
                     }
                     else if(r==11){
                         r='B';
                     }
                     else if(r==12){
                         r='C';
                     }
                     else if(r==13){
                         r='D';
                     }
                     else if(r==14){
                         r='E';
                     }
                     else{
                         r='F';
                     }
                 }
                 bi.push(r);
                 dv = parseInt(dv / 16);
             }
             bl=bi.reverse();
             document.getElementById("result").value=bl.join("");
             } 
          else{
            document.getElementById("demo").value="Enter a decimal value";
            document.getElementById("demo").style.display = "block"; 
            document.getElementById("vl").value="";
             document.getElementById("result").value=" ";
          }

}
function o_b(){
    ov=document.getElementById("vl").value;
   o=ov.length;
   c=o-1;
   de=0;
   a=false;
   for(i=0;i<o;i++){
       if(ov[i]<8){
           a=true;
       }
       else{
           a=false;
           break;
       }
    }
       if(a){
            for(i=0;i<o;i++)
            {
                de+=ov[i]*(8**c);
                c--;
            }
            const bi = [];
             while (de>0){
            bi.push(de % 2);
             de = parseInt(de / 2);
            }
            bl=bi.reverse();
            document.getElementById("result").value=bl.join("");
            }
        else{
            document.getElementById("demo").value="Enter a octal value";
            document.getElementById("demo").style.display = "block"; 
            document.getElementById("vl").value="";
            document.getElementById("result").value=" ";
            }
}
function o_d(){
   ov=document.getElementById("vl").value;
   o=ov.length;
   c=o-1;
   de=0;
   a=false;
   for(i=0;i<o;i++){
       if(ov[i]<8){
           a=true;
       }
       else{
           a=false;
           break;
       }
    }
       if(a){
         for(i=0;i<o;i++)
         {
            de+=ov[i]*(8**c);
            c--;
         }
        document.getElementById("result").value=de;
        }
        else{
            document.getElementById("demo").value="Enter a octal value";
            document.getElementById("demo").style.display = "block"; 
            document.getElementById("vl").value="";
            document.getElementById("result").value=" ";
            }
}
function o_h(){
    ov=document.getElementById("vl").value;
    o=ov.length;
    c=o-1;
    de=0;
    a=false;
    for(i=0;i<o;i++){
        if(ov[i]<8){
            a=true;
        }
        else{
            a=false;
            break;
        }
     }
     if(a){
    for(i=0;i<o;i++)
    {
         de+=ov[i]*(8**c);
         c--;
    }
    const bi = [];
    while (de>0){
        r=(de % 16);
        if(r>9 && r<16)
        {
            if(r==10){
                r='A';
            }
            else if(r==11){
                r='B';
            }
            else if(r==12){
                r='C';
            }
            else if(r==13){
                r='D';
            }
            else if(r==14){
                r='E';
            }
            else{
                r='F';
            }
        }
        bi.push(r);
        de = parseInt(de / 16);
    }
    bl=bi.reverse();
     document.getElementById("result").value=bl.join("");
    }
    else{
        document.getElementById("demo").value="Enter a octal value";
        document.getElementById("demo").style.display = "block"; 
        document.getElementById("vl").value="";
        document.getElementById("result").value=" ";
    }
}
function h_b(){
    hv=document.getElementById("vl").value;
    h=hv.length;
    c=h-1;
    de=0;
    a=false;
    harr=[];
   for(i=0;i<h;i++)
   {
        harr[i]=hv[i];
   }
    for(i=0;i<h;i++)
   {
       if(harr[i]=='A'||harr[i]=='B'||harr[i]=='C'||harr[i]=='D'||harr[i]=='E'||harr[i]=='F'){
       if(harr[i]=='A')
       {
           harr[i]=10;
       }
       else if(harr[i]=='B')
       {
           harr[i]=11;
       }
       else if(harr[i]=='C')
       {
           harr[i]=12;
       }
       else if(harr[i]=='D')
       {
           harr[i]=13;
       }
       else if(harr[i]=='E')
       {
           harr[i]=14;
       }
       else if(harr[i]=='F')
       {
           harr[i]=15;
       } }
       de+=harr[i]*(16**c);
       c--;
   }
   for(i=0;i<h;i++){
       if(harr[i]<16)
       {
           a=true;
       }
       else{
           a=false;
           break;
       }
   }
   if(a){
   const bi = [];
   while (de>0){
        bi.push(de % 2);
        de = parseInt(de / 2);
    }
    bl=bi.reverse();
    document.getElementById("result").value=bl.join("");
}
else{
    document.getElementById("demo").value="Enter a hexadecimal value";
    document.getElementById("demo").style.display = "block"; 
    document.getElementById("vl").value="";
    document.getElementById("result").value=" ";
}
}
function h_d(){
   hv=document.getElementById("vl").value;
   h=hv.length;
   c=h-1;
   de=0;
   a=false;
   harr=[];
   for(i=0;i<h;i++)
   {
        harr[i]=hv[i];
   }
   for(i=0;i<h;i++)
   {
       if(harr[i]=='A'||harr[i]=='B'||harr[i]=='C'||harr[i]=='D'||harr[i]=='E'||harr[i]=='F'){
       if(harr[i]=='A')
       {
           harr[i]=10;
       }
       else if(harr[i]=='B')
       {
           harr[i]=11;
       }
       else if(harr[i]=='C')
       {
           harr[i]=12;
       }
       else if(harr[i]=='D')
       {
           harr[i]=13;
       }
       else if(harr[i]=='E')
       {
           harr[i]=14;
       }
       else
       {
           harr[i]=15;
       } }
       de+=harr[i]*(16**c);
       c--;
   }
   for(i=0;i<h;i++){
    if(harr[i]<16)
    {
        a=true;
    }
    else{
        a=false;
        break;
    }
}
if(a){
   document.getElementById("result").value=de;
}
else{
    document.getElementById("demo").value="Enter a hexadecimal value";
    document.getElementById("demo").style.display = "block"; 
    document.getElementById("vl").value="";
    document.getElementById("result").value=" ";
}
}
function h_o(){
    hv=document.getElementById("vl").value;
    h=hv.length;
    c=h-1;
    de=0;
    a=false;
    harr=[];
   for(i=0;i<h;i++)
   {
        harr[i]=hv[i];
   }
    for(i=0;i<h;i++)
   {
       if(harr[i]=='A'||harr[i]=='B'||harr[i]=='C'||harr[i]=='D'||harr[i]=='E'||harr[i]=='F'){
       if(harr[i]=='A')
       {
           harr[i]=10;
       }
       else if(harr[i]=='B')
       {
           harr[i]=11;
       }
       else if(harr[i]=='C')
       {
           harr[i]=12;
       }
       else if(harr[i]=='D')
       {
           harr[i]=13;
       }
       else if(harr[i]=='E')
       {
           harr[i]=14;
       }
       else
       {
           harr[i]=15;
       } }
       de+=harr[i]*(16**c);
       c--;
   }
   for(i=0;i<h;i++){
    if(harr[i]<16)
    {
        a=true;
    }
    else{
        a=false;
        break;
    }
    }
    if(a){
   const bi = [];
   while (de>0){
        bi.push(de % 8);
        de = parseInt(de / 8);
    }
    bl=bi.reverse();
    document.getElementById("result").value=bl.join("");
}
else{
    document.getElementById("demo").value="Enter a hexadecimal value";
    document.getElementById("demo").style.display = "block"; 
    document.getElementById("vl").value="";
    document.getElementById("result").value=" ";
}
}