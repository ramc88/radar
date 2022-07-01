import * as http from "http";
import app from "../app.js";

/**
* Read port from environment, else set 8888
*/

const port = process.env.PORT || '8888';
app.set('port', port);


/**
 * Create server and listen on provided port.
 */

const server = http.createServer(app);
server.listen(port);