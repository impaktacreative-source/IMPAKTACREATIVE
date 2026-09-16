import handler from "../../dist/server/server.js";

export default (request, context) => handler.fetch(request, {}, context);
