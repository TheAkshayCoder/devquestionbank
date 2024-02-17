const Question = require('../models/product')

const getHomePageData =  async(req, res) => {
    const questions = await Question.find({question: Object.keys(req.query)[0]})
    res.status(200).json({msg: questions})
};

const getTestPageData = async (req, res) => {
    res.status(200).json({msg: "Welcom to test page"});
};

module.exports = {getHomePageData, getTestPageData}