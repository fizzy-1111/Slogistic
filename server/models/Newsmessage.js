import mongoose from 'mongoose';

const newsSchema = mongoose.Schema({
    title: String,
    content: [String],
    creator: String,
    selectedFile: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var NewsMessage = mongoose.model('NewsMessage', newsSchema);

export default NewsMessage;