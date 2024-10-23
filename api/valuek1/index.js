module.exports = async function (context, req) {
    const apiKey = process.env.kvalue;

    context.res.json({
        text: "Hello from the new API",
        apiKey: apiKey // You can include this in the response, or use it elsewhere
    });
};