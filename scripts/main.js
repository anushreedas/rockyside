function callFirebase(){
var database = firebase.database();

var posts = database.ref('posts');
var filepath=document.getElementById("filepath").value;
var tagname=document.getElementById("tag").value;
var d=new Date();
var postdate=d.toDateString();
var data = {
path: filepath,
tag: tagname,
date:postdate
}
posts.push(data);

document.getElementById('show').innerHTML="Saved!";

}
