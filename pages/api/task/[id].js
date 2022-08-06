import Task from "../../../models/Task";
import dbConnect from "../../../utils/dbConnect";

export default async (req, res) => {
	const { method } = req;
	const { id } = req.query;

	// Connect to database
	await dbConnect();

	if (method === "DELETE") {
		try {
			await Task.findByIdAndDelete(id);
			res.status(200).json({ message: "Task Deleted Successfully" });
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error" });
			console.log(error);
		}
	}
};
