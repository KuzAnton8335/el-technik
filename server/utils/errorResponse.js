class ErrorResponse extends Error {
	/**
	 * Создает экземпляр ErrorResponse.
	 * @param {string} message - Сообщение об ошибке
	 * @param {number} statusCode - HTTP статус-код
	 */
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
		this.isOperational = true; // Это свойство показывает, что ошибка ожидаемая (не программная ошибка)

		// Сохраняет стек вызовов (не включая конструктор ErrorResponse в стеке)
		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = ErrorResponse;
