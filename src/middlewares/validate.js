export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      status: 400,
      message: "Invalid data in request.",
      errors: result.error.errors,
    });
  }

  next();
};

