using BL;
using DAL;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
//builder.Services.AddRazorPages();

builder.Services.AddControllers();
builder.Services.AddScoped<IVaccinationDL, VaccinationDL>();
builder.Services.AddScoped<IVaccinationBL, VaccinationBL>();
builder.Services.AddScoped<ICoronaSickDL, CoronaSickDL>();
builder.Services.AddScoped<ICoronaSickBL, CoronaSickBL>();
builder.Services.AddScoped<IClientDL, ClientDL>();
builder.Services.AddScoped<IClientBL, ClientBL>();
builder.Services.AddCors();//אפשור גישה

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddDbContext<CoronaContext>(options => options.UseSqlServer("Data Source=.;Initial Catalog=Corona;Integrated Security=True"));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
