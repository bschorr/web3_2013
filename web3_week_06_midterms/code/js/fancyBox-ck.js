function centerImage(e){var t=(window.innerWidth-e.clientWidth)/2,n=(window.innerHeight-e.clientHeight)/2;e.style.top=n+"px";e.style.left=t+"px";return e}var myNode=document.querySelector(".page");myNode.addEventListener("click",function(e){if(e.target.tagName==="IMG"){var t=document.createElement("div"),n=document.createElement("div");t.id="overlay";n.id="floatingDiv";document.body.appendChild(t);t.appendChild(n);t.style.position="absolute";t.style.top=0;t.style.backgroundColor="rgba(0,0,0,0.7)";t.style.cursor="pointer";n.style.position="absolute";n.style.top=0;n.style.backgroundColor="#333";n.style.width="80%";n.style.height="475px";t.style.width=window.innerWidth+"px";t.style.height=window.innerHeight+"px";t.style.top=window.pageYOffset+"px";t.style.left=window.pageXOffset+"px";var r=e.target.src,i=document.createElement("div");i.id="largeImage";i.style.width="50%";i.style.height="100%";r=r.substr(0,r.length-4)+"_hi.jpg";r="url('"+r+"')";i.style.backgroundImage=r;i.style.backgroundSize="600px";i.style.backgroundPosition="center";i.style.backgroundColor="rgba(255,0,0,0.7)";console.log(r);n.appendChild(i);centerImage(n);i.addEventListener("load",function(){this.style.height="475px";this.style.width="50%";n.appendChild(i);centerImage(n)});t.addEventListener("click",function(){if(t){window.removeEventListener("resize",window,!1);window.removeEventListener("scroll",window,!1);t.parentNode.removeChild(t)}},!1);window.addEventListener("scroll",function(){if(t){t.style.top=window.pageYOffset+"px";t.style.left=window.pageXOffset+"px";centerImage(n)}},!1);window.addEventListener("resize",function(){if(t){t.style.width=window.innerWidth+"px";t.style.height=window.innerHeight+"px";t.style.top=window.pageYOffset+"px";t.style.left=window.pageXOffset+"px";centerImage(n)}},!1)}},!1);