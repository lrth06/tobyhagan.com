import dbConnect from "../../lib/config/mongo";
import PageView from "../../lib/models/PageView";
export default async function handler(req, res) {
    await dbConnect();
    if (req.method !== 'POST') {
        res.status(405).json('Method Not Allowed');
    }

    const key = req.body.path
    const ip = req.body.ip
    if (ip === process.env.LOCAL_TRAFFIC_IP) {
        return res.status(200).json({ message: 'Local Traffic' });

    }
    const pathExists = await PageView.findOne({ path: key })
    if (!pathExists) {
        const newPath = new PageView({ path: key, views: [{ ip }] })
        await newPath.save()
        return res.status(200).json({ message: 'OK' })
    }
    else {
        const newView = { ip }
        await pathExists.views.push(newView)
        const saved = await pathExists.save()
        if (saved) {
            return res.status(200).json({ message: 'OK' })
        }
    }
}









