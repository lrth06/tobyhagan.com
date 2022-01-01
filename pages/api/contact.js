import sparkPost from "sparkpost";
const client = new sparkPost(process.env.SPARKPOST_KEY);

export default async function sendContactEmail(req, res) {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ message: "Please fill out all fields" });
        return;
    }



    try {
        const response = await client.transmissions.send({

            content: {
                from: "Contact@mail.tobyhagan.com",
                subject: `New Message From ${name}`,
                html: `<html>
              <body>
              <p>
              <strong>Name:</strong> ${name}<br>
              <strong>Email:</strong> ${email}<br>
              <strong>Phone:</strong> ${phone}<br>
              <p>${message}</p>
              </p>
              </body>
              </html>`,
            },
            recipients: [{ address: "lrth06@gmail.com" }],
        });
        console.log(response);
        res.status(200).json({
            message: "Email sent successfully",
        });
        return response;
    } catch (err) {
        console.log(err);
    }
}
