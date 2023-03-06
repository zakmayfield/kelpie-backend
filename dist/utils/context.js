export async function createContext(db, req, res) {
    const headers = req.headers;
    // console.log('::: headers in context :::', headers)
    return {
        db,
        req,
        res,
    };
}
