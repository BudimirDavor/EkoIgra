function drag(slika, event) 
{
    event.dataTransfer.setData('slika', slika.id);
}
function drop(target, event) 
{
    var slika = event.dataTransfer.getData('slika');
    target.appendChild(document.getElementById(slika));   
    if (document.getElementById('kanta').childNodes.length == 10)
	{
      document.getElementById('YES').src = 'images/yes.png';
      document.getElementById('YES').classList.add("run-animation");
    }        
    else 
	{  
      document.getElementById('YES').src = 'images/no.png';
      document.getElementById('YES').classList.remove("run-animation");      
    }
    if (document.getElementById('priroda').childNodes.length == 18)
	{
      document.getElementById('NO').src = 'images/yes.png';
      document.getElementById('NO').classList.add("run-animation");
    }
    else
	{  
      document.getElementById('NO').src = 'images/no.png';
      document.getElementById('NO').classList.remove("run-animation");      
    }      
}
