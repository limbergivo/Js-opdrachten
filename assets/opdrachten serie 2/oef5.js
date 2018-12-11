function operatoren() {
    let b = 2;
    let a = 0;
    a = b++;
      alert("a:"+a+"\nb:"+b);
  
    a=0;
    b=2;
    a = ++b;
      alert("a:"+a+"\nb:"+b);
  
    a=0;
    b=2;
    a = b--;
      alert("a:"+a+"\nb:"+b);
    
    a=0;
    b=2;
    a = --b;
      alert("a:"+a+"\nb:"+b);
  
    a=0;
    b=2;
    a += b++;
      alert("a:"+a+"\nb:"+b);
  
    a=1;
    b=2;
    a = 1; a += ++b;
      alert("a:"+a+"\nb:"+b);
  
    a=1;
    b=2;
    a = 1; a -= b++;
      alert("a:"+a+"\nb:"+b);
    
    a=1;
    b=2;
    a = 1; a -= ++b;
      alert("a:"+a+"\nb:"+b);
    
    a=1;
    b=2;
    a = 1; a += b--;
      alert("a:"+a+"\nb:"+b);
  
    a=1;
    b=2
    a = 1; a += --b;
      alert("a:"+a+"\nb:"+b);
  }