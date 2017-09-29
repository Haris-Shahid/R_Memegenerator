import { username , password } from './secret' ;

export const RECEIVE_MEMES = "RECEIVE_MEMES" ;
export const NEW_MEME = "NEW_MEME" ;

function receiveMemes(json){
    const { memes } = json.data ;
    return{
        type: RECEIVE_MEMES ,
        memes
    }
}

function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
                .then( res => res.json())
}

export function fetchMemes(){
    return function(dispatch){
        return fetchMemesJson()
                .then(json => dispatch(receiveMemes(json)))
    }
}

export function newMeme(meme){
    return{
        type: NEW_MEME ,
        meme
    }
}

function postmemejson(params){
    params["username"] = username ;
    params["password"] = password ;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' +encodeURIComponent(params[key])
    }).join('&');

     // console.log('bodyparams', bodyParams);

    return fetch('https://api.imgflip.com/caption_image' , {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(res => res.json());
}

export function createMeme(new_meme_obj){
    return function(dispatch){
        return postmemejson(new_meme_obj).then(new_meme => dispatch(newMeme(new_meme)))
    }
}