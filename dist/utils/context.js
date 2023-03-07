export async function createContext(db, req, res) {
    const headers = req.headers;
    // run an auth check here possibly & return auth user or other context
    // console.log('headers ::: backend', headers)
    return {
        db,
        req,
        res,
    };
}
