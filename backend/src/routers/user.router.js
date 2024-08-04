import { Router } from "express";
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus";
const router = Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if (user) {
        res.json(generateTokenResponse(user));
        return;
    }

    res.status(BAD_REQUEST).send('Username or password is incorrect');
});

const generateTokenResponse = user => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        'SomeRandomText',
        {
            expiresIn: '30d',
        }
    );

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    }
};