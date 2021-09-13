import fetch from 'node-fetch';
import { determineError } from '../../services/errors';
import http from '../../services/http';

/**
 * Class dealing with the /payment-links endpoint
 *
 * @export
 * @class PaymentLinks
 */
export default class PaymentLinks {
    constructor(config) {
        this.config = config;
    }

    /**
     * Create a Payment Link and pass through all the payment information, like the amount, currency, country and reference.
     *
     * @memberof PaymentLinks
     * @param {Object} body
     * @return {Promise<Object>} A promise to the Payment Link response.
     */
    async create(body) {
        try {
            const response = await http(fetch, this.config, {
                method: 'post',
                url: `${this.config.host}/payment-links`,
                headers: { Authorization: this.config.sk },
                body,
            });
            return await response.json;
        } catch (err) {
            const error = await determineError(err);
            throw error;
        }
    }

    /**
     * Retrieve details about a specific Payment Link using its ID returned when the link was created. In the response, you will see the status of the Payment Link.
     *
     * @memberof PaymentLinks
     * @param {string} id
     * @return {Promise<Object>} A promise to the Payment Link response.
     */
    async get(id) {
        try {
            const response = await http(fetch, this.config, {
                method: 'get',
                url: `${this.config.host}/payment-links/${id}`,
                headers: { Authorization: this.config.sk },
            });
            return await response.json;
        } catch (err) {
            const error = await determineError(err);
            throw error;
        }
    }
}