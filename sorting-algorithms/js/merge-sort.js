function verifyInviteCode(code){
  var formData={"code":code};$.ajax({type:"POST",dataType:"json",data:formData,url:'/api/invite/verify',success:function(response){console.log(response)},error:function(response){console.log(response)}})}function makeInviteCode(){$.ajax({type:"POST",dataType:"json",url:'/api/invite/how/to/generate',success:function(response){console.log(response)},error:function(response){console.log(response)}})}


  "data": {
        "data": "Va beqre gb trarengr gur vaivgr pbqr, znxr n CBFG erdhrfg gb /ncv/vaivgr/trarengr",
        "enctype": "ROT13"
    }

