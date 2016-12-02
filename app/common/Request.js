/**
 * Created by mac on 16/11/25.
 */


const HOST = 'http://v.juhe.cn/toutiao/index';

export const requestNews = (type,success,fail)=>{
    let isOK;
    let url = HOST + '?key=89774f29309f7ce634816928e688f371&type='+type;
    fetch(url)
        .then((response)=>{
            if (response.ok) {
                isOk = true;
            } else {
                isOk = false;
            }
            return response.json();
        })
        .then((responseData)=>{
            if (isOk) {
                success(responseData);
            } else {
                fail(responseData);
            }
            console.log('responseData:'+responseData);
        })
        .catch((error) => {
            console.log('error。。:'+error);
        });
}

export const request = (type,success,fail) => {
    let isOk;
    let body = {key:'89774f29309f7ce634816928e688f371',
                type:type
                };

    fetch(HOST, {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    })
        .then((response) => {
            if (response.ok) {
                isOk = true;
            } else {
                isOk = false;
            }
            console.log(isOk);
            return response.json();
        })
        .then((responseData) => {

            if (isOk) {
                success(responseData);
            } else {
                fail(responseData);
            }
            console.log('responseData:'+responseData);
        })
        .catch((error) => {
            console.log('error。。:'+error);
        });
    
    }