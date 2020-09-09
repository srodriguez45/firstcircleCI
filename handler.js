'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        msg: 'Serverless running from CircleCI deploy',
        info: {
          path: event.path,
          method: event.httpMethod
        }
      },
      null,
      2
    ),
  };
};

module.exports.simple = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        msg: 'Serverless running from CircleCI deploy, serverless simple',
        info: {
          path: event.path,
          method: event.httpMethod
        }
      },
      null,
      2
    ),
  };
};