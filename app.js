const express = require('express');
const server = express();
const port = 4000;
const bodyparser=require ('body-parser')
server.use(bodyparser.json()); 
const students = [
    {
        email:'moumitam038@gmail.com',
        password:'1234567',
        name:'Moumita Mondal',
        phone:'9876543212',
        address:'xyz rd,kolkata-700070',
    } ,
    
    {
        email:'riyadas@gmail.com',
        password:'99999',
        name:'Riya Das',
        phone:'9876542310',
        address:'abc colony,kolkata-700132',
    } ,
    {
        email:'ankitasen@gmail.com',
        password:'11111111',
        name:'Ankita Sen',
        phone:'7891234560',
        address:'budge budge,kolkata-700137',
    } ,
    {
        email:'akashroy@gmail.com',
        password:'2222222',
        name:'Akash Roy',
        phone:'9806754320',
        address:'Bracebridge,kolkata-700122',
    } ,
    {
        email:'ankitbose@gmail.com',
        password:'33333333',
        name:'Ankit Bose',
        phone:'9889976800',
        address:'Majherhat,kolkata-700102',
    } ,
    {
        email:'sayandas@gmail.com',
        password:'4444444',
        name:'Sayan Das',
        phone:'9999888880',
        address:'jadavpur.kol-700054',
    } ,
    {
        email:'kiyadas@gmail.com',
        password:'555555',
        name:'Kiya Das',
        phone:'8887698767',
        address:'garia,kol-700077',
    } ,
    {
        email:'utshapal@gmail.com',
        password:'666666',
        name:'Utsha Pal',
        phone:'7879789099',
        address:'newgaria,kol-700089',
    } ,
    {
        email:'subhamal@gmail.com',
        password:'777777',
        name:'Subha Mal',
        phone:'8789878987',
        address:'singur,hoogly-780870',
    } ,
    {
        email:'souravjha@gmail.com',
        password:'888888',
        name:'Sourav Jha',
        phone:'8967452390',
        address:'tollygunge,kol-700045',
    } ,

]

server.get('/students', (req, res) => {
    const search = req.query.search;
    let result = null;
    if (search) {
        result = students.filter((st) => { return st.name.toLowerCase().startswith(search.tolowercase()) })

    }
    else {
        result = students;
    }

    res.send(result);
})

server.get('/students/:id', (req, res) => {
    const studentID = req.params.id;
    let student = students.find((st) => { return st.id == studentID });
    if(!student)
    {
        res.status(404).send({message:'student not found'})
    }
    res.send(student);
})

server.post('/students', (res, req) => {
    const student = req.body;
    students.push(student);
    res.send({ message: 'new student information saved!' })
})
server.get('/about', (req, res) => {
    res.sendFile('C:/september/20210607-D2C-BLG-02_DESKTOP.jpg');
})
server.listen(port, () => {
    console.log('server is running on port:' + port);

}
)
