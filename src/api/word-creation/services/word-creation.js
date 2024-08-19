'use strict';

/**
 * word-creation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::word-creation.word-creation');
