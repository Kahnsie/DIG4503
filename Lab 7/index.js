import Express from "express";

const App = Express();
const port = 45030;



const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/people/:person', (req, res) => {
    let person = req.params.person;
    if (names.includes(person)){
        res.json({ Person: person});
    } else {
        res.json({ Person: "Not available"});
    }
});

App.get('/search/:person', (req, res) => {
    const result = names.filter(function(str){return str.includes(req.params.person)});

    if(result != 0) {
        res.json({ search: result});
    } else {
        res.json({search: "Not available"});
    }
})

App.listen(port, () => {

});

