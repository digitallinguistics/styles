'use strict';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i['return'])_i['return']()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr)){return arr}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i)}else{throw new TypeError('Invalid attempt to destructure non-iterable instance')}}}();const nav=document.getElementById('nav');const patterns=document.getElementById('patterns');const template=document.getElementById('template');function loadExample(_ref){var _ref2=_slicedToArray(_ref,2);let pattern=_ref2[0],description=_ref2[1];return fetch(`examples/${pattern}.html`).then(res=>res.text()).then(text=>renderTemplate(pattern,description,text))}function renderTemplate(pattern,description,html){const clone=template.content.cloneNode(true);const markup=clone.querySelector('.markup');const regexp=new RegExp(`class='?${pattern}`);const section=clone.querySelector('.pattern');markup.textContent=html;section.id=pattern;section.classList.add(`${pattern}-example`);const opt=document.createElement('option');opt.value=pattern;if(regexp.test(html))pattern=`.${pattern}`;else pattern=`&lt;${pattern}&gt;`;opt.innerHTML=pattern;clone.querySelector('.pattern-title > code').innerHTML=pattern;clone.querySelector('.pattern-description').innerHTML=description;clone.querySelector('.rendered').innerHTML=html;nav.appendChild(opt);patterns.appendChild(clone);hljs.highlightBlock(markup)}Object.entries(examples).map(loadExample).reduce((prev,current)=>prev.then(current),Promise.resolve()).catch(console.error);const colors=document.getElementById('colors');const copyHex=target=>{const selection=window.getSelection();const range=new Range;range.selectNodeContents(target);selection.removeAllRanges();selection.addRange(range);document.execCommand('copy');selection.removeAllRanges()};colors.addEventListener('click',ev=>{if(ev.target.classList.contains('swatch'))copyHex(ev.target)});nav.addEventListener('change',ev=>{window.location=`#${ev.target.value}`});
