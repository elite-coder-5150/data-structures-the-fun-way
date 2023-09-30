export const searchByCategory = (req, res) => {
    const { category } = req.body;

    const sql = `SELECT category FROM \`component\` where category = ?`

    db.query(sql, [category], (err, result))
        .then((result) => {
            if (result.length === 0) {
            } else {}
        }).catch((err) => {
            console.error(err); 
        });
}