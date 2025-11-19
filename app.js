// app.js

// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const tutorialsRoute = require('./routes/tutorials');

app.use(cors());
app.use(express.json());
app.use('/tutorial', tutorialsRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


/*const express = require('express');
const app = express();
const usersRoute = require('./routes/users');
const tutorialsRoute = require('./routes/tutorials');

app.use(express.json());

//app.use('/tutorials', usersRoute);
app.use('/tutorial', tutorialsRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/