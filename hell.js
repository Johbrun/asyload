var f = document.createElement('iframe');
f.style.display = 'none';

var links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  if (links[i].textContent.includes('Mon Profil')) {
    f.src = links[i].href;
    break;
  }
}

document.body.appendChild(f);

f.onload = function() {
    setTimeout(function() {  
  var doc = f.contentDocument;
  console.log(doc);
  doc.getElementById('df_fldFieldEMPEMAIL').defaultValue = 'testtesteeeeeeeest@test.com';
  doc.getElementById('btnsave').click();
  }, 3000);
};
