const Storage_Key = 'AdminLoginInfo';
export function setStorage(data){
    localStorage.setItem(Storage_Key,JSON.stringify(data));
}
export function getStorage(){
    if(localStorage.getItem(Storage_Key)){
        return JSON.parse(localStorage.getItem(Storage_Key))
    }else{return false}
}