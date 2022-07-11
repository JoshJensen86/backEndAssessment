

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
getFortune: (req, res) => {
        const fortune = ["You will live a long life filled with joy","Over the horizon something comes", "when the clouds gather, move away haha", "may the winds ever be at your back", "A coffee a day keeps the strangers away:)"];

        let fortuneIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[fortuneIndex];

        res.status(200).send(randomFortune);
    },
    
    
    getUsers: (req, res) => res.status(200).send(users),

    deleteUser: (req, res) => {
        let index = users.findIndex(elem => elem.id === +req.params.id)
        users.splice(index, 1)
        res.status(200).send(users)
    },
    createUser: (req, res) => {
        let { name, email } = req.body
        let newUser = {
            id: globalId,
            name, 
            email
        }
        users.push(newUser)
        res.status(200).send(users)
        globalId++
    },


}
 

