// Функция для чтения cookie
function readCookie(name) {var name_cook = name+"=";var spl = document.cookie.split(";");for(var i=0; i<spl.length; i++) {var c = spl[i];while(c.charAt(0) == " ") {c = c.substring(1, c.length);}if(c.indexOf(name_cook)==0){return c.substring(name_cook.length, c.length);}}return null;}
// Превести hex в rgb
function hexToRgb(hex) {var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; hex = hex.replace(shorthandRegex, function(m, r, g, b) {return r + r + g + g + b + b;}); var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex); return result ? [ parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16) ] : null;}
// Превратить размер в процент
function turn_percent(val,precent){return Number(val) / 100 * Number(precent);}
// Превратить строку в число
function turn_number(val){return  Number(val.replace(/[^\d]/g, '')) ;}
// Функция перевода css в массив
const parseValue = str => {
  const values = str.match(/[^\s,]+/g) || [];
  return values.length > 1 ? values : values[0];
};
const parseStyleStr = str =>
  str.split(';').reduce((acc, n) => {
    const [ k, v ] = n.split(':').map(n => n.trim());
    if (k && v) {
      const f = [...v.matchAll(/([\w]+?)\((.+?)\)/g)];
      acc[k] = f.length
        ? Object.fromEntries(f.map(n => [ n[1], parseValue(n[2]) ]))
        : parseValue(v);
    }

    return acc;
  }, {});
//Функция генераций строки для css свойства translate
function str_transform(arr){var css_tran = 'translate('+arr['transform']['translate'][0]+', '+arr['transform']['translate'][1]+') scale('+arr['transform']['scale'][0]+','+arr['transform']['scale'][1]+') skew('+arr['transform']['skew'][0]+', '+arr['transform']['skew'][1]+') rotate('+arr['transform']['rotate']+')';return css_tran ;}
// Функция поиска в многомерном ассоциативном массиве 
function get_arr(arr,keys=[]){if(keys.length === 0) return arr; for (let k of keys) {if(arr[k]) {return search_fun(arr[k], keys.slice(1))} else {return false}}} 
// Функция изменения значения в массиве
function change_arr(source, path, val=0) {const target = _.cloneDeep(source);_.set(target, path, val);return target;}
   
   
   
   
