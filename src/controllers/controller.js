const axios=require('axios');

const getSessionsByDistrict = async function(req,res)
{
    try
    {
        let distId=req.query.districtID;
        let date=req.query.date;
        let data=await axios.get('http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+distId+'&date='+date);
        res.status(200).send({status : true,data : data.data});    
    }
    catch(err)
    {
        res.status(500).send({status : false,msg : err});
    }
};

module.exports={getSessionsByDistrict};