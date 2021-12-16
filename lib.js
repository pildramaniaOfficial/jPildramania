//Welcome to _print(_upper('pildramania library'))
console.log('library working')


//Functions , Classes , Objects , Variable , etc.
export function _lenc(a) {
      return a.length  
}
export function _t (t) {
      console.table(t)
}
export function _half (num) {
      return num / 2
}
export function _print (string) {
      console.log(string)
}
export function _rnum ( num ) {
      return Math.floor( Math.random() * parseInt(num))
}
export function _dbl ( num ) {
      return num * 2
}
export function _add ( num1 , num2 ) {
      return num1 + num2
}
export function _sub ( num1 , num2 ) {
      return num1 - num2
}
export function _mult ( num1 , num2 ) {
      return num1 * num2
}
export function _div ( num1 , num2 ) {
      return num1 / num2
}
export function _rect ( l , b ) {
      return l * b
}
export function _square ( s ) {
      return s * s
}
export var tri = 180;
export function _calctri ( a , b , c) {
      var added = a + b + c;
      var x = 180 / added;
      var angle_a = a * x;
      var angle_b = b * x;
      var angle_c = c * x;
      var angles = [['angle 1' , angle_a], ['angle 2' , angle_b],['angle 3' , angle_c], ];
      return angles
}
export const days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday']
export const months = [['January' , 31] , ['February' , 28 , 29] , ['March' , 31] , ['April' , 30] , ['May' , 31 ] , ['June' , 30] ,
['July' , 31] , ['August' , 31] , ['September' , 30] , ['October' , 31] , ['November' ,  30] , ['December' , 31]]
export const year = 365
export const lyear = 366
export function _arrayD(int) {
      for(let i = 0; i < int.length; i++ ) { console.log(int[i]) }
}
export function _sethtml( select , a ) {
      document.querySelector(select).innerHTML = a
}
export function _setcolor (select , a) {
      document.querySelector(select).style.color = a
}
export function _setBackgroundColor( select , a ) {
      document.querySelector(select).style.backgroundColor = a
}
export function _setleftMargin( select , a ) {
      document.querySelector(select).style.marginLeft = a
}
export function _setrightMargin( select , a ) {
      document.querySelector(select).style.marginRight = a
}
export function _settopMargin( select , a ) {
      document.querySelector(select).style.marginTop = a
}
export function _setbottomMargin( select , a ) {
      document.querySelector(select).style.marginBottom = a
}
export  function _a (a) {
      alert(a)
}
export function _upper(ar) {
      return ar.toUpperCase()
}
export function _lower(ar) {
      return ar.toLowerCase()
}
export var rem = 16
export var em = 15.94
export function _setpadding( ar , ar2 ) {
      document.querySelector(ar).style.paddingTop = ar2
      document.querySelector(ar).style.paddingBottom = ar2
      document.querySelector(ar).style.paddingRight= ar2
      document.querySelector(ar).style.paddingLeft = ar2
}
export function _setfontFamily( ar , ar2) {
      document.querySelector(ar).style.fontFamily = ar2
}
export var singleDigit = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0]
export function _setBorderRadius( s , ar ) {
      document.querySelector(s).style.borderRadius = ar
} 
export function _setdisplay( s , ar ) {
      document.querySelector(s).style.display = ar
} 
export function _setpos( s , ar ) {
      document.querySelector(s).style.position = ar
} 
export function _click( s , arg) {
      document.querySelector(s).addEventListener('click' , arg)
}
export function _show( s ) {
      document.querySelector(s).style.display = 'block'
}
export function _hide( s ) {
      document.querySelector(s).style.display = 'none'
}
export function _inc( int ) {
       return int++
}
export function _clickshow( s , ar) {
      document.querySelector(s).addEventListener('click' , function() {
            document.querySelector(ar).style.display = 'block'
      })
}
export function _clickhide( s , ar) {
      document.querySelector(s).addEventListener('click' , function() {
            document.querySelector(ar).style.display = 'none'
      })
}
export var monkey = '1929 code'

//to fetch files in json format
export function _fjson ( link ) {
      return fetch(link).then((text) => {
            return text.json()
      }).then((data) => {
            return data
      });
      
}

//to fetch files in text / csv format
export function _ftext ( link ) {
      return fetch(link).then((text) => {
            return text.text()
      }).then((data) => {
            return data
      });
      
}

//DOM prompt = prompt(var)
export function _p(val) {
      //var to store data
      var value = prompt(val)
      return value
}

//Function to find square root
export function _sqrt(val) {
      return Math.sqrt(val)
}

//Set Shadow
export function _setshadow(s, val) {
      document.querySelector(s).style.boxShadow = val
}
//Set Text Shadow
export function _setTextShadow(s, val) {
      document.querySelector(s).style.boxShadow = val
}

//Set Border Width
export function _setBorderWidth(s, val) {
      document.querySelector(s).style.borderWidth = val
}

//Set border color
export function _setBorderColor(s, val) {
      document.querySelector(s).style.borderColor = String(val)
}

//Set border style
export function _setBorderStyle(s, val) {
      document.querySelector(s).style.borderStyle = val
}

//Range
// export function _range(newArray) {
      // var sortedArray = newArray.sort()
      // _print(sortedArray)
//      
      // console.log(Math.max(sortedArray))
// }

//New Text Node


//Set border
export function _setborder(s, arg) {
      document.querySelector(s).style.border = arg
}
export function _calcmode(mean, median) {
    return (3 * mean) - (2 * median)
}
