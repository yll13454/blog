var APP_ID = 'bhzxulk4n5xqyTRGetq904rM-gzGzoHsz';
var APP_KEY = 'etcATklGud5bnDmGPNNkH8XE';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
let myForm = document.querySelector('#postMessage');
let ol = document.createElement('ol');
myForm.append(ol);
myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let name = myForm.querySelector('input[name=lastid]').value;
  let content = myForm.querySelector('input[name=content]').value;

  // testObject.set('words', 'Hello world!');
  testObject.save({
    name:name,
    content:content
  }).then( (testObject) =>{
    console.log(testObject.attributes.name)
    let name = testObject.attributes.name;
    let content = testObject.attributes.content;
    let li = document.createElement('li');
    li.innerHTML = `${name}:${content}`;
    myForm.querySelector('ol').append(li);
    console.log('保存成功。')
    myForm.reset();
  },function(error){
    console.log(error);
  }).then(()=>{},(error)=>{console.log(error)})
})

var query = new AV.Query('TestObject');
query.find().then(function (todos) {
  let array = todos.map((items) => items.attributes);
  array.forEach(element => {
    let li = document.createElement('li');
    li.innerHTML = `${element.name}:${element.content}`;
    myForm.querySelector('ol').append(li);
  });
}).then(() => { }, (error) => { console.log(error) })