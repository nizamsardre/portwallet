

const axios = require('axios');
const crypto = require('crypto');
const qs = require('qs');


const md5sum = crypto.createHash('md5');

  let post_body = {};

  // post_body['app_key'] = "9a78d14d58483269577bf112dd7a57e3";
  // post_body['timestamp'] =  Date.now();
  // post_body['token'] = md5sum.update( '1e2db2824da38d96082a7f521ac9b15c' +post_body['timestamp']).digest('hex') ;
  // post_body['amount'] = 100.26;
  post_body['call'] = 'gen_invoice';
  post_body['currency'] = "BDT";
  post_body['redirect_url'] = "https://476a00fea8a8.ngrok.io";
  post_body['product_name'] = "BDT";
  post_body['product_description'] = "afd@ncn.co";
  post_body['state'] = "BDT";
  post_body['email'] = "afd@ncn.co";
  post_body['name'] = "afd@ncn.co";
  post_body['country'] = "BD";
  post_body['phone'] = "+881234567890";
  post_body['city'] = "BDT";
  post_body['zipcode'] = "1234";
  post_body['address'] = "https://476a00fea8a8.ngrok.io";


  let ipn_body = {};
  ipn_body['app_key'] = "9a78d14d58483269577bf112dd7a57e3";
  ipn_body['timestamp'] =  Date.now();
  ipn_body['token'] = md5sum.update( '1e2db2824da38d96082a7f521ac9b15c' +ipn_body['timestamp']).digest('hex') ;
  ipn_body['amount'] = 100.26;
  ipn_body['call'] = "ipn_validate";
  ipn_body['invoice'] =  '85EF827D83EB7931';

  const url = 'https://api-sandbox.portwallet.com/api/v1/';

  async function start() {
    try{
        
        const response = await axios(url, {method: 'POST', data: qs.stringify(ipn_body)});  //qs.stringify(post_body)


        console.log(response.data);
        
      } catch(error){
        console.log(error) ;
    }
  }
  
  start();
