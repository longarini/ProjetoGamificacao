const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TaskSchema = new Schema({
    userId: {type: mongoose.ObjectId, required: true, },
    nomeTask: { type: String, required: true },
    descricaoTask: { type: String, required: true},
    pontosTask: { type: Number , required: true},
    ativo: { type: Boolean, default: true, required: true, },
},
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Tasks', TaskSchema);