/************DISPLAYING DATA FROM FIREBASE DATABASE USING JAVASCRIPT**************/
/***********LINK TO WEBSITE:https://rockysideofevergreen.firebaseapp.com/blog.html ************/
function setup(){
  console.log("setup called!");

  //reference to firebase databse
  var database = firebase.database();
  var ref = database.ref('posts');
  ref.on("value", newData, errData);

  //open the tab mentioned in link
  var x = location.search;
  if(x=="?sketch")
  {document.getElementById("h1").click();}
  else if(x=="?paint")
  {document.getElementById("h2").click();}
  else if(x=="?graphic")
  {document.getElementById("h3").click();}
  else if(x=="?photo")
  {document.getElementById("h4").click();}
  else
  {document.getElementById("defaultOpen").click();}
}

function errData(err){
  console.log("Error:");
  console.log(err);
}



function newData(data) {
  //read data from database
  var posts = data.val();
  var keys = Object.keys(posts);
  for (var i = keys.length-1; i >=0 ; i--) {
    var k = keys[i];
    //DOM manipulations
    var container= document.createElement("DIV");

    var pDate=posts[k].date;
    var d=document.createElement("P");
    var t = document.createTextNode(pDate);
    d.setAttribute("id","postDate");
    d.appendChild(t);
    container.appendChild(d);

    var imgsrc="images/"+posts[k].path;
    var x = document.createElement("IMG");
    x.setAttribute("src", imgsrc);
    container.appendChild(x);

    var tags=posts[k].tag;
    var c=document.createElement("P");
    var u = document.createTextNode(tags);
    c.appendChild(u);
    container.appendChild(c);

    document.getElementById("newPost").appendChild(container.cloneNode(true));

    if(tags=="sketch")
    {  document.getElementById("sketchPost").appendChild(container);}
    if(tags=="paint")
    {  document.getElementById("paintPost").appendChild(container);}
    if(tags=="graphic")
    {  document.getElementById("graphicPost").appendChild(container);}
    if(tags=="photo")
    {  document.getElementById("photoPost").appendChild(container);}

  }
}
/**********TAB HEADERS***********************************/

function openCity(tabName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }

