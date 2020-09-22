'use strict';

const request = require('request-promise-native');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.handler = async event => {
	const code = event.queryStringParameters.code;

	const tokenURL = `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${process.env.REDIRECT_URI}`;
	const tokenRes = JSON.parse(await request.post(tokenURL));
	const { access_token: token } = tokenRes;
	
	const userLookup = await request.get({
		url: 'https://api.twitch.tv/helix/users',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Client-ID': process.env.CLIENT_ID,
		},
	});

	const lookupData = JSON.parse(userLookup);
	const userID = lookupData.data[0].id;

	const jwtData = {
		role: 'external',
		channel_id: userID,
		pubsub_perms: {
			send: [
				'broadcast',
			]
		}
	};

	const generatedJWT = jwt.sign(jwtData, Buffer.from(process.env.SIGNING_TOKEN, 'base64'), {
		expiresIn: '1d',
	});

	return {
		statusCode: 302,
		headers: {
			"Location": `https://wondermine.3ocene.com/step2.html#token=${generatedJWT}`,
		},
	};
}
