

import { Schema, model } from 'mongoose';

const TaskShema = new Schema({
    name: {
        type: String,
        required: [true, 'must provied name'],
        trim: true,
        maxlength: [50, 'name can not be more then 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
});

export default model('Task', TaskShema);