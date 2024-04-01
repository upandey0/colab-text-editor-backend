import express from 'express'
import registerUser from '../controllers/userRegister.js'
import userSignin from '../controllers/userSignin.js'

const router = express.Router()


router.get('/user', (req,res)=>{
    res.send('I am from the user Router')
})

router.post('/signup', registerUser)
router.get('/signin', userSignin)

export default router;