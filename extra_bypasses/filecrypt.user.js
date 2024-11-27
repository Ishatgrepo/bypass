// ==UserScript==
// @name         Bypass-FileCrypt
// @version      1.3.9
// @description  Original script by StephenP: https://greasyfork.org/scripts/403170
// @author       StephenP
// @grant        GM.xmlHttpRequest
// @include      /filecrypt.(cc|co)/
// @run-at       document-start
// ==/UserScript==

// ----- Bypass FileCrypt( imported from https://greasyfork.org/scripts/403170) -----
(function() {
    'use strict';
    if (/filecrypt.(cc|co)/.test(window.location.href)) {
        window.addEventListener('DOMContentLoaded', function() {
            ////-----imported from https://greasyfork.org/scripts/403170 -----
            (function () {
              var usenetAd=document.getElementsByTagName('A');//come on, why should anyone pay for access to pirated content?
              for(var i=0;i<usenetAd.length;i++){
                if(usenetAd[i].href.includes('/pink/')){
                  usenetAd[i].parentNode.remove();
                  i=usenetAd.length;
                }
              }  
              if(document.location.href.includes("/Link/")){
                getSingleLink();
              }
              else if(document.location.href.includes("/Container/")){
                let art=document.getElementsByClassName("download")[0].parentNode.parentNode.parentNode.parentNode;
                let load=document.createElement("DIV");
                load.id="dcryptLoadMsg";
                load.style.marginBottom="2em";
                load.textContent="Loading decrypted links list from dcrypt.it...";
                art.parentNode.insertBefore(load,art);
                getCNL();
              }
            })();
            function getSingleLink(){
              if(document.body.getElementsByTagName("SCRIPT").length==0){
                window.stop();
                if(body.children.length>0){
                  const a=document.body.innerHTML.lastIndexOf("http");
                  top.location.href=document.body.innerHTML.substring(a,document.body.innerHTML.indexOf('id=',a)+43).replace('&amp;', '&');
                }
                else{
                  GM.xmlHttpRequest({
                    method: "GET",
                    url: document.location.href,
                    onload: function(response) {
                      const a=response.responseText.lastIndexOf("http");
                      top.location.href=response.responseText.substring(a,response.responseText.indexOf('id=',a)+43);
                    }
                  });
                }
              }
            }
            function getCNL(){
              var dlcButton=document.getElementsByClassName("dlcdownload");
              if(dlcButton.length>0){
                var inputs=document.getElementsByTagName('INPUT');
                var dlcId;
                /*for(var i=0;i<inputs.length;i++){
                  if(inputs[i].getAttribute('name')=='hidden_cnl_id'){
                    dlcId=inputs[i].getAttribute('value');
                    i=inputs.length;
                  }
                }*/ //left for reference
                dlcId=document.getElementsByClassName("dlcdownload")[0].attributes["onclick"].nodeValue.split('\'')[1];
                //console.log('dlcId='+dlcId);
                GM.xmlHttpRequest({
                  method: "GET",
                  url: "https://"+document.location.hostname+"/DLC/"+dlcId+".dlc",
                  onload: function(response) {
                    dcrypt(response.responseText);
                  },
                  onerror: function(response) {
                  }
                });
              }
              else{
                document.getElementById("dcryptLoadMsg").textContent="No DLC file is available for bulk download. You'll have to click on the download buttons to retrieve the links. This operation isn't currently automated by Bypass FileCrypt script.";
                document.getElementById("dcryptLoadMsg").style.color="red";
              }
            }
            function dcrypt(content){
              //console.log(content);
              GM.xmlHttpRequest({
                method: "POST",
                url: "http://dcrypt.it/decrypt/paste",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                data: "content="+encodeURIComponent(content),
                onload: function(response) {
                  //console.log(response);
                  var obj=JSON.parse(response.response);
                  //console.log(obj);
                  var finalLinksDiv=document.createElement("DIV");
                  finalLinksDiv.style.backgroundColor="rgba(0, 0, 0, 0.5)";
                  finalLinksDiv.style.borderRadius="10px";
                  finalLinksDiv.style.padding="1em";
                  finalLinksDiv.style.marginTop="1em";
                  finalLinksDiv.style.color="#4FCA1B";
                  finalLinksDiv.style.zIndex="10";
                  finalLinksDiv.style.position="relative";
                  finalLinksDiv.style.marginBottom="1em";
                  finalLinksDiv.style.display = "inline-block";
                  let a=document.createElement("SPAN");
                  a.textContent="Decrypted links:";
                  finalLinksDiv.appendChild(a);
                  finalLinksDiv.appendChild(document.createElement("BR"));
                  finalLinksDiv.appendChild(document.createElement("BR"));
                  try{
                    for (var link of obj.success.links) {
                      console.log(link);
                      let b=document.createElement("A");
                      b.textContent=link;
                      b.href=link;
                      b.style.color="#156594";
                      finalLinksDiv.appendChild(b);
                      finalLinksDiv.appendChild(document.createElement("BR"));
                    }
                  }
                  catch(e){
                    console.log(e);
                    document.getElementById("dcryptLoadMsg").textContent="Error while reading the decrypted links from dcrypt.it. You can still use the single uncrypted links below.";
                  }
                  console.log(finalLinksDiv);
                  document.getElementById("dcryptLoadMsg").replaceWith(finalLinksDiv);
                  //Do you like it now? It's not hidden anymore :P
                  const config = { attributes: true, childList: false, subtree: false };
                  const callback = function(mutationList, observer) {
                      for (const mutation of mutationList) {
                          console.log(mutation);
                          mutation.target.removeAttribute(mutation.attributeName);
                          
                      }
                  };
                  const observer = new MutationObserver(callback);
                  observer.observe(finalLinksDiv, config);
                  //
                },
                onerror: function(response) {
                  document.getElementById("dcryptLoadMsg").textContent="Error while retrieving the links from dcrypt.it. You can still use the single uncrypted links below.";
                }
              });
            }
          // ------------------------
      });
    }

})();

// ----- ----- -----
