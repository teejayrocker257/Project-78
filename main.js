var images = ["Hiran.jpg","Priya.jpg","Amma.jpg", "Appa.jpg","FamilyPicture.jpeg"];
var names = ["Hiran","Priya","Susila D", "Lingadurai M","Family Picture"];
var i = 0;

var family_members = 5;

function nextslide() 
{
  console.log("inside nextslide");
  if(i == family_members)
  {
    i = 0;
  }
  //var allimages = images[i];
  //var Names = names[i];
  document.getElementById("allimages").src = images[i];
  document.getElementById("Names").innerHTML = names[i];
  i++;
}