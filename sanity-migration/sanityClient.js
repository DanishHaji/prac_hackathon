"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: '2emi6xpc', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skiPIpekfyf5Evy08wBfIvYGTKfIfHnrPAgQNZO042wQiLTlGpmcEXRVdfkgZInR81TEHwlPGIMZmrSzSleWb32xcSyNQ2kxUREbtHQa8Zdnz6TXFTG0zOYj0klpH8fG9Ik0i9Uof8RKDnkvesq5ztBQ1E7AficLrXMksSxA2r5nA0c0xAis"
});
