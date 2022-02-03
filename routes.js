const express = require('express');
const router = express.Router();

const AlgoScript = require('./models/algoScript');
const AlgoStrategy = require('./models/algoStrategy');

// Algo Script
router.get('/algoScript', async (request, response) => {  // fetch
    const data = await AlgoScript.find();
    response.send(data);
});

router.get('/algoScript/:id', async (request, response) => {  // fetch by id
    const _id = request.params.id;
    const data = await AlgoScript.findById(_id);
    response.send(data);
});

router.post('/algoScript', async (request, response) => {    // insert
    const script = new AlgoScript(request.body)
    await script.save();
    response.send(script);
})

router.patch('/algoScript/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const script = await AlgoScript.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(script);
})

router.delete('/algoScript', async (request, response) => {  // delete
    const data = await AlgoScript.deleteMany({});
    response.send(data);
});

router.delete('/algoScript/:id', async (request, response) => {   // delete by id
    try{
        const _id = request.params.id;
        const script = await AlgoScript.findByIdAndDelete(_id);
        response.send(script);
    }catch (e){
        response.send(e);
    }
})

// Algo Strategy
router.get('/algoStrategy', async (request, response) => {  // fetch
    const data = await AlgoStrategy.find();
    response.send(data);
});

router.get('/algoStrategy/:id', async (request, response) => {  // fetch by id
    const _id = request.params.id;
    const data = await AlgoStrategy.findById(_id);
    response.send(data);
});

router.post('/algoStrategy', async (request, response) => {    // insert
    const strategy = new AlgoStrategy(request.body)
    strategy.save();
    response.send(strategy);
})

router.patch('/algoStrategy/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const strategy = await AlgoStrategy.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(strategy);
})

router.delete('/algoStrategy', async (request, response) => {  // delete
    const data = await AlgoStrategy.deleteMany({});
    response.send(data);
});

router.delete('/algoStrategy/:id', async (request, response) => {   // delete by id
    const _id = request.params.id;
    const strategy = await AlgoStrategy.findByIdAndDelete(_id);
    response.send(strategy);
})
module.exports = router;