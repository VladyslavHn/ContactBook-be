// Wrapper pro kontrolery pro jednodušší práci s asynchronními funkcemi
export const ctrlWrapper = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (error) {
        next(error); // Předání chyby dalšímu middleware
    }
}
