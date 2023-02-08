"use strict";

// without closure

function addElement(el, cb, text) {
  let element = document.createElement(String(el));
  if(text)element.textContent = String(text);
  document.body.append(element);
  cb(element);
}

const callback = function (elem) {
  elem.style.backgroundColor = "red";
};

addElement("div", callback,"hello world");


//with closure

function createElement(el,text){
    let element = document.createElement(String(el));
    if(text)element.textContent = String(text);
    document.body.append(element);
    return function(cb){
        cb(element)
    }
}


createElement("button","click")(callback)