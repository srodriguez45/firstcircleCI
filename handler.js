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
      {
        data: 'body from cricleci deploy!!!'
      },
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
