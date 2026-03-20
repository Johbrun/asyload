console.log(1);
var f = document.createElement('iframe');
console.log(2);
f.style.display = 'none';
console.log(3);

var links = document.querySelectorAll('a');
console.log(links);
for (var i = 0; i < links.length; i++) {
  if (links[i].textContent.includes('Mon Profil')) {
    f.src = links[i].href;
    console.log("link : " + links[i].href);
    break;
  }
}

document.body.appendChild(f);

f.onload = function() {
  console.log("onload");
    setTimeout(function() {  
  var doc = f.contentDocument;
  console.log(doc);
  doc.getElementById('df_fldFieldEMPEMAIL').defaultValue = 'testtesteeeeeeeest@test.com';
  doc.getElementById('btnsave').click();
  }, 3000);
};
