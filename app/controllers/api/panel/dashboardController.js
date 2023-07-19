module.exports = async (req, res) => {
    return res.render("index", {
        wellcome: "wellcome to panel admin"
    });
}
