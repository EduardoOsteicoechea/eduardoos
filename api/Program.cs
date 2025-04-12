var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.ListenAnyIP(5000, listenOptions =>
    {
        listenOptions.UseHttps();
    });
});

var app = builder.Build();

app.MapGet("/api", () => "Hello World!");

app.Run();
