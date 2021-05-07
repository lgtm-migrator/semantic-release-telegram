import { assert } from 'chai';
import {  _load } from '../entry';
import Test from '../Test';
import { checkError } from '../utils';

const success = _load('success').default;
const templates = _load('templates');
const factory = new Test();

suite('success');

before(function () {
    factory.mockAPI();
});

const repository = {
    url           : 'http://bo.sh/amoti',
    protocol      : 'https',
    dropHTTPSAuth : true
};

test('Default template', async function () {
    const verified = { name: 'test-app', templates, chats: [ 1, 2 ], repository };

    await success.call(
        { verified },
        null,
        { logger: console, nextRelease: { version: '1.0.2', type: 'patch' } }
    );

    const apiCalls = await factory.getApiCalls('type=requestSent&url=sendMessage');

    assert.lengthOf(apiCalls, 2);
    assert.deepEqual(apiCalls.map(i => i.data.chat_id), [ 1, 2 ]);
    apiCalls.forEach(item => {
        assert.equal(item.data.text, `A <b><i>patch</i></b> version of <a href='https://bo.sh/amoti'>${verified.name}</a> has been released. Current version is <b>1.0.2</b>`);
    });
});

test('Negative: missing verify', async function () {
    const promise = success.call(
        {},
        { },
        {
            logger : console
        }
    );

    await checkError(promise, 'VERIFICATION_MISSED', 'verifyConditions should be passed to run step [success]');
});

after(function () {
    factory.unMockAPI();
});
