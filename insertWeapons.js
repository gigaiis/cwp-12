module.exports = async (db) => {
    return Promise.all(
        [
            db.weapons.create({
                name: 'swords',
                dps: 99
            }),
            db.weapons.create({
                name: 'pole',
                dps: 73
            }),
            db.weapons.create({
                name: 'nunchuck',
                dps: 155
            }),db.weapons.create({
                name: 'sais',
                dps: 101
            })        
        ]
    ).then(() => {
        console.log('insert weapons completed');
    }).catch((err) => {
        console.log(err);
    })
}