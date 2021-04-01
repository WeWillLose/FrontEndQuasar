const numberRegexp = new RegExp('^[+-]?\\d+(\\.\\d+)?$');
const withoutSpacesRegexp = new RegExp(/^\S+$/);
const alphaWithRusExp = new RegExp(/^[a-zA-Zа-яА-Я]+$/);
const alphaExp = new RegExp(/^[a-zA-Z]+$/);
export default {
  alpha: ()=>{
    return (val) => alphaExp.test(val) || 'Поле может содержать только латинские буквы'
  },
  alphaWithRus: ()=>{
    return (val) => alphaWithRusExp.test(val) || 'Поле может содержать только буквы'
  },
  withoutSpaces: ()=>{
    return (val) => withoutSpacesRegexp.test(val) || 'Поле не должно содержать пробелы'
  },
  required: () => {
    return (val) => !!val || 'Поле обязательное'
  },
  username:()=> true,
  lengthLess: (len)=>{
    if(!!!len){
      console.warn("len in lengthLess is " + len)
    }
    return (val)=> val.length < len || `Поле должно быть меньше ${len} символов`
  },
  lengthGreater: (len)=>{
    if(!!!len){
      console.warn("len in lengthGreater is " + len)
    }
    return (val)=> val.length > len || `Поле должно быть больше ${len} символов`
  },
  lengthEquals: (len)=>{
    if(!!!len){
      console.warn("len in lengthEquals is " + len)
    }
    return (val)=> val.length === len || `Поле должно состоять из ${len} символов`
  },
  passwordLength: ()=>{
    return (val) => val.length >= 6 || 'Пароль должен быть больше 6 символов'
    },
  number:()=>{
    return (val)=> numberRegexp.test(val) || 'Поле должно быть числом'
  },
  numberLess:(max)=>{
    if(!!!max){
      console.warn("max in numberLess is " + max)
    }
    return (val)=> val < max || `Поле должно быть меньше чем ${max}`
  },
  numberGreater:(min)=>{
    if(!!!min){
      console.warn("min in numberGreater is " + min)
    }
    return (val)=>  val > min || `Поле должно быть больше чем ${min}`
  },
  numberBetween:(min,max)=>{
    if(!!!min){
      console.warn("min in numberBetween is " + min)
    }
    if(!!!max){
      console.warn("max in numberBetween is " + max)
    }
    return (val)=>  (val > min && val < max) || `Поле должно быть между ${min},${max}`
  },
  numberBetweenNotStrict:(min,max)=>{
    if(!!!min){
      console.warn("min in numberBetweenNotStrict is " + min)
    }
    if(!!!max){
      console.warn("max in numberBetweenNotStrict is " + max)
    }
    return (val)=>  (val >= min && val <= max) || `Поле должно быть между ${min},${max}`
  },
  numberBetweenNotStrictScore:(min,max)=>{
    if(!!!min){
      console.warn("min in numberBetweenNotStrict is " + min)
    }
    if(!!!max){
      console.warn("max in numberBetweenNotStrict is " + max)
    }
    return (val)=>  (val >= min && val <= max) || `Min ${min}, Max ${max}`
  },
}
