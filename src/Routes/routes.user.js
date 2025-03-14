const { createUserController, getUserDetailsController, loginUserController, verifyOtpController, forgetPasswordController, resendOtpToEmail, changePasswordController } = require('../Controllers/controllers.user');
const { verifyUserMiddleware, verifytUserOtpMiddleware } = require('../Middleware/userAuth');

const userRouter = require('express').Router();

userRouter.post('/signup', createUserController);
userRouter.post('/login', loginUserController);
userRouter.get('/details', verifyUserMiddleware, getUserDetailsController);
userRouter.post('/otp', verifytUserOtpMiddleware, verifyOtpController);
// userRouter.post('/send-otp', sendOtpToEmail);
userRouter.post('/resend-otp',resendOtpToEmail)
userRouter.post('/forget',  forgetPasswordController);
userRouter.patch('/change', verifyUserMiddleware, changePasswordController);


module.exports = userRouter;
