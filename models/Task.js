import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	task: { type: String, required: true },
	
});

export default mongoose.models.Task || mongoose.model("Task", taskSchema);
