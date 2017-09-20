/**

The MIT License (MIT)

Copyright (c) 2017 Alan Boglioli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**/
var Delaunay
!function(){"use strict"
function t(t){var e,i,r,n,s,o,a=Number.POSITIVE_INFINITY,h=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,u=Number.NEGATIVE_INFINITY
for(e=t.length;e--;)t[e][0]<a&&(a=t[e][0]),t[e][0]>l&&(l=t[e][0]),t[e][1]<h&&(h=t[e][1]),t[e][1]>u&&(u=t[e][1])
return i=l-a,r=u-h,n=Math.max(i,r),s=a+.5*i,o=h+.5*r,[[s-20*n,o-n],[s,o+20*n],[s+20*n,o-n]]}function e(t,e,i,n){var s,o,a,h,l,u,f,c,S,d,p=t[e][0],g=t[e][1],m=t[i][0],F=t[i][1],b=t[n][0],y=t[n][1],v=Math.abs(g-F),x=Math.abs(F-y)
if(v<r&&x<r)throw new Error("Eek! Coincident points!")
return v<r?(h=-(b-m)/(y-F),u=(m+b)/2,c=(F+y)/2,s=(m+p)/2,o=h*(s-u)+c):x<r?(a=-(m-p)/(F-g),l=(p+m)/2,f=(g+F)/2,s=(b+m)/2,o=a*(s-l)+f):(a=-(m-p)/(F-g),h=-(b-m)/(y-F),l=(p+m)/2,u=(m+b)/2,f=(g+F)/2,c=(F+y)/2,s=(a*l-h*u+c-f)/(a-h),o=v>x?a*(s-l)+f:h*(s-u)+c),S=m-s,d=F-o,{i:e,j:i,k:n,x:s,y:o,r:S*S+d*d}}function i(t){var e,i,r,n,s,o
for(i=t.length;i;)for(n=t[--i],r=t[--i],e=i;e;)if(o=t[--e],s=t[--e],r===s&&n===o||r===o&&n===s){t.splice(i,2),t.splice(e,2)
break}}var r=1/1048576
Delaunay={triangulate:function(n,s){var o,a,h,l,u,f,c,S,d,p,g,m,F=n.length
if(F<3)return[]
if(n=n.slice(0),s)for(o=F;o--;)n[o]=n[o][s]
for(h=new Array(F),o=F;o--;)h[o]=o
for(h.sort(function(t,e){return n[e][0]-n[t][0]}),l=t(n),n.push(l[0],l[1],l[2]),u=[e(n,F+0,F+1,F+2)],f=[],c=[],o=h.length;o--;c.length=0){for(m=h[o],a=u.length;a--;)S=n[m][0]-u[a].x,S>0&&S*S>u[a].r?(f.push(u[a]),u.splice(a,1)):(d=n[m][1]-u[a].y,S*S+d*d-u[a].r>r||(c.push(u[a].i,u[a].j,u[a].j,u[a].k,u[a].k,u[a].i),u.splice(a,1)))
for(i(c),a=c.length;a;)g=c[--a],p=c[--a],u.push(e(n,p,g,m))}for(o=u.length;o--;)f.push(u[o])
for(u.length=0,o=f.length;o--;)f[o].i<F&&f[o].j<F&&f[o].k<F&&u.push(f[o].i,f[o].j,f[o].k)
return u},contains:function(t,e){if(e[0]<t[0][0]&&e[0]<t[1][0]&&e[0]<t[2][0]||e[0]>t[0][0]&&e[0]>t[1][0]&&e[0]>t[2][0]||e[1]<t[0][1]&&e[1]<t[1][1]&&e[1]<t[2][1]||e[1]>t[0][1]&&e[1]>t[1][1]&&e[1]>t[2][1])return null
var i=t[1][0]-t[0][0],r=t[2][0]-t[0][0],n=t[1][1]-t[0][1],s=t[2][1]-t[0][1],o=i*s-r*n
if(0===o)return null
var a=(s*(e[0]-t[0][0])-r*(e[1]-t[0][1]))/o,h=(i*(e[1]-t[0][1])-n*(e[0]-t[0][0]))/o
return a<0||h<0||a+h>1?null:[a,h]}},"undefined"!=typeof module&&(module.exports=Delaunay)}(),function(){function t(t,e){return[].slice.call((e||document).querySelectorAll(t))}if(window.addEventListener){var e=window.StyleFix={link:function(t){try{if("stylesheet"!==t.rel||t.hasAttribute("data-noprefix"))return}catch(t){return}var i,r=t.href||t.getAttribute("data-href"),n=r.replace(/[^\/]+$/,""),s=(/^[a-z]{3,10}:/.exec(n)||[""])[0],o=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(n)||[""])[0],a=/^([^?]*)\??/.exec(r)[1],h=t.parentNode,l=new XMLHttpRequest
l.onreadystatechange=function(){4===l.readyState&&i()},i=function(){var i=l.responseText
if(i&&t.parentNode&&(!l.status||l.status<400||l.status>600)){if(i=e.fix(i,!0,t),n){i=i.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(t,e,i){return/^([a-z]{3,10}:|#)/i.test(i)?t:/^\/\//.test(i)?'url("'+s+i+'")':/^\//.test(i)?'url("'+o+i+'")':/^\?/.test(i)?'url("'+a+i+'")':'url("'+n+i+'")'})
var r=n.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1")
i=i.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+r,"gi"),"$1")}var u=document.createElement("style")
u.textContent=i,u.media=t.media,u.disabled=t.disabled,u.setAttribute("data-href",t.getAttribute("href")),h.insertBefore(u,t),h.removeChild(t),u.media=t.media}}
try{l.open("GET",r),l.send(null)}catch(t){"undefined"!=typeof XDomainRequest&&(l=new XDomainRequest,l.onerror=l.onprogress=function(){},l.onload=i,l.open("GET",r),l.send(null))}t.setAttribute("data-inprogress","")},styleElement:function(t){if(!t.hasAttribute("data-noprefix")){var i=t.disabled
t.textContent=e.fix(t.textContent,!0,t),t.disabled=i}},styleAttribute:function(t){var i=t.getAttribute("style")
i=e.fix(i,!1,t),t.setAttribute("style",i)},process:function(){t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link),t("style").forEach(StyleFix.styleElement),t("[style]").forEach(StyleFix.styleAttribute)},register:function(t,i){(e.fixers=e.fixers||[]).splice(void 0===i?e.fixers.length:i,0,t)},fix:function(t,i,r){for(var n=0;n<e.fixers.length;n++)t=e.fixers[n](t,i,r)||t
return t},camelCase:function(t){return t.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()}).replace("-","")},deCamelCase:function(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}}
!function(){setTimeout(function(){t('link[rel="stylesheet"]').forEach(StyleFix.link)},10),document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}()}}(),function(t){function e(t,e,r,n,s){if(t=i[t],t.length){var o=RegExp(e+"("+t.join("|")+")"+r,"gi")
s=s.replace(o,n)}return s}if(window.StyleFix&&window.getComputedStyle){var i=window.PrefixFree={prefixCSS:function(t,r,n){var s=i.prefix
if(i.functions.indexOf("linear-gradient")>-1&&(t=t.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi,function(t,e,i,r){return e+(i||"")+"linear-gradient("+(90-r)+"deg"})),t=e("functions","(\\s|:|,)","\\s*\\(","$1"+s+"$2(",t),t=e("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+s+"$2$3",t),t=e("properties","(^|\\{|\\s|;)","\\s*:","$1"+s+"$2:",t),i.properties.length){var o=RegExp("\\b("+i.properties.join("|")+")(?!:)","gi")
t=e("valueProperties","\\b",":(.+?);",function(t){return t.replace(o,s+"$1")},t)}return r&&(t=e("selectors","","\\b",i.prefixSelector,t),t=e("atrules","@","\\b","@"+s+"$1",t)),t=t.replace(RegExp("-"+s,"g"),"-"),t=t.replace(/-\*-(?=[a-z]+)/gi,i.prefix)},property:function(t){return(i.properties.indexOf(t)?i.prefix:"")+t},value:function(t,r){return t=e("functions","(^|\\s|,)","\\s*\\(","$1"+i.prefix+"$2(",t),t=e("keywords","(^|\\s)","(\\s|$)","$1"+i.prefix+"$2$3",t)},prefixSelector:function(t){return t.replace(/^:{1,2}/,function(t){return t+i.prefix})},prefixProperty:function(t,e){var r=i.prefix+t
return e?StyleFix.camelCase(r):r}}
!function(){var t={},e=[],r=getComputedStyle(document.documentElement,null),n=document.createElement("div").style,s=function(i){if("-"===i.charAt(0)){e.push(i)
var r=i.split("-"),n=r[1]
for(t[n]=++t[n]||1;r.length>3;){r.pop()
var s=r.join("-")
o(s)&&-1===e.indexOf(s)&&e.push(s)}}},o=function(t){return StyleFix.camelCase(t)in n}
if(r.length>0)for(var a=0;a<r.length;a++)s(r[a])
else for(var h in r)s(StyleFix.deCamelCase(h))
var l={uses:0}
for(var u in t){var f=t[u]
l.uses<f&&(l={prefix:u,uses:f})}i.prefix="-"+l.prefix+"-",i.Prefix=StyleFix.camelCase(i.prefix),i.properties=[]
for(var a=0;a<e.length;a++){var h=e[a]
if(0===h.indexOf(i.prefix)){var c=h.slice(i.prefix.length)
o(c)||i.properties.push(c)}}"Ms"==i.Prefix&&!("transform"in n)&&!("MsTransform"in n)&&"msTransform"in n&&i.properties.push("transform","transform-origin"),i.properties.sort()}(),function(){function t(t,e){return n[e]="",n[e]=t,!!n[e]}var e={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}}
e["repeating-linear-gradient"]=e["repeating-radial-gradient"]=e["radial-gradient"]=e["linear-gradient"]
var r={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","min-content":"width"}
i.functions=[],i.keywords=[]
var n=document.createElement("div").style
for(var s in e){var o=e[s],a=o.property,h=s+"("+o.params+")"
!t(h,a)&&t(i.prefix+h,a)&&i.functions.push(s)}for(var l in r){var a=r[l]
!t(l,a)&&t(i.prefix+l,a)&&i.keywords.push(l)}}(),function(){function e(t){return s.textContent=t+"{}",!!s.sheet.cssRules.length}var r={":read-only":null,":read-write":null,":any-link":null,"::selection":null},n={keyframes:"name",viewport:null,document:'regexp(".")'}
i.selectors=[],i.atrules=[]
var s=t.appendChild(document.createElement("style"))
for(var o in r){var a=o+(r[o]?"("+r[o]+")":"")
!e(a)&&e(i.prefixSelector(a))&&i.selectors.push(o)}for(var h in n){var a=h+" "+(n[h]||"")
!e("@"+a)&&e("@"+i.prefix+a)&&i.atrules.push(h)}t.removeChild(s)}(),i.valueProperties=["transition","transition-property"],t.className+=" "+i.prefix,StyleFix.register(i.prefixCSS)}}(document.documentElement),FSS={FRONT:0,BACK:1,DOUBLE:2,SVGNS:"http://www.w3.org/2000/svg"},FSS.Array="function"==typeof Float32Array?Float32Array:Array,FSS.Utils={isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}},function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"]
window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var r=(new Date).getTime(),n=Math.max(0,16-(r-t)),s=window.setTimeout(function(){e(r+n)},n)
return t=r+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),FSS.Vector3={create:function(t,e,i){var r=new FSS.Array(3)
return this.set(r,t,e,i),r},clone:function(t){var e=this.create()
return this.copy(e,t),e},set:function(t,e,i,r){return t[0]=e||0,t[1]=i||0,t[2]=r||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],this},addVectors:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],this},addScalar:function(t,e){return t[0]+=e,t[1]+=e,t[2]+=e,this},subtract:function(t,e){return t[0]-=e[0],t[1]-=e[1],t[2]-=e[2],this},subtractVectors:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],this},subtractScalar:function(t,e){return t[0]-=e,t[1]-=e,t[2]-=e,this},multiply:function(t,e){return t[0]*=e[0],t[1]*=e[1],t[2]*=e[2],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,this},divide:function(t,e){return t[0]/=e[0],t[1]/=e[1],t[2]/=e[2],this},divideVectors:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],this},divideScalar:function(t,e){return 0!==e?(t[0]/=e,t[1]/=e,t[2]/=e):(t[0]=0,t[1]=0,t[2]=0),this},cross:function(t,e){var i=t[0],r=t[1],n=t[2]
return t[0]=r*e[2]-n*e[1],t[1]=n*e[0]-i*e[2],t[2]=i*e[1]-r*e[0],this},crossVectors:function(t,e,i){return t[0]=e[1]*i[2]-e[2]*i[1],t[1]=e[2]*i[0]-e[0]*i[2],t[2]=e[0]*i[1]-e[1]*i[0],this},min:function(t,e){return t[0]<e&&(t[0]=e),t[1]<e&&(t[1]=e),t[2]<e&&(t[2]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this},limit:function(t,e,i){var r=this.length(t)
return null!==e&&r<e?this.setLength(t,e):null!==i&&r>i&&this.setLength(t,i),this},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},normalise:function(t){return this.divideScalar(t,this.length(t))},negate:function(t){return this.multiplyScalar(t,-1)},distanceSquared:function(t,e){var i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2]
return i*i+r*r+n*n},distance:function(t,e){return Math.sqrt(this.distanceSquared(t,e))},lengthSquared:function(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]},length:function(t){return Math.sqrt(this.lengthSquared(t))},setLength:function(t,e){var i=this.length(t)
return 0!==i&&e!==i&&this.multiplyScalar(t,e/i),this}},FSS.Vector4={create:function(t,e,i,r){var n=new FSS.Array(4)
return this.set(n,t,e,i),n},set:function(t,e,i,r,n){return t[0]=e||0,t[1]=i||0,t[2]=r||0,t[3]=n||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},setW:function(t,e){return t[3]=e||0,this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],t[3]+=e[3],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t[3]=e[3]*i[3],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,this},min:function(t,e){return t[0]<e&&(t[0]=e),t[1]<e&&(t[1]=e),t[2]<e&&(t[2]=e),t[3]<e&&(t[3]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),t[3]>e&&(t[3]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this}},FSS.Color=function(t,e){this.rgba=FSS.Vector4.create(),this.hex=t||"#000000",this.opacity=FSS.Utils.isNumber(e)?e:1,this.set(this.hex,this.opacity)},FSS.Color.prototype={set:function(t,e){t=t.replace("#","")
var i=t.length/3
return this.rgba[0]=parseInt(t.substring(0*i,1*i),16)/255,this.rgba[1]=parseInt(t.substring(1*i,2*i),16)/255,this.rgba[2]=parseInt(t.substring(2*i,3*i),16)/255,this.rgba[3]=FSS.Utils.isNumber(e)?e:this.rgba[3],this},hexify:function(t){var e=Math.ceil(255*t).toString(16)
return 1===e.length&&(e="0"+e),e},format:function(){var t=this.hexify(this.rgba[0]),e=this.hexify(this.rgba[1]),i=this.hexify(this.rgba[2])
return this.hex="#"+t+e+i,this.hex}},FSS.Object=function(){this.position=FSS.Vector3.create()},FSS.Object.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Light=function(t,e){FSS.Object.call(this),this.ambient=new FSS.Color(t||"#FFFFFF"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.ray=FSS.Vector3.create()},FSS.Light.prototype=Object.create(FSS.Object.prototype),FSS.Vertex=function(t,e,i){this.position=FSS.Vector3.create(t,e,i)},FSS.Vertex.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Triangle=function(t,e,i){this.a=t||new FSS.Vertex,this.b=e||new FSS.Vertex,this.c=i||new FSS.Vertex,this.vertices=[this.a,this.b,this.c],this.u=FSS.Vector3.create(),this.v=FSS.Vector3.create(),this.centroid=FSS.Vector3.create(),this.normal=FSS.Vector3.create(),this.color=new FSS.Color,this.polygon=document.createElementNS(FSS.SVGNS,"polygon"),this.polygon.setAttributeNS(null,"stroke-linejoin","round"),this.polygon.setAttributeNS(null,"stroke-miterlimit","1"),this.polygon.setAttributeNS(null,"stroke-width","1"),this.computeCentroid(),this.computeNormal()},FSS.Triangle.prototype={computeCentroid:function(){return this.centroid[0]=this.a.position[0]+this.b.position[0]+this.c.position[0],this.centroid[1]=this.a.position[1]+this.b.position[1]+this.c.position[1],this.centroid[2]=this.a.position[2]+this.b.position[2]+this.c.position[2],FSS.Vector3.divideScalar(this.centroid,3),this},computeNormal:function(){return FSS.Vector3.subtractVectors(this.u,this.b.position,this.a.position),FSS.Vector3.subtractVectors(this.v,this.c.position,this.a.position),FSS.Vector3.crossVectors(this.normal,this.u,this.v),FSS.Vector3.normalise(this.normal),this}},FSS.Geometry=function(){this.vertices=[],this.triangles=[],this.dirty=!1},FSS.Geometry.prototype={update:function(){if(this.dirty){var t,e
for(t=this.triangles.length-1;t>=0;t--)e=this.triangles[t],e.computeCentroid(),e.computeNormal()
this.dirty=!1}return this}},FSS.Plane=function(t,e,i){FSS.Geometry.call(this),this.width=t||100,this.height=e||100
var r,n,s=new Array(i)
for(offsetX=-.5*this.width,offsetY=.5*this.height,o=s.length;o--;)r=offsetX+Math.random()*t,n=offsetY-Math.random()*e,s[o]=[r,n]
s.push([offsetX,offsetY]),s.push([offsetX+t/2,offsetY]),s.push([offsetX+t,offsetY]),s.push([offsetX+t,offsetY-e/2]),s.push([offsetX+t,offsetY-e]),s.push([offsetX+t/2,offsetY-e]),s.push([offsetX,offsetY-e]),s.push([offsetX,offsetY-e/2])
for(var o=6;o>=0;o--)s.push([offsetX+Math.random()*t,offsetY]),s.push([offsetX,offsetY-Math.random()*e]),s.push([offsetX+t,offsetY-Math.random()*e]),s.push([offsetX+Math.random()*t,offsetY-e])
var a=Delaunay.triangulate(s)
for(o=a.length;o;){--o
var h=[Math.ceil(s[a[o]][0]),Math.ceil(s[a[o]][1])];--o
var l=[Math.ceil(s[a[o]][0]),Math.ceil(s[a[o]][1])];--o
var u=[Math.ceil(s[a[o]][0]),Math.ceil(s[a[o]][1])]
t1=new FSS.Triangle(new FSS.Vertex(h[0],h[1]),new FSS.Vertex(l[0],l[1]),new FSS.Vertex(u[0],u[1])),this.triangles.push(t1)}},FSS.Plane.prototype=Object.create(FSS.Geometry.prototype),FSS.Material=function(t,e){this.ambient=new FSS.Color(t||"#444444"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.slave=new FSS.Color},FSS.Mesh=function(t,e){FSS.Object.call(this),this.geometry=t||new FSS.Geometry,this.material=e||new FSS.Material,this.side=FSS.FRONT,this.visible=!0},FSS.Mesh.prototype=Object.create(FSS.Object.prototype),FSS.Mesh.prototype.update=function(t,e){var i,r,n,s,o
if(this.geometry.update(),e)for(i=this.geometry.triangles.length-1;i>=0;i--){for(r=this.geometry.triangles[i],FSS.Vector4.set(r.color.rgba),n=t.length-1;n>=0;n--)s=t[n],FSS.Vector3.subtractVectors(s.ray,s.position,r.centroid),FSS.Vector3.normalise(s.ray),o=FSS.Vector3.dot(r.normal,s.ray),this.side===FSS.FRONT?o=Math.max(o,0):this.side===FSS.BACK?o=Math.abs(Math.min(o,0)):this.side===FSS.DOUBLE&&(o=Math.max(Math.abs(o),0)),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.ambient.rgba,s.ambient.rgba),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.diffuse.rgba,s.diffuse.rgba),FSS.Vector4.multiplyScalar(this.material.slave.rgba,o),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba)
FSS.Vector4.clamp(r.color.rgba,0,1)}return this},FSS.Scene=function(){this.meshes=[],this.lights=[]},FSS.Scene.prototype={add:function(t){return t instanceof FSS.Mesh&&!~this.meshes.indexOf(t)?this.meshes.push(t):t instanceof FSS.Light&&!~this.lights.indexOf(t)&&this.lights.push(t),this},remove:function(t){return t instanceof FSS.Mesh&&~this.meshes.indexOf(t)?this.meshes.splice(this.meshes.indexOf(t),1):t instanceof FSS.Light&&~this.lights.indexOf(t)&&this.lights.splice(this.lights.indexOf(t),1),this}},FSS.Renderer=function(){this.width=0,this.height=0,this.halfWidth=0,this.halfHeight=0},FSS.Renderer.prototype={setSize:function(t,e){if(this.width!==t||this.height!==e)return this.width=t,this.height=e,this.halfWidth=.5*this.width,this.halfHeight=.5*this.height,this},clear:function(){return this},render:function(t){return this}},FSS.CanvasRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.context=this.element.getContext("2d"),this.setSize(this.element.width,this.element.height)},FSS.CanvasRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.CanvasRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.width=t,this.element.height=e,this.context.setTransform(1,0,0,-1,this.halfWidth,this.halfHeight),this},FSS.CanvasRenderer.prototype.clear=function(){return FSS.Renderer.prototype.clear.call(this),this.context.clearRect(-this.halfWidth,-this.halfHeight,this.width,this.height),this},FSS.CanvasRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t)
var e,i,r,n,s
for(this.clear(),this.context.lineJoin="round",this.context.lineWidth=1,e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)n=i.geometry.triangles[r],s=n.color.format(),this.context.beginPath(),this.context.moveTo(n.a.position[0],n.a.position[1]),this.context.lineTo(n.b.position[0],n.b.position[1]),this.context.lineTo(n.c.position[0],n.c.position[1]),this.context.closePath(),this.context.strokeStyle=s,this.context.fillStyle=s,this.context.stroke(),this.context.fill()
return this},FSS.WebGLRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.vertices=null,this.lights=null
var t={preserveDrawingBuffer:!1,premultipliedAlpha:!0,antialias:!0,stencil:!0,alpha:!0}
if(this.gl=this.getContext(this.element,t),this.unsupported=!this.gl,this.unsupported)return"WebGL is not supported by your browser."
this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.DEPTH_TEST),this.setSize(this.element.width,this.element.height)},FSS.WebGLRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.WebGLRenderer.prototype.getContext=function(t,e){var i=!1
try{if(!(i=t.getContext("experimental-webgl",e)))throw"Error creating WebGL context."}catch(t){console.error(t)}return i},FSS.WebGLRenderer.prototype.setSize=function(t,e){if(FSS.Renderer.prototype.setSize.call(this,t,e),!this.unsupported)return this.element.width=t,this.element.height=e,this.gl.viewport(0,0,t,e),this},FSS.WebGLRenderer.prototype.clear=function(){if(FSS.Renderer.prototype.clear.call(this),!this.unsupported)return this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this},FSS.WebGLRenderer.prototype.render=function(t){if(FSS.Renderer.prototype.render.call(this,t),!this.unsupported){var e,i,r,n,s,o,a,h,l,u,f,c,S,d,p,g=!1,m=t.lights.length,F=0
if(this.clear(),this.lights!==m){if(this.lights=m,!(this.lights>0))return
this.buildProgram(m)}if(this.program){for(e=t.meshes.length-1;e>=0;e--)i=t.meshes[e],i.geometry.dirty&&(g=!0),i.update(t.lights,!1),F+=3*i.geometry.triangles.length
if(g||this.vertices!==F){this.vertices=F
for(h in this.program.attributes){for(u=this.program.attributes[h],u.data=new FSS.Array(F*u.size),S=0,e=t.meshes.length-1;e>=0;e--)for(i=t.meshes[e],r=0,n=i.geometry.triangles.length;r<n;r++)for(s=i.geometry.triangles[r],d=0,p=s.vertices.length;d<p;d++){switch(vertex=s.vertices[d],h){case"side":this.setBufferData(S,u,i.side)
break
case"position":this.setBufferData(S,u,vertex.position)
break
case"centroid":this.setBufferData(S,u,s.centroid)
break
case"normal":this.setBufferData(S,u,s.normal)
break
case"ambient":this.setBufferData(S,u,i.material.ambient.rgba)
break
case"diffuse":this.setBufferData(S,u,i.material.diffuse.rgba)}S++}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,u.data,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(u.location),this.gl.vertexAttribPointer(u.location,u.size,this.gl.FLOAT,!1,0,0)}}for(this.setBufferData(0,this.program.uniforms.resolution,[this.width,this.height,this.width]),o=m-1;o>=0;o--)a=t.lights[o],this.setBufferData(o,this.program.uniforms.lightPosition,a.position),this.setBufferData(o,this.program.uniforms.lightAmbient,a.ambient.rgba),this.setBufferData(o,this.program.uniforms.lightDiffuse,a.diffuse.rgba)
for(l in this.program.uniforms)switch(u=this.program.uniforms[l],c=u.location,f=u.data,u.structure){case"3f":this.gl.uniform3f(c,f[0],f[1],f[2])
break
case"3fv":this.gl.uniform3fv(c,f)
break
case"4fv":this.gl.uniform4fv(c,f)}}return this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertices),this}},FSS.WebGLRenderer.prototype.setBufferData=function(t,e,i){if(FSS.Utils.isNumber(i))e.data[t*e.size]=i
else for(var r=i.length-1;r>=0;r--)e.data[t*e.size+r]=i[r]},FSS.WebGLRenderer.prototype.buildProgram=function(t){if(!this.unsupported){var e=FSS.WebGLRenderer.VS(t),i=FSS.WebGLRenderer.FS(t),r=e+i
if(!this.program||this.program.code!==r){var n=this.gl.createProgram(),s=this.buildShader(this.gl.VERTEX_SHADER,e),o=this.buildShader(this.gl.FRAGMENT_SHADER,i)
if(this.gl.attachShader(n,s),this.gl.attachShader(n,o),this.gl.linkProgram(n),!this.gl.getProgramParameter(n,this.gl.LINK_STATUS)){var a=this.gl.getError(),h=this.gl.getProgramParameter(n,this.gl.VALIDATE_STATUS)
return console.error("Could not initialise shader.\nVALIDATE_STATUS: "+h+"\nERROR: "+a),null}return this.gl.deleteShader(o),this.gl.deleteShader(s),n.code=r,n.attributes={side:this.buildBuffer(n,"attribute","aSide",1,"f"),position:this.buildBuffer(n,"attribute","aPosition",3,"v3"),centroid:this.buildBuffer(n,"attribute","aCentroid",3,"v3"),normal:this.buildBuffer(n,"attribute","aNormal",3,"v3"),ambient:this.buildBuffer(n,"attribute","aAmbient",4,"v4"),diffuse:this.buildBuffer(n,"attribute","aDiffuse",4,"v4")},n.uniforms={resolution:this.buildBuffer(n,"uniform","uResolution",3,"3f",1),lightPosition:this.buildBuffer(n,"uniform","uLightPosition",3,"3fv",t),lightAmbient:this.buildBuffer(n,"uniform","uLightAmbient",4,"4fv",t),lightDiffuse:this.buildBuffer(n,"uniform","uLightDiffuse",4,"4fv",t)},this.program=n,this.gl.useProgram(this.program),n}}},FSS.WebGLRenderer.prototype.buildShader=function(t,e){if(!this.unsupported){var i=this.gl.createShader(t)
return this.gl.shaderSource(i,e),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)?i:(console.error(this.gl.getShaderInfoLog(i)),null)}},FSS.WebGLRenderer.prototype.buildBuffer=function(t,e,i,r,n,s){var o={buffer:this.gl.createBuffer(),size:r,structure:n,data:null}
switch(e){case"attribute":o.location=this.gl.getAttribLocation(t,i)
break
case"uniform":o.location=this.gl.getUniformLocation(t,i)}return s&&(o.data=new FSS.Array(s*r)),o},FSS.WebGLRenderer.VS=function(t){return["precision mediump float;","#define LIGHTS "+t,"attribute float aSide;","attribute vec3 aPosition;","attribute vec3 aCentroid;","attribute vec3 aNormal;","attribute vec4 aAmbient;","attribute vec4 aDiffuse;","uniform vec3 uResolution;","uniform vec3 uLightPosition[LIGHTS];","uniform vec4 uLightAmbient[LIGHTS];","uniform vec4 uLightDiffuse[LIGHTS];","varying vec4 vColor;","void main() {","vColor = vec4(0.0);","vec3 position = aPosition / uResolution * 2.0;","for (int i = 0; i < LIGHTS; i++) {","vec3 lightPosition = uLightPosition[i];","vec4 lightAmbient = uLightAmbient[i];","vec4 lightDiffuse = uLightDiffuse[i];","vec3 ray = normalize(lightPosition - aCentroid);","float illuminance = dot(aNormal, ray);","if (aSide == 0.0) {","illuminance = max(illuminance, 0.0);","} else if (aSide == 1.0) {","illuminance = abs(min(illuminance, 0.0));","} else if (aSide == 2.0) {","illuminance = max(abs(illuminance), 0.0);","}","vColor += aAmbient * lightAmbient;","vColor += aDiffuse * lightDiffuse * illuminance;","}","vColor = clamp(vColor, 0.0, 1.0);","gl_Position = vec4(position, 1.0);","}"].join("\n")},FSS.WebGLRenderer.FS=function(t){return["precision mediump float;","varying vec4 vColor;","void main() {","gl_FragColor = vColor;","}"].join("\n")},FSS.SVGRenderer=function(){FSS.Renderer.call(this),this.element=document.createElementNS(FSS.SVGNS,"svg"),this.element.setAttribute("xmlns",FSS.SVGNS),this.element.setAttribute("version","1.1"),this.element.style.display="block",this.setSize(300,150)},FSS.SVGRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.SVGRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.setAttribute("width",t),this.element.setAttribute("height",e),this},FSS.SVGRenderer.prototype.clear=function(){FSS.Renderer.prototype.clear.call(this)
for(var t=this.element.childNodes.length-1;t>=0;t--)this.element.removeChild(this.element.childNodes[t])
return this},FSS.SVGRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t)
var e,i,r,n,s,o
for(e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)n=i.geometry.triangles[r],n.polygon.parentNode!==this.element&&this.element.appendChild(n.polygon),s=this.formatPoint(n.a)+" ",s+=this.formatPoint(n.b)+" ",s+=this.formatPoint(n.c),o=this.formatStyle(n.color.format()),n.polygon.setAttributeNS(null,"points",s),n.polygon.setAttributeNS(null,"style",o)
return this},FSS.SVGRenderer.prototype.formatPoint=function(t){return this.halfWidth+t.position[0]+","+(this.halfHeight-t.position[1])},FSS.SVGRenderer.prototype.formatStyle=function(t){var e="fill:"+t+";"
return e+="stroke:"+t+";"}
var AnimatedTriangles=function(){function t(t,e,i){function r(){v=new FSS.WebGLRenderer,x=new FSS.CanvasRenderer,w=new FSS.SVGRenderer,n(C.renderer)}function n(t){switch(g&&P.removeChild(g.element),t){case A:g=v
break
case R:g=x
break
case V:g=w}g.setSize(E.offsetWidth,E.offsetHeight),P.appendChild(g.element)}function s(){m=new FSS.Scene}function o(){m.remove(F),g.clear(),b=new FSS.Plane(d.width*g.width,d.height*g.height,d.slices),y=new FSS.Material(d.ambient,d.diffuse),F=new FSS.Mesh(b,y),m.add(F)}function a(){g.clear(),light=new FSS.Light(p.ambient,p.diffuse),light.ambientHex=light.ambient.format(),light.diffuseHex=light.diffuse.format(),light.setPosition(p.xPos,p.yPos,p.zOffset),m.add(light),p.proxy=light,p.pickedup=!0,p.currIndex++}function h(t,e){g.setSize(t,e),FSS.Vector3.set(L,g.halfWidth,g.halfHeight),o()}function l(){u(),requestAnimationFrame(l)}function u(){g.render(m)}function f(){window.addEventListener("resize",c),E.addEventListener("mousemove",S)}function c(t){h(E.offsetWidth,E.offsetHeight),u()}function S(t){p.pickedup&&(p.xPos=t.x-g.width/2,p.yPos=g.height/2-t.y,p.proxy.setPosition(p.xPos,p.yPos,p.proxy.position[2]))}var d={width:1.2,height:1.2,slices:600,ambient:"#555555",diffuse:"#FFFFFF"}
i.mesh&&(d=Object.assign({},d,i.mesh))
var p={count:1,xPos:0,yPos:200,zOffset:100,ambient:"#000000",diffuse:"#FF0000",pickedup:!0,proxy:!1,currIndex:0}
i.light&&(p=Object.assign({},LiGHT,i.light))
var g,m,F,b,y,v,x,w,A="webgl",R="canvas",V="svg",C={renderer:i.renderer||R},L=FSS.Vector3.create(),E=document.getElementById(t),P=document.getElementById(e)
!function(){r(),s(),o(),a(),f(),h(E.offsetWidth,E.offsetHeight),l()}()}return{start:t,renderers:{WEBGL:"webgl",CANVAS:"canvas",SVG:"svg"}}}()
