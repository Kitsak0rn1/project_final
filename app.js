const express = require('express'); //create Obj
const bodyParser = require('body-parser');
const path = require('path');

const { title } = require('process');

let flash = require('express-flash');
let session = require('express-session');

const app = express();
const port = 3000; //Port 3000 set

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true })); //use Middleware
// body-parser ช่วยในการประมวลผลและจัดการข้อมูลจาก request ที่ผู้ใช้กรอกในแบบฟอร์มในหน้าเว็บ 
// (เช่น ชื่อ, อีเมล, รหัสผ่าน) เป็นรูปแบบข้อมูลที่ JavaScript สามารถจัดการได้ง่าย เช่น ออบเจ็กต์ JavaScript. 

app.set('view engine', 'ejs') //Auto Read .ejs File !Templet engine!

//SET GET Home page
app.get('/', (req, res) => { 
    res.render("index.ejs", { //แสดงผล .ejs File
        title: "Home Page" //Set Title Tag
    }); 
})

// SET GET Theater
app.get('/Theater1', (req, res) => { 
    res.render("Theater1.ejs", {
        title: "Theater 1", //Set Title Tag
        movie: "Avengers Endgame" //กำหนดค่า movie ไว้ หากใน Th1 มีการเรียกใช้ "ตัวแปร movie" จะนำเอาค่านี้ไปแสดง
    });
})

app.get('/Theater2', (req, res) => { 
    res.render("Theater2.ejs", {
        title: "Theater 2",
        movie: "Iron man 3"
    });
})
// End SET GET Theater

// Set GET adding pages Theater1 A1
app.get('/add_sit', (req, res, next) => {
    res.render("add_sit.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});

// Set GET adding pages Theater1 A2
app.get('/add_sit_a2', (req, res, next) => {
    res.render("add_sit_a2.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});

// Set GET adding pages Theater1 B1
app.get('/add_sit_a3', (req, res, next) => {
    res.render("add_sit_a3.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});

// Set GET adding pages Theater1 B2
app.get('/add_sit_a4', (req, res, next) => {
    res.render("add_sit_a4.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});

// Set GET adding pages Theater2 A1
app.get('/add_sit_b1', (req, res, next) => {
    res.render("add_sit_b1.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});
// Set GET adding pages Theater2 A2
app.get('/add_sit_b2', (req, res, next) => {
    res.render("add_sit_b2.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});

// Set GET adding pages Theater2 B1
app.get('/add_sit_b3', (req, res, next) => {
    res.render("add_sit_b3.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});

// Set GET adding pages Theater2 B2
app.get('/add_sit_b4', (req, res, next) => {
    res.render("add_sit_b4.ejs", {
        title: "Reserve", //Set Title Tag
        name: "",
        movie: ""
    });
});

// Add Goble variable
let Inputnames = ''; 
let Inputmovie = ''; 
let InputShowTime = ''; 
let InputTheater = ''; 
let seat ='';

let imageUrls = [
    'https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg', //[0]
    'https://cdn.kobo.com/book-images/39f5758d-be8e-4dfd-8395-52092dfb6f49/353/569/90/False/marvel-s-iron-man-3.jpg', //[1]
  ];

app.post('/add_sit', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[0]; //เลือกรูปจาก Array

    res.redirect('/success')
});

app.post('/add_sit_a2', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[0];

    res.redirect('/success')
});

app.post('/add_sit_a3', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[0];

    res.redirect('/success')
});

app.post('/add_sit_a4', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[0];

    res.redirect('/success')
});

app.post('/add_sit_b1', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[1];

    res.redirect('/success')
});

app.post('/add_sit_b2', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[1];

    res.redirect('/success')
});

app.post('/add_sit_b3', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[1];

    res.redirect('/success')
});

app.post('/add_sit_b4', (req, res) => {
    Inputnames = req.body.name; // รับค่า name จากฟอร์ม
    Inputmovie = req.body.movie;
    InputShowTime = req.body.ShowTime; // รับค่า name จากฟอร์ม
    InputTheater = req.body.Theater;
    seat = req.body.seat;
    picture_movie = imageUrls[1];
    
    res.redirect('/success')
});

//Get data from Goble variable
app.get('/success', (req, res) => { //SET GET Th1
    res.render("success.ejs", {
        title: "Ticket", //Set Title Tag
        name: Inputnames,
        movie: Inputmovie,
        ShowTime: InputShowTime,
        Theater: InputTheater,
        seat: seat,
        picture_movie: picture_movie
    });
})

// Set Port Reading
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  