//islamic-services
//w4Uhdqqg23AYsv0L
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');


require('dotenv').config();









const uri = "mongodb+srv://islamic-services:w4Uhdqqg23AYsv0L@cluster0.wkobumr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run(){
  try{
    const servicesCollection = client.db("islamic-data-store").collection("servicesCollection")
    const scholarsCollection = client.db("islamic-data-store").collection("scholars")

    app.get("/services",async (req,res)=>{
      
      const query={}
      const cursor = await servicesCollection.find(query).toArray()
      res.send(cursor)

    })

app.get("/services/:id",async (req,res)=>{


  const id =req.params.id
  const query={_id: ObjectId(id)}
  const result=await servicesCollection.findOne(query)
  res.send(result)
  });


  app.get("/schalars",async (req,res)=>{
      
    const query={}
    const cursor = await scholarsCollection .find(query).toArray()
    res.send(cursor)

  });
  app.get("/schalars/:id",async (req,res)=>{
    console.log(req.params.id)
    const id=req.params.id
    const query={_id: ObjectId(id)}
    const result=await scholarsCollection.findOne(query)
  res.send(result)
    
  });

  }
  finally{

  }

}
run().catch(console.dir)





app.listen(port, () => {
  console.log("the  server ", port)
})
