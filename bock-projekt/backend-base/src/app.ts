// basics
import path from 'path';

// express
import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session'
import { createClient } from 'redis';

// authentication
import { configurePassport } from './conf/passport';
import { isAdmin, isAuthenticated } from './mw/auth';
import passport from 'passport';

// routes
import auth from './routes/auth';

// test-routes
import test from './routes/test';

// middleware
import { logRequest } from './mw/logger';
import { frontendProxy } from './mw/proxy'

// express
const app = express();
const port = 3600;

app.use(session({
    //store: redisStore,
    secret: 'umpalumpa',
    resave: false,
    saveUninitialized: false
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

// authentication
/**
 * Konfigureren von Passport authentication
 */
configurePassport();
app.use('/auth', auth);

// proxies
/**
 * Weiterleitung für das Frontend
 */
app.use('/crow', logRequest, frontendProxy);

// test-routes
/**
 * Test routes, testet auf Availability und Service Health
 */
app.use('/test', logRequest, isAuthenticated, test);

/**
 * Weiterleitung für das Frontend
 */
app.get('*', logRequest, frontendProxy)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});