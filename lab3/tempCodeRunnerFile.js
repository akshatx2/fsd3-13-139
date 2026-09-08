
  } else if (req.url === "/matka") {
    res.setHeader("content-type", "text/html");
    const stream = createReadStream("matka.html", { encoding: "utf-8" });
    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log("prg3 is running at 3000..."));