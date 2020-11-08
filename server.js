'use strict'

require('dotenv').config()
const path = require('path');
const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SESSION_SECRET } = process.env;