var modal=document.getElementById("lizModal"),btn=document.getElementById("show"),span=document.getElementsByClassName("close")[0];btn.addEventListener("click",function(){modal.style.display="block"}),span.addEventListener("click",function(){modal.style.display="none"}),window.onclick=function(e){e.target==modal&&(modal.style.display="none")},$(document).ready(function(){modal.style.display="none",$(".departure").click(function(){$(".right_departure").hide()})});