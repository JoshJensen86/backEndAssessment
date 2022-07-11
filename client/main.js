const complimentBtn = document.getElementById("complimentButton")
const getFortuneBtn = document.getElementById("fortuneButton")


const baseURL = "http://localhost:4000"

const usersCallback = ({ data: users }) => displayUsers(users)
const errCallback = err => console.log(err)

const getAllUsers = () => axios.get(baseURL).then(usersCallback).catch(errCallback)
const createUser = body => axios.post(baseURL, body).then(usersCallback).catch(errCallback)
const deleteUser = id => axios.delete(`${baseURL}/${id}`).then(usersCallback).catch(errCallback)
const updateUser = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(usersCallback).catch(errCallback)




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

function submitHandler (e) {
    e.preventDefault()

    let name = document.querySelector ('#register-name')
    let email = document.querySelector ('#register-email')

    let bodyObj = {
        name: name.value,
        email: email.value
    }

    createUser(bodyObj)
    name.value = ''
    email.value = ''
}

form.addEventListener('submit', submitHandler)
complimentBtn.addEventListener('click', getCompliment)
getFortuneBtn.addEventListener('click', getFortune)

getAllUsers()





