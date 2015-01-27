var serve = function(options) {

	var express = require("express");
	var bodyParser = require("body-parser");
	var path = require("path");
	var fs = require("fs");
	var html = fs.readFileSync(path.resolve(__dirname, "../app/simple.html"), "utf-8");


	// require the page rendering logic
	var renderApplication =
		function(path, readItems, scriptUrl, styleUrl, commonsUrl, callback) {
			callback(null, html.replace("SCRIPT_URL", scriptUrl));
		};

	// load bundle information from stats
	var stats = require("../build/stats.json");

	var publicPath = stats.publicPath;

	var STYLE_URL = options.separateStylesheet && (publicPath + "main.css?" + stats.hash);
	var SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.main)[0];
	var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];

	var app = express();
	var part = 1;
	var eventstack = [];

	// serve the static assets
	app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
		maxAge: "200d"
	}));

	// artifical delay
	app.use(function(req, res, next) {
		// why ??
		//setTimeout(next, Math.ceil(Math.random() * 1000));

		next();
	});

	app.use(bodyParser.json());

	app.get("/api/part", function(req, res){
		res.send("" + part);
	});

	app.post("/api/part", function(req, res){
		part = + req.query.num;
		res.send();
	});

	app.get("/api/event", function(req, res){
		res.send(eventstack);
		eventstack = [];
	});

	app.post("/api/event", function(req, res){
		eventstack.push(req.query.name);
		res.send();
	});

	// application
	app.get("/*", function(req, res) {
		renderApplication(req.path, {
			TodoItem: function(item, callback) {
				callback(null, todosDb.get(item.id, {}));
			},
			TodoList: function(item, callback) {
				callback(null, listsDb.get(item.id, []));
			}
		}, SCRIPT_URL, STYLE_URL, COMMONS_URL, function(err, html) {
			res.contentType = "text/html; charset=utf8";
			res.end(html);
		});
	});


	var port = +(process.env.PORT || options.defaultPort || 9090);
	app.listen(port, function() {
		console.log("Server listening on port " + port);
	});
};

serve({});