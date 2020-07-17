const getUser = req => {
  const authorization = req.request.headers.authorization;

  if (!authorization) throw new Error('Authentication Required');
  else {
    const token = authorization.replace('Bearer ', '');
    const user = jwt.verify(token, process.env.TOKEN_SECRET);

    return user.userId;
  }
};
