var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page.
* 后台应用运行端口指定为 4000
b. 提供一个用户注册的接口
a) path 为: /register
b) 请求方式为: POST
c) 接收 username 和 password 参数
d) admin 是已注册用户
e) 注册成功返回: {code: 0, data: {_id: 'abc', username: ‘xxx’, password:’123’}
f) 注册失败返回: {code: 1, msg: '此用户已存在'}
*
*/
// post -> body
router.post('/register', function(req,res){
  console.log("Register router is called")
  const {username,password} = req.body;
  if(username==='admin'){
    res.send({code: 1, msg: 'Username Already Exists'});
  }else{
    res.send({code: 0, data: {_id: 'abc', username:username, password:password}});
  }
})


module.exports = router;
