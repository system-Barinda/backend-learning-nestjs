export const requestLogger =(req,res,next) => {
    const start = Date.now();
    res.on('finish',() => {
        const duration = Date.now() - start;
        const timeStamp = new Date().toISOString();

        console.log( `[${timeStamp}] ${req.method} ${req.originalUrl} - ${duration}ms`);
    });
    next()
}