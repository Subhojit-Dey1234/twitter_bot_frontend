import instance from "../../axiosInstance"

function getTwitterId(id){
    instance.get(`https://api.twitter.com/2/tweets/1625356051846684674?tweet.fields=attachments,public_metrics,author_id,in_reply_to_user_id,conversation_id&expansions=attachments.media_keys&media.fields=variants&user.fields=username`)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}


export default getTwitterId