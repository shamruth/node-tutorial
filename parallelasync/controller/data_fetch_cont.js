datamodel=require("../model/data_model")
UserProfile=datamodel.data.UserProfile;
ContinueWatching=datamodel.data.ContinueWatching;
Recomendation=datamodel.data.Recomendation
exports.fetchUserProfile=()=>
{
    return new Promise((resolve)=>
        {
            setTimeout(()=>resolve(UserProfile),500);
        });
}
exports.fetchContinueWatchin=()=>
{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(ContinueWatching),900)
    });
}
exports.fetchRecomendation=()=>
{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(Recomendation),200)
    });
}