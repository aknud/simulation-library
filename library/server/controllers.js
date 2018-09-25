module.exports = {
    login: (req, res)=>{
        const dbi = req.app.get('db');
        console.log('login fired')
    },
    register: (req, res)=>{
        const dbi = req.app.get('db');
        console.log('register fired')
    },
    logout: (req,res)=>{
        req.session.destroy();
        res.status(200);
    }
}