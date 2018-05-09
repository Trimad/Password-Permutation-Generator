//https://www.geeksforgeeks.org/print-all-combinations-of-given-length/

var list;
var button;
var sel;

var div1, div2;
var howMany;
var btnCopyTo;

function setup() {




  /* D I V   1 */
  div1 = select('#div1');
  div1.style('padding', '24px');

  sel = createSelect();
  sel.parent(div1);
  sel.option("0123456789");
  sel.option("0123456789abcdef");
  sel.option("0123456789ABCDEF");
  sel.option("abcdefghijklmnopqrstuvwxyz");
  sel.option("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  sel.option("0123456789abcdefghijklmnopqrstuvwxyz");
  sel.option("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  sel.option("0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()");
  sel.option("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()");
  /* D I V   2 */
  div2 = select('#div2');
  div2.style('padding', '24px');

  howMany = createInput('4');
  howMany.parent(div2);

  button = createButton('Generate');
  button.parent(div2);
  button.mousePressed(generate);
  /* D I V   3 */
  div3 = select('#div3');
  div3.style('padding', '24px');

  //list = createElement('textarea', '');
  list = select('#list');
  //list.parent(div3);
  //list.style('padding', '24px');
  list.style('width', "33%");
  list.style('height', "100%");

  btnCopy = select('#btnCopy');
  btnCopy.style('width', "33%");
  btnCopy.style('padding', '16px');
  //btnCopy.parent(div3);
  //btnCopyTo.mousePressed(myFunction);

}

function sayDone() {
  alert("You might want to grab yourself a cup of coffee.");
}

function generate() {
  list.value(permuteWrapper());
  if (howMany.value() >= 5) {
    sayDone();
  }

}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function permuteWrapper() {
  let temp = [];
  temp = sel.value().split("");
  let theList = [];
  permute(temp, howMany.value(), theList);
  return theList;
}

function permute(set, k, theList) {
  recurse(set, "", set.length, k, theList);
}

function recurse(set, prefix, n, k, theList) {
  if (k == 0) {
    append(theList, prefix);
    return;
  }

  for (let i = 0; i < n; ++i) {
    recurse(set, prefix + set[i], n, k - 1, theList);
  }

}
