export async function createContext(db, req, res) {
    return {
        db,
        req,
        res,
    };
}
