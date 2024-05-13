/*
 @desc: register a custom protocol and specify file that will be served on request to the origin '/'. our app will be served from 'app://...' instead of the default 'file://...'
 @exports: scheme, requestHandler
 @usage: is used in main.js
 */
// import { Request, Response } from 'electron';
// const { stringify } = require('querystring'); unused
// import * as fs from 'fs';
// import * as path from 'path';



// const DIST_PATH = path.join(__dirname, '../../app/dist');

// const scheme = 'app'; // it will serve resources like app://..... instead of default file://...

// const mimeTypes: Record<string, string> = {
//   '.js': 'text/javascript',
//   '.mjs': 'text/javascript',
//   '.html': 'text/html',
//   '.htm': 'text/html',
//   '.json': 'application/json',
//   '.css': 'text/css',
//   '.svg': 'application/svg+xml',
//   '.ico': 'image/vnd.microsoft.icon',
//   '.png': 'image/png',
//   '.jpg': 'image/jpeg',
//   '.map': 'text/plain'
// };

// function charset(mimeType: string): string | null {
//   return ['.html', '.htm', '.js', '.mjs'].some((m) => m === mimeType)
//     ? 'utf-8'
//     : null;
// }
// // return the file type
// function mime(filename: string): string | null {
//   const type = mimeTypes[path.extname(`${filename || ''}`).toLowerCase()];
//   return type || null;
// }

/* requestHandler
      servers index-prod.html when we access the root endpoint '/'
      read the file above and pass on an object includes mimeType, charset, and exisiting data read from the file 
*/
// function requestHandler(
//   req: Request,
//   callback: (response: Response | Promise<Response>) => void
// ): void {
//   // The URL() constructor returns a newly created URL object representing the URL defined by the parameters.
//   const reqUrl = new URL(req.url);
//   // path.normalize resolves '..' and '.' segments in sequential path segments
//   // url.pathname: an initial '/' followed by the path of the URL not including the query string or fragment (or the empty string if there is no path).
//   let reqPath = path.normalize(reqUrl.pathname);

//   // when app opens, serve index-prod.html
//   if (reqPath === '/') {
//     reqPath = '/index-prod.html';
//   }
//   // path.basename returns the last portion of a path which includes filename we want to serve
//   const reqFilename = path.basename(reqPath);
//   // use fs module to read index-prod.html (reqPath) in dist folder
//   fs.readFile(path.join(DIST_PATH, reqPath), (err, data) => {
//     const mimeType = mime(reqFilename); // returns the file type
//     // check if there is no error and file type is valid, pass on the info to the next middleware
//     if (!err && mimeType !== null) {
//       callback({
//         mimeType,
//         charset: charset(mimeType),
//         data
//       });
//     } else {
//       console.error(err);
//     }
//   });
// }

// export { scheme };
