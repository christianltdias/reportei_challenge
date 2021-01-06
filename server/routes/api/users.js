const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await loadPostsCollection();
    await users.find({}).toArray(function (error, user) {
        if (error) throw error;

        res.send(user);
    });
});

router.get('/:userID', async (req, res) => {
    const user = await getUserByUserID(req.params.userID);
    res.send(user);
});

router.put('/:userID', async (req, res) => {
    const users = await loadPostsCollection();
    await users.updateOne({ userID: req.params.userID }, {
        $set: {
            nome: req.body.nome,
            userID: req.body.userID,
            updatesPerDay: req.body.updatesPerDay,
            stories: req.body.stories,
            followers: req.body.followers
        },
    }).then(result => {
        res.status(200).send();
    }).catch(error => {
        res.status(400).send();
    })
});


router.post('/', async (req, res) => {
    const users = await loadPostsCollection();
    const user = await getUserByUserID(req.body.userID);
    if (!user) {
        await users.insertOne({
            nome: req.body.nome,
            userID: req.body.userID,
            updatesPerDay: req.body.updatesPerDay,
            stories: req.body.stories,
            followers: req.body.followers
        });
        res.status(201).send();
    }
    else {
        res.send(user);

    }
})

router.delete('/:userID', async (req, res) => {
    const users = await loadPostsCollection();
    await users.deleteOne({
        userID: req.params.userID
    });
    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
        ("mongodb+srv://root_user:root_pass@cluster0.ixxtf.mongodb.net/reportei_test?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

    return client.db('reportei_test').collection('users');
}

async function getUserByUserID(userID) {
    const users = await loadPostsCollection();

    return new Promise((resolve, reject) => {
        users.findOne({ userID })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
    })

}

module.exports = router;